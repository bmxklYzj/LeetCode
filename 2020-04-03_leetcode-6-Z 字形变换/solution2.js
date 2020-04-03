// https://leetcode-cn.com/problems/zigzag-conversion/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows < 2) return s;
  const arr = new Array();
  let str = s;
  let pos = 0;
  let isVertical = true;
  while (str.length) {
    if (pos >= numRows) {
      isVertical = false;
      pos-=2;
      continue;
    }
    if (pos < 0) {
      isVertical = true;
      pos+=2;
      continue;
    }
    arr[pos] = (arr[pos] ? arr[pos] : '') + str[0];
    if (isVertical) {
      pos++;
    } else {
      pos--;
    }
    
    str = str.slice(1);
  }
  return arr.join('');
};

console.log(convert("LEETCODEISHIRING", 3)); // LCIRETOESIIGEDHN
console.log(convert("LEETCODEISHIRING", 4)); // LDREOEIIECIHNTSG
console.log(convert("AB", 1));
console.log(convert("ABC", 1));
