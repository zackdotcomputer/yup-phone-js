import { parsePhoneNumber } from "libphonenumber-js";
import { YupPhoneOptions } from "./YupPhoneOptions";

export function validatePhone(value: unknown, options: YupPhoneOptions): boolean {
  if (typeof value !== "string") {
    return false;
  }

  try {
    const parseCountry =
      options.validCountries && !Array.isArray(options.validCountries)
        ? options.validCountries
        : undefined;
    const phoneNumber = parsePhoneNumber(value, parseCountry);
    if (!phoneNumber.isPossible()) {
      return false;
    }

    if (options.validCountries && Array.isArray(options.validCountries)) {
      if (!phoneNumber.country || !options.validCountries.includes(phoneNumber.country)) {
        return false;
      }
    }

    return !options.strictValidation || phoneNumber.isValid();
  } catch (e: unknown) {
    console.warn("Error validating phone number:", e);
    return false;
  }
}