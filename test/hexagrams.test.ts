import { getHexagramLine } from '../hexagrams.ts';
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';

Deno.test("getHexagramLine returns correct hexagram and line numbers for mutable signs", () => {
  const keys = {
    virgo: [59, 40, 64, 47, 6],
  };

  const hexagramStartAngles = [0.12, 5.75, 11.36, 17.0, 22.61, 28.25];

  // Angle in the middle segment should correspond to line 3 and third hexagram in Virgo
  const angle3 = 13.25;
  const expected3 = { hexagram: 64, line: 3 };
  const result3 = getHexagramLine(keys.virgo, angle3, hexagramStartAngles);
  assertEquals(result3, expected3);
});