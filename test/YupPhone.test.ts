import * as Yup from "yup";
import "../src";

describe("yup phone number validation", () => {
  describe("true/false validation", () => {
    it("validates correctly", () => {
      const schema = Yup.string().phone().required();
      expect(schema.isValidSync("+1-212-413-1941")).toBe(true);
    });

    it("doesn't validate a bad number", () => {
      const schema = Yup.string().phone().required();
      expect(schema.isValidSync("+1-212-413-19")).toBe(false);
    });

    it("validates correctly with single country specified", () => {
      const schema = Yup.string().phone({ validCountries: "US" }).required();
      expect(schema.isValidSync("+1-212-413-1941")).toBe(true);
    });

    it("doesn't validate a single country mismatch", () => {
      const schema = Yup.string().phone({ validCountries: "US" }).required();
      expect(schema.isValidSync("+44-79602-88818")).toBe(false);
    });

    it("does validate matches with multiple valid countries", () => {
      const schema = Yup.string()
        .phone({ validCountries: ["US", "GB"] })
        .required();
      expect(schema.isValidSync("+1-212-413-1941")).toBe(true);
      expect(schema.isValidSync("+44-79602-88818")).toBe(true);
    });

    it("doesn't validate a mismatches with multiple valid countries", () => {
      const schema = Yup.string()
        .phone({ validCountries: ["US", "GB"] })
        .required();
      expect(schema.isValidSync("+55 11 31415-3411")).toBe(false);
    });
  });

  describe("custom error messages", () => {
    it("uses a default error if no message is provided", () => {
      const schema = Yup.string()
        .phone({ validCountries: ["US", "GB"] })
        .required();
      expect(() => schema.validateSync("+55 11 31415-3411")).toThrow(
        "this must be a valid phone number."
      );
    });

    it("uses a custom error if one is provided", () => {
      const schema = Yup.string()
        .phone({ validCountries: ["US", "GB"] }, "This is my custom error")
        .required();
      expect(() => schema.validateSync("+55 11 31415-3411")).toThrow("This is my custom error");
    });
  });
});
