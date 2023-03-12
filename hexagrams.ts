import { getLineNumber } from "./lines.ts";

export const getHexagramLine = (keys: number[], angle: number, hexagramStartAngles: number[]) => {
    let hexagram = 0, line = 0;

    for (let i = 0; i < hexagramStartAngles.length - 1; i++) {
        if (angle >= hexagramStartAngles[i] && angle <= hexagramStartAngles[i + 1]) {
            hexagram = keys[i];
            line = getLineNumber(hexagramStartAngles[i], hexagramStartAngles[i + 1], angle);
        }
    }

    return {
        hexagram,
        line,
    };
};
