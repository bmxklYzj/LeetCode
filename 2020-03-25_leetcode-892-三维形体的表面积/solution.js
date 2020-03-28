// https://leetcode-cn.com/problems/surface-area-of-3d-shapes/

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

console.log(surfaceArea([[2]])); // 10
console.log(surfaceArea([[1,0],[0,2]])); // 16
console.log(surfaceArea([[1,2],[3,4]])); // 34
console.log(surfaceArea([[1,1,1],[1,0,1],[1,1,1]])); // 32
console.log(surfaceArea([[2,2,2],[2,1,2],[2,2,2]])); // 46



