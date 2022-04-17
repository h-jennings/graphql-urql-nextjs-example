/**
 * Creates a percentage from 2 numbers
 * @param {number} part
 * @param {number} whole
 * @param {boolean} round
 */
const makePercent = (part, whole, round = false) => {
  const percent = (part / whole) * 100;

  return round ? `${Math.round((percent * 10) / 10)}%` : `${percent}%`;
};

export default makePercent;
