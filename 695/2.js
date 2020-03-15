/**
 * @param {number[][]} grid
 * @return {number}
 */

var maxAreaOfIsland = function(grid) {
  let res = 0;
  for(let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const temp = dfs(i, j, grid);
      res = Math.max(res, temp);
    }
  }
  
  return res;
};
console.log(maxAreaOfIsland([[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]));

function dfs(i, j, grid) {
  if (!((i >= 0 && j >=0 && i < grid.length && j < grid[0].length) && grid[i][j])) {
    return 0;
  }
  grid[i][j] = 0;
  let length = 1;
  length += dfs(i, j - 1, grid);
  length += dfs(i + 1, j, grid);
  length += dfs(i, j + 1, grid);
  length += dfs(i - 1, j, grid);
  return length;
}

