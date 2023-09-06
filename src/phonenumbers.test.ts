import type { FormatPhonenumberType, LocaleType } from "./index";
import { formatPhonenumber, getRandomPhonenumber } from "./index";

test("phonenumbers from another country than the users' should be formatted with country code", () => {
  const locale = "en-US" as LocaleType;
  const countryCode = "DE" as LocaleType;
  const result = getRandomPhonenumber(countryCode);
  const resultFormatted = formatPhonenumber({ number: result, locale: locale });

  expect(resultFormatted).toContain("+49");
});

test("phonenumbers from the users' country should be formatted without country code", () => {
  const locale = "de-DE" as LocaleType;
  const countryCode = "DE" as LocaleType;
  const result = getRandomPhonenumber(countryCode);
  const resultFormatted = formatPhonenumber({ number: result, locale: locale });

  expect(resultFormatted).not.toContain("+49");
});

test("phonenumbers from mexico should be deterministic", () => {
  const locale = "de-DE" as LocaleType;
  const countryCode = "es-MX" as LocaleType;
  const result = getRandomPhonenumber(countryCode);
  const resultFormatted = formatPhonenumber({ number: result, locale: locale });

  expect(resultFormatted).toEqual("+52 222 123 4567");
});

test("phonenumbers in rfc3966 format should contain the tel protocol", () => {
  const property = "RFC3966" as FormatPhonenumberType;
  const countryCode = "es-MX" as LocaleType;
  const result = getRandomPhonenumber(countryCode);
  const resultFormatted = formatPhonenumber({
    number: result,
    property: property,
  });

  expect(resultFormatted).toEqual("tel:+522221234567");
});
