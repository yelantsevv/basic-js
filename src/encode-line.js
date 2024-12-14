const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const res = [];
  let count = 0;
  for (let i = 1; i <= str.length; i++) {
    if (str[i - 1] === str[i]) {
      count++;
    } else {
      count > 0 && res.push(count + 1);
      res.push(str[i - 1]);
      count = 0;
    }
  }
  return res.join('');
}

module.exports = {
  encodeLine
};
