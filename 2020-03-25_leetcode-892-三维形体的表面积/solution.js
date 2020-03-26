// https://leetcode-cn.com/problems/surface-area-of-3d-shapes/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
  const n = grid[0].length;
  let cnt = 0;
  let arrX = new Array(n + 1).fill(0);
  let arrY = new Array(n + 1).fill(0);
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      arrY[x] = Math.abs((x === 0 || x === n - 1) ? grid[x][y] : (grid[x][y] - (grid[x + 1][y])));
      arrX[y] = Math.abs((y === 0 || y === n - 1) ? grid[x][y] : (grid[x][y] - (grid[x][y + 1])));
      // TODO: remove me
      console.log('Remove me in !dev: arrX[y]', arrX[y]);
      
      grid[x][y] && (cnt++);
    }
  }
  console.log(arrX, arrY);
  return getSum(arrX) * 2 + getSum(arrY) * 2 + cnt * 2;
};
const getSum = arr => arr.reduce((acc, cur) => acc + cur, 0);

// console.log(surfaceArea([[1,2],[3,4]]));
console.log(surfaceArea([[1,0],[0,2]]));
// console.log(surfaceArea([[2]]));
// console.log(surfaceArea([[1,1,1],[1,0,1],[1,1,1]]));
// console.log(surfaceArea([[2,2,2],[2,1,2],[2,2,2]]));



