## Description

[892. 三维形体的表面积](https://leetcode-cn.com/problems/surface-area-of-3d-shapes/)

grid表示立方体的高，求整体的表面积。


## Solution

表面积 = 每行的高度 + 每列的高度 + grid[i][j]存在则 * 2

先算每行、每列的高度，比如每行的高度，是头、尾高度 + Math.abs(grid[x][y] - grid[x][y - 1])

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
  const n = grid[0].length;
  let cnt = 0;
  let arrX = new Array(n).fill(0);
  let arrY = new Array(n).fill(0);
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      arrX[x] += Math.abs((y === 0 ) ? grid[x][y] : (grid[x][y] - (grid[x][y - 1])));
      grid[x][y] && (cnt++);
    }
    arrX[x] += grid[x][n - 1];
  }
  
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      arrY[y] += Math.abs((x === 0) ? grid[x][y] : (grid[x][y] - (grid[x - 1][y])));
    }
    arrY[y] += grid[n - 1][y];
  }
  
  return getSum(arrX) + getSum(arrY) + cnt * 2;
};
const getSum = arr => arr.reduce((acc, cur) => acc + cur, 0);
```

### Time/Space complexity

时间复杂度：O(N^2)

空间复杂度：O(N)
