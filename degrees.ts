export const convertToDecimal = (degrees: number, minutes: number, seconds: number = 0): number => {
    const sign = Math.sign(degrees);
    const absDegrees = Math.abs(degrees);
    const decimal = absDegrees + minutes / 60 + seconds / 3600;
    return sign * decimal;
};

export const convertToDegrees = (decimal: number): [number, number, number] => {
    const sign = Math.sign(decimal);
    const absDecimal = Math.abs(decimal);
    const degrees = Math.floor(absDecimal);
    const minutes = Math.floor((absDecimal - degrees) * 60);
    const seconds = Math.round(((absDecimal - degrees) * 60 - minutes) * 60);
    return [sign * degrees, minutes, seconds];
};
