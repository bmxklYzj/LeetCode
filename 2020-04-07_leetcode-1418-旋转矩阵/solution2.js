// https://leetcode-cn.com/problems/rotate-matrix-lcci/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const len = matrix.length;
  const mid = Math.floor(len / 2);
  // 水平轴翻转
  for (let i = 0; i < mid; i++) {
    for (let j = i; j < len; j++) {
      swap(matrix, [j, len - i - 1], [i, j]);
    }
  }
  // 主对角线翻转
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; i++) {
      swap(matrix, [j, i], [i, j]);
  
    }
  }
};
const swap = (arr, pointA, pointB) => {
  const temp = arr[pointA[0]][pointA[1]];
  arr[pointA[0]][pointA[1]] = arr[pointB[0]][pointB[1]];
  arr[pointB[0]][pointB[1]] = temp;
};
