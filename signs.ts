import { getHexagramLine } from "./hexagrams.ts";

const signs = {
    aries: "Ari",
    taurus: "Tau",
    gemini: "Gem",
    cancer: "Can",
    leo: "Leo",
    virgo: "Vir",
    libra: "Lib",
    scorpio: "Sco",
    sagittarius: "Sag",
    capricorn: "Cap",
    aquarius: "Aqu",
    pisces: "Pis"
}

const hexagrams = {
    [signs.gemini]: [20, 16, 35, 45, 12],
    [signs.virgo]: [59, 40, 64, 47, 6],
    [signs.sagittarius]: [34, 9, 5, 26, 11],
    [signs.pisces]: [55, 37, 63, 22, 36],
    [signs.cancer]: [15, 52, 39, 53, 62],
    [signs.libra]: [46, 18, 48, 57, 32],
    [signs.capricorn]: [10, 58, 38, 34, 61],
    [signs.aries]: [25, 17, 21, 51, 42],
    [signs.leo]: [56, 31, 33, 7, 4, 29],
    [signs.scorpio]: [50, 28, 44, 1, 43, 14],
    [signs.aquarius]: [60, 41, 19, 13, 49, 30],
    [signs.taurus]: [3, 27, 24, 2, 23, 8],
}

const byMutable = (hexagrams: number[], angle: number) => {
    const hexagramStartAngles = [0.12, 5.75, 11.36, 17.0, 22.61, 28.25];
    return getHexagramLine(hexagrams, angle, hexagramStartAngles);
};

const byFixed = (hexagrams: number[], angle: number) => {
    const hexagramStartAngles = [0, 2.0, 7.61, 13.25, 18.86, 24.5, 30.0];
    return getHexagramLine(hexagrams, angle, hexagramStartAngles);
};

const byCardinal = (hexagrams: number[], angle: number) => {
    const hexagramStartAngles = [0, 3.86, 9.5, 15.11, 20.75, 26.36];
    return getHexagramLine(hexagrams, angle, hexagramStartAngles);
};


export const signPositionToHexagramLine =
    (signPosition: { sign: string, pos: number }): { line: number, hexagram: number } => {
        const { sign, pos } = signPosition;

        let hexagramLine = {
            hexagram: 0,
            line: 0,
        };

        if (
            sign == signs.gemini ||
            sign == signs.virgo ||
            sign == signs.sagittarius ||
            sign == signs.pisces
        ) {
            if (pos < 0.12) {
                let edgeSign;
                switch (sign) {
                    case signs.gemini:
                        edgeSign = signs.taurus;
                        break;
                    case signs.virgo:
                        edgeSign = signs.leo;
                        break;
                    case signs.sagittarius:
                        edgeSign = signs.scorpio;
                        break;
                    case signs.pisces:
                        edgeSign = signs.aquarius;
                        break;
                    default:
                        throw 'Unexpected Sign'
                }
                hexagramLine = {
                    hexagram: hexagrams[edgeSign][hexagrams[edgeSign].length - 1],
                    line: 6,
                }
            } else if (pos > 28.25) {
                let edgeSign;
                switch (sign) {
                    case signs.gemini:
                        edgeSign = signs.cancer;
                        break;
                    case signs.virgo:
                        edgeSign = signs.libra;
                        break;
                    case signs.sagittarius:
                        edgeSign = signs.aquarius;
                        break;
                    case signs.pisces:
                        edgeSign = signs.aries;
                        break;
                    default:
                        throw 'Unexpected Sign'
                }
                hexagramLine = {
                    hexagram: hexagrams[edgeSign][0],
                    line: 1,
                }
            } else if (pos >= 0.12 && pos <= 28.25) {
                hexagramLine = byMutable(hexagrams[sign], pos)
            } else {
                throw 'Unexpected position'
            }
        } else if (
            sign == signs.cancer ||
            sign == signs.libra ||
            sign == signs.capricorn ||
            sign == signs.aries
        ) {
            if (pos > 26.36) {
                let edgeSign;
                switch (sign) {
                    case signs.cancer:
                        edgeSign = signs.leo;
                        break;
                    case signs.libra:
                        edgeSign = signs.scorpio;
                        break;
                    case signs.capricorn:
                        edgeSign = signs.aquarius;
                        break;
                    case signs.aries:
                        edgeSign = signs.taurus;
                        break;
                    default:
                        throw 'Unexpected Sign';
                }
                hexagramLine = {
                    hexagram: hexagrams[edgeSign][0],
                    line: 1,
                }
            } else if (pos >= 0 && pos <= 26.36) {
                hexagramLine = byCardinal(hexagrams[sign], pos);
            } else {
                throw 'Unexpected Position'
            }
        } else if (
            sign == signs.leo ||
            sign == signs.scorpio ||
            sign == signs.aquarius ||
            sign == signs.taurus
        ) {
            hexagramLine = byFixed(hexagrams[sign], pos);
        } else {
            throw 'Unknown Sign'
        }

        return hexagramLine;
    }