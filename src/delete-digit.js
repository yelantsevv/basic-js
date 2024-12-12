const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let res = 0;
  [...String(n)].forEach((_, i, arr) => {
    const str = arr.slice(0, i).concat(arr.slice(i + 1));
    const num = +str.join('');
    res = Math.max(res, num);
  })
  return res;

}

module.exports = {
  deleteDigit
};
