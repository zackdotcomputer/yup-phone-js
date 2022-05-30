import { CountryCode } from "libphonenumber-js";

export interface YupPhoneOptions {
  /**
   * A country or countries to restrict the phone number to be from.
   * If defined and a string value, libphonenumber-js will be told to parse the number
   * using that country's standards.
   * If undefined, the libphonenumber-js default parsing logic will be used.
   * If defined and an array, the default parsing logic will be used and then the
   * validation will fail if the parsed number is not apparently from a requested country.
   *
   * @default undefined
   */
  validCountries?: CountryCode | CountryCode[] | undefined;

  /**
   * Whether to apply "strict" validation rather than gentle "it's possible" validation.
   * Recommended that you leave this as false unless you really need strict validation, as
   * phone number standards might have changed since the last time this library was published.
   * @default false
   */
  strictValidation?: boolean;
}
