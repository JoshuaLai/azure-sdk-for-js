// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Recorder, env, isPlaybackMode } from "@azure/test-utils-recorder";
import { assert } from "chai";
import { Context } from "mocha";
import {
  PhoneNumbersClient,
  PhoneNumberCapabilitiesRequest,
  PhoneNumberCapabilityType
} from "../../src";
import { matrix } from "./utils/matrix";
import {
  canCreateRecordedClientWithToken,
  createRecordedClient,
  createRecordedClientWithToken
} from "./utils/recordedClient";

matrix([[true, false]], async function(useAad) {
  describe(`PhoneNumbersClient - lro - update${useAad ? " [AAD]" : ""}`, function() {
    const purchasedPhoneNumber = isPlaybackMode() ? "+14155550100" : env.AZURE_PHONE_NUMBER;
    let recorder: Recorder;
    let client: PhoneNumbersClient;

    before(function(this: Context) {
      if (useAad && !canCreateRecordedClientWithToken()) {
        this.skip();
      }
    });

    beforeEach(function(this: Context) {
      ({ client, recorder } = useAad
        ? createRecordedClientWithToken(this)!
        : createRecordedClient(this));
    });

    afterEach(async function(this: Context) {
      if (!this.currentTest?.isPending()) {
        await recorder.stop();
      }
    });

    it("can update a phone number's capabilities", async function() {
      let callingCapabilityType: PhoneNumberCapabilityType = "outbound";
      let smsCapabilityType: PhoneNumberCapabilityType = "inbound+outbound";
      const currentPhoneNumber = await client.getPurchasedPhoneNumber(purchasedPhoneNumber);

      if (currentPhoneNumber.capabilities.calling == callingCapabilityType) {
        callingCapabilityType = "inbound";
      }

      if (currentPhoneNumber.capabilities.sms == smsCapabilityType) {
        smsCapabilityType = "outbound";
      }

      const update: PhoneNumberCapabilitiesRequest = {
        calling: callingCapabilityType,
        sms: smsCapabilityType
      };

      const updatePoller = await client.beginUpdatePhoneNumberCapabilities(
        purchasedPhoneNumber,
        update
      );

      const phoneNumber = await updatePoller.pollUntilDone();
      assert.ok(updatePoller.getOperationState().isCompleted);
      assert.deepEqual(phoneNumber.capabilities, update);
    }).timeout(60000);
  });
});
