/**
 * Collection of One Time Code operation for user
 */

const phrase = require('not-locale').modulePhrase('not-user');
const {
  notValidationError
} = require('not-error');

const notNode = require('not-node');

const MODEL_NAME = 'OneTimeCode';
module.exports.thisLogicName = MODEL_NAME;

module.exports[MODEL_NAME] = class UserOneTimeCodeLogic {
  static async retrieveOTC(code) {
    const OneTimeCode = notNode.Application.getModel('OneTimeCode');
    const oneTimeCode = await OneTimeCode.findValid(code);
    if (!oneTimeCode) {
      throw new notValidationError(
        phrase('one_time_code_not_found'), {
          code: [phrase('one_time_code_not_found')]
        }
      );
    }
    return oneTimeCode;
  }

  static async redeemOTCFor(oneTimeCode, actionName) {
    if (oneTimeCode.payload.action === actionName) {
      return await oneTimeCode.redeem();
    } else {
      throw new notValidationError(
        phrase('one_time_code_action_not_valid'), {
          code: [phrase('one_time_code_action_not_valid')]
        }
      );
    }
  }

  static async retrieveAndRedeemOTCFor(code, action) {
    return await UserOneTimeCodeLogic.redeemOTCFor(await UserOneTimeCodeLogic.retrieveOTC(code), action);
  }
};
