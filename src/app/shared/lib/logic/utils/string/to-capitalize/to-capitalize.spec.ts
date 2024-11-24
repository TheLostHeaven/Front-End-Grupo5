import { toCapitalize } from './to-capitalize';

describe('toCapitalize', () => {
  const testToCapitalize = (input: string, expected: string) => {
    const result = toCapitalize(input);
    expect(result).toBe(expected);
  };

  it(`Given a lowercase string
        When toCapitalize is called
        Then it should return the string with each word capitalized`, () => {
    testToCapitalize('hello world', 'Hello World');
  });

  it(`Given an uppercase string
        When toCapitalize is called
        Then it should return the string with each word capitalized`, () => {
    testToCapitalize('HELLO WORLD', 'Hello World');
  });

  it(`Given a mixed case string
        When toCapitalize is called
        Then it should return the string with each word capitalized`, () => {
    testToCapitalize('hElLo WoRLd', 'Hello World');
  });

  it(`Given an empty string
        When toCapitalize is called
        Then it should return an empty string`, () => {
    testToCapitalize('', '');
  });

  it(`Given a null or undefined value
        When toCapitalize is called
        Then it should return an empty string`, () => {
    testToCapitalize(null as any, '');
    testToCapitalize(undefined as any, '');
  });
});
