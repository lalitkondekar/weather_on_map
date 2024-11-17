export function roundToTwoDecimals(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Input must be a number');
    }
    return Math.round(value * 100) / 100;
}