import * as Yup from "yup";
import { validatePhone } from "./validatePhone";
import { YupPhoneOptions } from "./YupPhoneOptions";

const PHONE_TEST_NAME = "phone-validate";

Yup.addMethod(
  Yup.string,
  PHONE_TEST_NAME,
  function yupPhone(
    optionsOrErrorMessage?: YupPhoneOptions | undefined | string,
    errorMessage?: string
  ) {
    const options: YupPhoneOptions =
      optionsOrErrorMessage && typeof optionsOrErrorMessage !== "string"
        ? optionsOrErrorMessage
        : {};

    const errMsg: string =
      typeof optionsOrErrorMessage === "string"
        ? optionsOrErrorMessage
        : typeof errorMessage === "string"
        ? errorMessage
        : "${path} must be a valid phone number.";

    return this.test(PHONE_TEST_NAME, errMsg, (value: unknown): boolean =>
      validatePhone(value, options)
    );
  }
);
