import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { convertToDecimal, convertToDegrees } from "../degrees.ts";
import { getLineNumber } from '../lines.ts';

{
  const hexagram = 1;
  const segmentStart = convertToDecimal(13, 15, 0);
  const segmentEnd = convertToDecimal(18, 52, 30);

  Deno.test(`Hexagram ${hexagram}`, async (t) => {
    const expectedLineNumbers = [1, 2, 3, 4, 5, 6];
    for (let i = 0; i < expectedLineNumbers.length; i++) {
      const angle = segmentStart + 1.1 * i;
      const expected = expectedLineNumbers[i];
      const result = getLineNumber(segmentStart, segmentEnd, angle);
      const angleStr = convertToDegrees(angle).join('.');
      await t.step(`angle ${angleStr} corresponds to line ${expected} in hexagram ${hexagram}`, () => {
        assertEquals(result, expected);
      });
    }
  })
}