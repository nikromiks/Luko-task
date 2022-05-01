import { currencyFormat } from "..";

describe("currencyFormat", () => {
  test("should return correct Format for 123", () => {
    expect(currencyFormat(123)).toBe("€123");
  });
  test("should return correct Format for 123456", () => {
    expect(currencyFormat(12345)).toBe("€12,345");
  });
  test("should return correct Format for 1234567890", () => {
    expect(currencyFormat(1234567890)).toBe("€1,234,567,890");
  });
});
