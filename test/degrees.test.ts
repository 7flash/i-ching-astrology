import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { convertToDecimal,convertToDegrees } from "../degrees.ts";

Deno.test("convertToDecimal converts degrees, minutes and seconds to decimal value", () => {
    const degrees = 13;
    const minutes = 15;
    const seconds = 0;
    const expected = 13.25;
    const result = convertToDecimal(degrees, minutes, seconds);
    assertEquals(result, expected);
});


Deno.test("convertToDegrees converts decimal value to degrees, minutes and seconds", () => {
    const decimal = 13.25;
    const expected = [13, 15, 0];
    const result = convertToDegrees(decimal);
    assertEquals(result, expected);
  });
  