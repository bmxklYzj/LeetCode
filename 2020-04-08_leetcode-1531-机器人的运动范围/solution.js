// https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  const arr = new Array(m).fill().map(item => []);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      arr[i][j] = (getSum(String(i)) + getSum(String(j))) <= k ? 1 : 0;
    }
  }
  const result = dfs(arr, m, n, 0, 0);
  
  return result;
};
const dfs = (arr, m, n, x, y) => {
  if (!arr[x][y]) {
    return 0;
  }
  let visitedCnt = 1;
  arr[x][y] = 0;
  
  const dx = [ 1, 0];
  const dy = [ 0, 1];
  for (let i = 0; i < 2; i++) {
    const nextX = x + dx[i];
    const nextY = y + dy[i];
    if (nextX >= 0 && nextX < m && nextY >= 0 && nextY < n && arr[nextX][nextY]) {
      visitedCnt += dfs(arr, m, n, nextX, nextY);
    }
  }
  return visitedCnt;
};
const getSum = (str) => {
  return str.split('').reduce((acc, cur) => acc + +cur, 0)
};

// console.log(movingCount(2, 3, 1)); // 3
// console.log(movingCount(3, 1, 0)); // 1
// console.log(movingCount(1, 2, 1)); // 2
// console.log(movingCount(1, 2, 1)); // 2
// console.log(movingCount(3, 2, 17)); // 6
