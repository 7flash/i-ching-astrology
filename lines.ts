export const numLines = 6;

export const getLineNumber = (segmentStart: number, segmentEnd: number, angle: number) => {
    const segmentLength = (segmentEnd - segmentStart) / numLines;
    const lineNumber = Math.floor((angle - segmentStart) / segmentLength) + 1;
    if (angle === segmentEnd) {
        return lineNumber - 1;
    }
    return lineNumber;
}
