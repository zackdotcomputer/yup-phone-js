import * as Yup from "yup";
import { validatePhone } from "./validatePhone";
import { YupPhoneOptions } from "./YupPhoneOptions";

const PHONE_TEST_NAME = "phone";

declare module "yup" {
  export interface StringSchema {
    /**
     * Check the string is a valid phone number
     *
     * @param {YupPhoneOptions|undefined} [options=undefined] The options for the validation
     * @param {String} [errorMessage=DEFAULT_MESSAGE] The error message for if the validation fails.
     */
    phone(options?: YupPhoneOptions | undefined, errorMessage?: string): StringSchema;
  }
}

Yup.addMethod(
  Yup.string,
  PHONE_TEST_NAME,
  function yupPhone(options?: YupPhoneOptions | undefined, errorMessage?: string) {
    const errMsg: string = errorMessage ?? "${path} must be a valid phone number.";

    return this.test(PHONE_TEST_NAME, errMsg, (value: unknown): boolean =>
      validatePhone(value, options ?? {})
    );
  }
);
