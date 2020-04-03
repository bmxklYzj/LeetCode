// https://leetcode-cn.com/problems/zigzag-conversion/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const arr = new Array(numRows).fill().map(item => []);
  
  const str = s;
  let x = 0;
  let y = 0;
  let isVertical = true;
  for (let i = 0; i < str.length; i++) {
    if (isVertical) {
      arr[y][x] = str[i];
      
      if (y >= numRows - 1) {
        isVertical = false;
  
        continue;
      }
      y++;
    } else {
  
      x++;
      y -= ((numRows - 1) ? 1 : 0);
      
      arr[y][x] = str[i];
      if ((numRows - 1) && y <= 0) {
        isVertical = true;
        y++;
      }
    }
  }
  
  let res = '';
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j]) {
        res += arr[i][j];
      }
    }
  }
  return res;
};

// console.log(convert("LEETCODEISHIRING", 3)); // LCIRETOESIIGEDHN
// console.log(convert("LEETCODEISHIRING", 4)); // LDREOEIIECIHNTSG
// console.log(convert("AB", 1));
// console.log(convert("ABC", 1));
