## Description

[旋转矩阵](https://leetcode-cn.com/problems/rotate-matrix-lcci/)

给一个 N x N 的矩阵，将其旋转90度。

## Solution 1

暴力，可以看到第i行j列翻转后变成了倒数第i列j行，即

(i, j) => (j, n - i -1)

先两重遍历把结果存在新数组，最后把新数组复制给原数组。（题目要求是原位操作，所以此法严格上不符合要求）。

```js
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
```

### Time/Space complexity

- 时间复杂度：O(N^2)
- 空间复杂度：O(N^2)

## Solution 2

先水平翻转，再沿主对角线翻转。

水平翻转 (i, j) => (n - i - 1, j)

主对角线翻转 (i, j) => (j , i)

结合上述两者，先水平翻转，再沿主对角线翻转的结果为：

(i, j) => (j, n - i -1) 和方法一最终的结果一样。

```js
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
```

### Time/Space complexity

- 时间复杂度：O(N^2)
- 空间复杂度：O(1)
