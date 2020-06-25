/**
 * function that receives a number and format it to 2 decimal places
 * @function
 * @param {number}
 * @returns {number}
 */
export const numberFormatter = (number: number): number =>
  Math.round(number * 1e2) / 1e2;
