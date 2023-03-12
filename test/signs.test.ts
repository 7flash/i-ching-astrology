import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { signPositionToHexagramLine } from "../signs.ts";

Deno.test("signPositionToHexagramLine for Sagittarius edge with Scorpio", () => {
    const position1 = { sign: "Sag", pos: 0.11 };
    const expected1 = { hexagram: 14, line: 6 };
    const result1 = signPositionToHexagramLine(position1);
    assertEquals(result1, expected1);
});

Deno.test("signPositionToHexagramLine for Sagittarius middle", () => {
    const position1 = { sign: "Sag", pos: 14.0 };
    const expected1 = { hexagram: 5, line: 3 };
    const result1 = signPositionToHexagramLine(position1);
    assertEquals(result1, expected1);
});

Deno.test("signPositionToHexagramLine for Sagittarius edge with aquarius", () => {
    const position1 = { sign: "Sag", pos: 28.3 };
    const expected1 = { hexagram: 60, line: 1 };
    const result1 = signPositionToHexagramLine(position1);
    assertEquals(result1, expected1);
});