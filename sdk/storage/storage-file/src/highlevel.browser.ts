import { Aborter } from "./Aborter";
import { FileClient } from "./FileClient";
import { UploadToAzureFileOptions } from "./highlevel.common";
import { Batch } from "./utils/Batch";
import { FILE_RANGE_MAX_SIZE_BYTES, DEFAULT_HIGH_LEVEL_PARALLELISM } from "./utils/constants";

/**
 * ONLY AVAILABLE IN BROWSERS.
 *
 * Uploads a browser Blob/File/ArrayBuffer/ArrayBufferView object to an Azure File.
 *
 * @export
 * @param {Blob | ArrayBuffer | ArrayBufferView} browserData Blob, File, ArrayBuffer or ArrayBufferView
 * @param {FileClient} fileClient
 * @param {UploadToAzureFileOptions} [options]
 * @returns {Promise<void>}
 */
export async function uploadBrowserDataToAzureFile(
  browserData: Blob | ArrayBuffer | ArrayBufferView,
  fileClient: FileClient,
  options: UploadToAzureFileOptions = {}
): Promise<void> {
  const browserBlob = new Blob([browserData]);
  return UploadSeekableBlobToAzureFile(
    (offset: number, size: number): Blob => {
      return browserBlob.slice(offset, offset + size);
    },
    browserBlob.size,
    fileClient,
    options
  );
}

/**
 * ONLY AVAILABLE IN BROWSERS.
 *
 * Uploads a browser Blob object to an Azure file. Requires a blobFactory as the data source,
 * which need to return a Blob object with the offset and size provided.
 *
 * @param {(offset: number, size: number) => Blob} blobFactory
 * @param {number} size
 * @param {FileClient} fileClient
 * @param {UploadToAzureFileOptions} [options]
 * @returns {Promise<void>}
 */
async function UploadSeekableBlobToAzureFile(
  blobFactory: (offset: number, size: number) => Blob,
  size: number,
  fileClient: FileClient,
  options: UploadToAzureFileOptions = {}
): Promise<void> {
  const aborter = options.abortSignal || Aborter.none;
  if (!options.rangeSize) {
    options.rangeSize = FILE_RANGE_MAX_SIZE_BYTES;
  }
  if (options.rangeSize < 0 || options.rangeSize > FILE_RANGE_MAX_SIZE_BYTES) {
    throw new RangeError(`options.rangeSize must be > 0 and <= ${FILE_RANGE_MAX_SIZE_BYTES}`);
  }

  if (!options.fileHTTPHeaders) {
    options.fileHTTPHeaders = {};
  }

  if (!options.parallelism) {
    options.parallelism = DEFAULT_HIGH_LEVEL_PARALLELISM;
  }
  if (options.parallelism < 0) {
    throw new RangeError(`options.parallelism cannot less than 0.`);
  }

  // Create the file
  await fileClient.create(size, {
    abortSignal: aborter,
    fileHTTPHeaders: options.fileHTTPHeaders,
    metadata: options.metadata
  });

  const numBlocks: number = Math.floor((size - 1) / options.rangeSize) + 1;
  let transferProgress: number = 0;

  const batch = new Batch(options.parallelism);
  for (let i = 0; i < numBlocks; i++) {
    batch.addOperation(
      async (): Promise<any> => {
        const start = options.rangeSize! * i;
        const end = i === numBlocks - 1 ? size : start + options.rangeSize!;
        const contentLength = end - start;
        await fileClient.uploadRange(blobFactory(start, contentLength), start, contentLength, {
          abortSignal: aborter
        });
        // Update progress after block is successfully uploaded to server, in case of block trying
        // TODO: Hook with convenience layer progress event in finer level
        transferProgress += contentLength;
        if (options.progress) {
          options.progress({ loadedBytes: transferProgress });
        }
      }
    );
  }
  return batch.do();
}
