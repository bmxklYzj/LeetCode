/**
 * @param {number[][]} grid
 * @return {number}
 */

var maxAreaOfIsland = function(grid) {
  let res = 0;
  for(let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      const visitedArr = initVisitedArr(grid);
      const temp = dfs(i, j, visitedArr, grid, 0);
      res = Math.max(res, temp);
    }
  }
  
  return res;
};
console.log(maxAreaOfIsland([[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]));

function dfs(i, j, visitedArr, grid, length) {
  if ((i >= 0 && j >=0 && i < grid.length && j < grid[0].length) && !visitedArr[i][j] && grid[i][j]) {
    visitedArr[i][j] = 1;
    length++;
    length += dfs(i, j - 1, visitedArr, grid, 0);
    length += dfs(i + 1, j, visitedArr, grid, 0);
    length += dfs(i, j + 1, visitedArr, grid, 0);
    length += dfs(i - 1, j, visitedArr, grid, 0);
  }
  return length;
}

function initVisitedArr(grid) {
  let visitedArr = [];
  for(let i = 0; i < grid.length; i++) {
    const row = grid[i];
    visitedArr[i] = [];
    for (let j = 0; j < row.length; j++) {
      visitedArr[i][j] = 0;
    }
  }
  return visitedArr;
}
