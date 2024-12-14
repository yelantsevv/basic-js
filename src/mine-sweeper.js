const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    const row = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let count = 0;
      for (let s = i - 1; s <= i + 1; s++) {
        for (let t = j - 1; t <= j + 1; t++) {
          if (s === i && t === j) continue
          if (matrix?.[s]?.[t] === true) {
            count++;
          }
        }
      }
      row.push(count);
      count = 0;
    }
    result.push(row);
  }
  return result;
}

module.exports = {
  minesweeper
};
