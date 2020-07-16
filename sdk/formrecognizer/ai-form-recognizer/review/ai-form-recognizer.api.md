## API Report File for "@azure/ai-form-recognizer"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AbortSignalLike } from '@azure/core-http';
import { AzureKeyCredential } from '@azure/core-auth';
import * as coreHttp from '@azure/core-http';
import { KeyCredential } from '@azure/core-auth';
import { OperationOptions } from '@azure/core-http';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PipelineOptions } from '@azure/core-http';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';
import { RestResponse } from '@azure/core-http';
import { TokenCredential } from '@azure/identity';

// @public
export interface AccountProperties {
    customModelCount: number;
    customModelLimit: number;
}

// @public
export interface AnalyzeOperationResultModel {
    // Warning: (ae-forgotten-export) The symbol "AnalyzeResult" needs to be exported by the entry point index.d.ts
    analyzeResult?: AnalyzeResult;
    createdOn: Date;
    lastModified: Date;
    status: OperationStatus;
}

export { AzureKeyCredential }

// @public
export type BeginCopyModelOptions = FormRecognizerOperationOptions & {
    updateIntervalInMs?: number;
    onProgress?: (state: BeginCopyModelPollState) => void;
    resumeFrom?: string;
};

// @public
export interface BeginCopyModelPollState extends PollOperationState<CustomFormModelInfo> {
    readonly client: CopyModelPollerClient;
    copyAuthorization: CopyAuthorization;
    readonly copyModelOptions?: CopyModelOptions;
    modelId: string;
    resultId?: string;
    status: OperationStatus;
    targetResourceId: string;
    targetResourceRegion: string;
}

// @public
export type BeginRecognizeContentOptions = RecognizeContentOptions & {
    updateIntervalInMs?: number;
    onProgress?: (state: BeginRecognizeContentPollState) => void;
    resumeFrom?: string;
};

// @public (undocumented)
export interface BeginRecognizeContentPollState extends PollOperationState<FormPageArray> {
    // (undocumented)
    readonly analyzeOptions?: RecognizeContentOptions;
    // (undocumented)
    readonly client: RecognizeContentPollerClient;
    // (undocumented)
    contentType?: FormContentType;
    // (undocumented)
    resultId?: string;
    // (undocumented)
    source?: FormRecognizerRequestBody | string;
    // (undocumented)
    status: OperationStatus;
}

// @public (undocumented)
export interface BeginRecognizeCustomFormPollState extends PollOperationState<RecognizedFormArray> {
    // (undocumented)
    readonly analyzeOptions?: RecognizeFormsOptions;
    // (undocumented)
    readonly client: RecognizeCustomFormPollerClient;
    // (undocumented)
    contentType?: FormContentType;
    // (undocumented)
    modelId: string;
    // (undocumented)
    resultId?: string;
    // (undocumented)
    source?: FormRecognizerRequestBody | string;
    // (undocumented)
    status: OperationStatus;
}

// @public
export type BeginRecognizeFormsOptions = RecognizeFormsOptions & {
    updateIntervalInMs?: number;
    onProgress?: (state: BeginRecognizeCustomFormPollState) => void;
    resumeFrom?: string;
};

// @public (undocumented)
export interface BeginRecognizeReceiptPollState extends PollOperationState<RecognizedFormArray> {
    // (undocumented)
    readonly analyzeOptions?: RecognizeReceiptsOptions;
    // (undocumented)
    readonly client: RecognizeReceiptPollerClient;
    // (undocumented)
    contentType?: FormContentType;
    // (undocumented)
    resultId?: string;
    // (undocumented)
    source?: FormRecognizerRequestBody | string;
    // (undocumented)
    status: OperationStatus;
}

// @public
export type BeginRecognizeReceiptsOptions = RecognizeReceiptsOptions & {
    updateIntervalInMs?: number;
    onProgress?: (state: BeginRecognizeReceiptPollState) => void;
    resumeFrom?: string;
};

// @public
export type BeginTrainingOptions = TrainingFileFilter & {
    updateIntervalInMs?: number;
    onProgress?: (state: BeginTrainingPollState) => void;
    resumeFrom?: string;
};

// @public
export interface BeginTrainingPollState extends PollOperationState<CustomFormModel> {
    readonly client: TrainPollerClient;
    modelId?: string;
    source: string;
    status: CustomFormModelStatus;
    readonly trainModelOptions?: TrainingFileFilter;
}

// @public
export interface CommonFieldValue {
    boundingBox?: Point2D[];
    confidence?: number;
    fieldElements?: FormElement[];
    pageNumber?: number;
    text?: string;
}

// @public
export type ContentPollerLike = PollerLike<PollOperationState<FormPageArray>, FormPageArray>;

// @public
export interface CopyAuthorization extends CopyAuthorizationResultModel {
    expiresOn: Date;
    resourceId: string;
    resourceRegion: string;
}

// @public
export interface CopyAuthorizationResultModel {
    accessToken: string;
    expirationDateTimeTicks: number;
    modelId: string;
}

// @public
export type CopyModelOptions = FormRecognizerOperationOptions;

// @public
export type CopyModelPollerClient = {
    beginCopyModel: (modelId: string, copyAuthorization: CopyAuthorization, copyModelOptions?: CopyModelOptions) => Promise<GeneratedClientCopyCustomModelResponse>;
    getCopyModelResult: (modelId: string, resultId: string, options: GetCopyModelResultOptions) => Promise<GeneratedClientGetCustomModelCopyResultResponse>;
};

// @public (undocumented)
export interface CustomFormField {
    accuracy?: number;
    label: string | null;
    name: string;
}

// @public
export interface CustomFormModel {
    errors?: FormRecognizerError[];
    modelId: string;
    status: CustomFormModelStatus;
    submodels?: CustomFormSubmodel[];
    trainingCompletedOn: Date;
    trainingDocuments?: TrainingDocumentInfo[];
    trainingStartedOn: Date;
}

// @public
export interface CustomFormModelInfo {
    modelId: string;
    status: CustomFormModelStatus;
    trainingCompletedOn: Date;
    trainingStartedOn: Date;
}

// @public
export type CustomFormModelStatus = "creating" | "ready" | "invalid";

// @public
export interface CustomFormSubmodel {
    accuracy?: number;
    fields: {
        [propertyName: string]: CustomFormField;
    };
    formType: string;
}

// @public
export type DeleteModelOptions = FormRecognizerOperationOptions;

// @public
export interface FieldData {
    boundingBox?: Point2D[];
    fieldElements?: FormElement[];
    pageNumber: number;
    text?: string;
}

// @public
export type FormContentType = "application/pdf" | "image/jpeg" | "image/png" | "image/tiff";

// @public
export type FormElement = FormWord | FormLine;

// @public
export interface FormElementCommon {
    boundingBox: Point2D[];
    pageNumber: number;
    text: string;
}

// @public
export type FormField = {
    confidence?: number;
    labelData?: FieldData;
    name?: string;
    valueData?: FieldData;
} & ({
    value?: string;
    valueType?: "string";
} | {
    value?: number;
    valueType?: "number";
} | {
    value?: Date;
    valueType?: "date";
} | {
    value?: string;
    valueType?: "time";
} | {
    value?: string;
    valueType?: "phoneNumber";
} | {
    value?: number;
    valueType?: "integer";
} | {
    value?: FormField[];
    valueType?: "array";
} | {
    value?: {
        [propertyName: string]: FormField;
    };
    valueType?: "object";
});

// @public
export interface FormFieldsReport {
    accuracy: number;
    fieldName: string;
}

// @public
export interface FormLine extends FormElementCommon {
    kind: "line";
    words: FormWord[];
}

// @public
export type FormModelResponse = CustomFormModel & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: Model;
    };
};

// @public
export interface FormPage {
    height: number;
    lines?: FormLine[];
    pageNumber: number;
    tables?: FormTable[];
    textAngle: number;
    unit: LengthUnit;
    width: number;
}

// @public
export interface FormPageArray extends Array<FormPage> {
}

// @public
export interface FormPageRange {
    firstPageNumber: number;
    lastPageNumber: number;
}

// @public
export type FormPollerLike = PollerLike<PollOperationState<RecognizedFormArray>, RecognizedFormArray>;

// @public
export class FormRecognizerClient {
    constructor(endpointUrl: string, credential: TokenCredential | KeyCredential, options?: FormRecognizerClientOptions);
    beginRecognizeContent(form: FormRecognizerRequestBody, contentType?: FormContentType, options?: BeginRecognizeContentOptions): Promise<ContentPollerLike>;
    beginRecognizeContentFromUrl(formUrl: string, options?: BeginRecognizeContentOptions): Promise<ContentPollerLike>;
    beginRecognizeCustomForms(modelId: string, form: FormRecognizerRequestBody, contentType?: FormContentType, options?: BeginRecognizeFormsOptions): Promise<FormPollerLike>;
    beginRecognizeCustomFormsFromUrl(modelId: string, formUrl: string, options?: BeginRecognizeFormsOptions): Promise<FormPollerLike>;
    beginRecognizeReceipts(receipt: FormRecognizerRequestBody, contentType?: FormContentType, options?: BeginRecognizeReceiptsOptions): Promise<ReceiptPollerLike>;
    beginRecognizeReceiptsFromUrl(receiptUrl: string, options?: BeginRecognizeReceiptsOptions): Promise<ReceiptPollerLike>;
    readonly endpointUrl: string;
    }

// @public
export interface FormRecognizerClientOptions extends PipelineOptions {
}

// @public
export interface FormRecognizerError {
    code: string;
    message: string;
}

// @public
export interface FormRecognizerOperationOptions extends OperationOptions {
}

// @public
export type FormRecognizerRequestBody = Blob | ArrayBuffer | ArrayBufferView | NodeJS.ReadableStream;

// @public
export interface FormTable {
    columnCount: number;
    rowCount: number;
    rows: FormTableRow[];
}

// @public
export interface FormTableCell {
    boundingBox: Point2D[];
    columnIndex: number;
    columnSpan?: number;
    confidence: number;
    fieldElements?: FormElement[];
    isFooter?: boolean;
    isHeader?: boolean;
    rowIndex: number;
    rowSpan?: number;
    text: string;
}

// @public
export interface FormTableRow {
    cells: FormTableCell[];
}

// @public
export class FormTrainingClient {
    constructor(endpointUrl: string, credential: TokenCredential | KeyCredential, options?: FormRecognizerClientOptions);
    beginCopyModel(modelId: string, target: CopyAuthorization, options?: BeginCopyModelOptions): Promise<PollerLike<PollOperationState<CustomFormModelInfo>, CustomFormModelInfo>>;
    beginTraining(trainingFilesUrl: string, useTrainingLabels: boolean, options?: BeginTrainingOptions): Promise<PollerLike<PollOperationState<CustomFormModel>, CustomFormModel>>;
    deleteModel(modelId: string, options?: DeleteModelOptions): Promise<RestResponse>;
    readonly endpointUrl: string;
    getAccountProperties(options?: GetAccountPropertiesOptions): Promise<AccountProperties>;
    getCopyAuthorization(resourceId: string, resourceRegion: string, options?: GetCopyAuthorizationOptions): Promise<CopyAuthorization>;
    getCustomModel(modelId: string, options?: GetModelOptions): Promise<FormModelResponse>;
    getFormRecognizerClient(): FormRecognizerClient;
    listCustomModels(options?: ListModelsOptions): PagedAsyncIterableIterator<CustomFormModelInfo, ListCustomModelsResponse>;
    }

// @public
export interface FormWord extends FormElementCommon {
    confidence?: number;
    containingLine?: FormLine;
    kind: "word";
}

// Warning: (ae-forgotten-export) The symbol "GeneratedClientAnalyzeLayoutAsyncHeaders" needs to be exported by the entry point index.d.ts
//
// @public
export type GeneratedClientAnalyzeLayoutAsyncResponse = GeneratedClientAnalyzeLayoutAsyncHeaders & {
    _response: coreHttp.HttpResponse & {
        parsedHeaders: GeneratedClientAnalyzeLayoutAsyncHeaders;
    };
};

// Warning: (ae-forgotten-export) The symbol "GeneratedClientAnalyzeReceiptAsyncHeaders" needs to be exported by the entry point index.d.ts
//
// @public
export type GeneratedClientAnalyzeReceiptAsyncResponse = GeneratedClientAnalyzeReceiptAsyncHeaders & {
    _response: coreHttp.HttpResponse & {
        parsedHeaders: GeneratedClientAnalyzeReceiptAsyncHeaders;
    };
};

// Warning: (ae-forgotten-export) The symbol "GeneratedClientAnalyzeWithCustomModelHeaders" needs to be exported by the entry point index.d.ts
//
// @public
export type GeneratedClientAnalyzeWithCustomModelResponse = GeneratedClientAnalyzeWithCustomModelHeaders & {
    _response: coreHttp.HttpResponse & {
        parsedHeaders: GeneratedClientAnalyzeWithCustomModelHeaders;
    };
};

// Warning: (ae-forgotten-export) The symbol "GeneratedClientCopyCustomModelHeaders" needs to be exported by the entry point index.d.ts
//
// @public
export type GeneratedClientCopyCustomModelResponse = GeneratedClientCopyCustomModelHeaders & {
    _response: coreHttp.HttpResponse & {
        parsedHeaders: GeneratedClientCopyCustomModelHeaders;
    };
};

// Warning: (ae-forgotten-export) The symbol "CopyOperationResult" needs to be exported by the entry point index.d.ts
//
// @public
export type GeneratedClientGetCustomModelCopyResultResponse = CopyOperationResult & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: CopyOperationResult;
    };
};

// Warning: (ae-forgotten-export) The symbol "GeneratedClientTrainCustomModelAsyncHeaders" needs to be exported by the entry point index.d.ts
//
// @public
export type GeneratedClientTrainCustomModelAsyncResponse = GeneratedClientTrainCustomModelAsyncHeaders & {
    _response: coreHttp.HttpResponse & {
        parsedHeaders: GeneratedClientTrainCustomModelAsyncHeaders;
    };
};

// @public
export type GetAccountPropertiesOptions = FormRecognizerOperationOptions;

// @public
export type GetCopyAuthorizationOptions = FormRecognizerOperationOptions;

// @public
export type GetCopyModelResultOptions = FormRecognizerOperationOptions;

// @public
export type GetModelOptions = FormRecognizerOperationOptions;

// @public
export interface KeysResult {
    clusters: {
        [propertyName: string]: string[];
    };
}

// @public
export interface KeyValueElementModel {
    boundingBox?: number[];
    elements?: string[];
    text: string;
}

// @public
export interface KeyValuePairModel {
    confidence: number;
    key: KeyValueElementModel;
    label?: string;
    value: KeyValueElementModel;
}

// @public
export type Language = "en" | "es";

// @public
export type LengthUnit = "pixel" | "inch";

// @public
export type ListCustomModelsResponse = Models & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: Models;
    };
};

// @public
export type ListModelsOptions = FormRecognizerOperationOptions;

// @public
export interface Model {
    keys?: KeysResult;
    modelInfo: CustomFormModelInfo;
    trainResult?: TrainResult;
}

// @public
export interface Models {
    modelList?: CustomFormModelInfo[];
    nextLink?: string;
    summary?: ModelsSummary;
}

// @public
export interface ModelsSummary {
    count: number;
    lastModified: Date;
    limit: number;
}

// @public
export type OperationStatus = "notStarted" | "running" | "succeeded" | "failed";

// @public
export interface Point2D {
    x: number;
    y: number;
}

export { PollerLike }

export { PollOperationState }

// @public
export type ReceiptPollerLike = PollerLike<PollOperationState<RecognizedFormArray>, RecognizedFormArray>;

// @public
export type RecognizeContentOptions = FormRecognizerOperationOptions;

// @public
export type RecognizeContentPollerClient = {
    beginRecognize: (source: FormRecognizerRequestBody | string, contentType?: FormContentType, analyzeOptions?: RecognizeContentOptions) => Promise<GeneratedClientAnalyzeLayoutAsyncResponse>;
    getRecognizeResult: (resultId: string, options: {
        abortSignal?: AbortSignalLike;
    }) => Promise<RecognizeContentResultResponse>;
};

// Warning: (ae-forgotten-export) The symbol "RecognizedContent" needs to be exported by the entry point index.d.ts
//
// @public
export type RecognizeContentResultResponse = RecognizedContent & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: AnalyzeOperationResultModel;
    };
};

// @public
export type RecognizeCustomFormPollerClient = {
    beginRecognize: (source: FormRecognizerRequestBody | string, modelId: string, contentType?: FormContentType, analyzeOptions?: RecognizeFormsOptions) => Promise<GeneratedClientAnalyzeWithCustomModelResponse>;
    getRecognizeResult: (resultId: string, options: {
        abortSignal?: AbortSignalLike;
    }) => Promise<RecognizeFormResultResponse>;
};

// @public
export interface RecognizedForm {
    fields: {
        [propertyName: string]: FormField;
    };
    formType: string;
    pageRange: FormPageRange;
    pages: FormPage[];
}

// @public
export interface RecognizedFormArray extends Array<RecognizedForm> {
}

// Warning: (ae-forgotten-export) The symbol "RecognizedForms" needs to be exported by the entry point index.d.ts
//
// @public
export type RecognizeFormResultResponse = RecognizedForms & {
    _response: coreHttp.HttpResponse & {
        bodyAsText: string;
        parsedBody: AnalyzeOperationResultModel;
    };
};

// @public
export type RecognizeFormsOptions = FormRecognizerOperationOptions & {
    includeFieldElements?: boolean;
};

// @public
export type RecognizeReceiptPollerClient = {
    beginRecognize: (source: FormRecognizerRequestBody | string, contentType?: FormContentType, analyzeOptions?: RecognizeReceiptsOptions) => Promise<GeneratedClientAnalyzeReceiptAsyncResponse>;
    getRecognizeResult: (resultId: string, options: {
        abortSignal?: AbortSignalLike;
    }) => Promise<RecognizeFormResultResponse>;
};

// @public
export type RecognizeReceiptsOptions = FormRecognizerOperationOptions & {
    includeFieldElements?: boolean;
};

export { RestResponse }

// @public
export interface TrainingDocumentInfo {
    documentName: string;
    errors: FormRecognizerError[];
    pageCount: number;
    status: TrainingStatus;
}

// @public
export type TrainingFileFilter = FormRecognizerOperationOptions & {
    prefix?: string;
    includeSubFolders?: boolean;
};

// @public
export type TrainingStatus = "succeeded" | "partiallySucceeded" | "failed";

// @public
export type TrainPollerClient = {
    getCustomModel: (modelId: string, options: GetModelOptions) => Promise<FormModelResponse>;
    trainCustomModelInternal: (source: string, useLabelFile?: boolean, options?: TrainingFileFilter) => Promise<GeneratedClientTrainCustomModelAsyncResponse>;
};

// @public
export interface TrainResult {
    averageModelAccuracy?: number;
    errors?: FormRecognizerError[];
    fields?: FormFieldsReport[];
    trainingDocuments: TrainingDocumentInfo[];
}


// (No @packageDocumentation comment for this package)

```