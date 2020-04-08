## Description

[机器人的运动范围](https://leetcode-cn.com/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/solution/)

一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1]，机器人从[0, 0]开始走，能走的位置为[i, j]中i的位数和加上j的位数和不大于k，最多能走多少步

先把能够的点init下，就成为了经典深搜找水滩问题。从0开始计算最走多少步，注意题目说能走四个方向，其实只需要走右方和下发就行。

## Solution

```js
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
```

### Time/Space complexity

- 时间复杂度：O(N*M)
- 空间复杂度：O(N*M)
