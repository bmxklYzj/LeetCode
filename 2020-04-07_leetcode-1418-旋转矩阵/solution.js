// https://leetcode-cn.com/problems/rotate-matrix-lcci/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const len = matrix.length;
  let arr = new Array(len).fill().map(item => []);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      arr[j][len - i -1] = matrix[i][j];
    }
  }
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      matrix[i][j] = arr[i][j];
    }
  }
};
