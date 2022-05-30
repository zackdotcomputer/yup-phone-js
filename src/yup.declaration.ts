import { YupPhoneOptions } from "./YupPhoneOptions";
import "yup";

declare module "yup" {
  export interface StringSchema {
    /**
     * Check the string is a valid phone number
     *
     * @param {YupPhoneOptions|undefined} [options=undefined] The options for the validation
     * @param {String} [errorMessage=DEFAULT_MESSAGE] The error message for if the validation fails.
     */
    phone(options?: YupPhoneOptions | undefined, errorMessage?: string): StringSchema;
    /**
     * Check the string is a valid phone number
     *
     * @param {String} [errorMessage=DEFAULT_MESSAGE] The error message for if the validation fails.
     */
    phone(errorMessage?: string): StringSchema;
  }
}
