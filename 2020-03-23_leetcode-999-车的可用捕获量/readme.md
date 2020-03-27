## Description

[999. 可以被一步捕获的棋子数](https://leetcode-cn.com/problems/available-captures-for-rook/)

中文题目描述不清晰，看评论才理解题意。

给定一个棋盘，每一个位置可能有四种状态，

R . B P

R可以向四个方向走，遇到.可以继续走，遇到B或者边界就停止，遇到P也停止，且计数器+1 。

## Solution 1

先找到R的坐标，再向四个方向遍历

```js
/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  const n = board[0].length;
  let posR = findPosR(n, board);
  let cnt = 0;
  for (let i = posR[0]; i < n; i++) {
    const cur = board[i][posR[1]];
    if (cur === 'B') {
      break;
    }
    if (cur === 'p') {
      cnt++;
      break;
    }
  }
  for (let i = posR[0]; i >= 0; i--) {
    const cur = board[i][posR[1]];
    if (cur === 'B') {
      break;
    }
    if (cur === 'p') {
      cnt++;
      break;
    }
  }
  for (let i = posR[1]; i >= 0; i--) {
    const cur = board[posR[0]][i];
    if (cur === 'B') {
      break;
    }
    if (cur === 'p') {
      cnt++;
      break;
    }
  }
  for (let i = posR[1]; i < n; i++) {
    const cur = board[posR[0]][i];
    if (cur === 'B') {
      break;
    }
    if (cur === 'p') {
      cnt++;
      break;
    }
  }
  return cnt;
};

const findPosR = (n, board) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'R') {
        return [i, j];
      }
    }
  }
};
```

### Time/Space complexity

时间复杂度：O(N^2)

空间复杂度：O(1)

## solution 2 

上面的解法太不优雅，重复代码太多，for循环写了四遍。
进行一下优化，四个方向分别用数组保存，计算位置直接 `index * dx` 即可得到步长和方向

```js
let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];
```

```js
// https://leetcode-cn.com/problems/available-captures-for-rook/

/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  const n = board[0].length;
  let {x: Rx, y: Ry} = findPosR(n, board);
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];
  let cnt = 0;
  
  for (let i = 0; i < 4; i++) {
    for (let pos = 0; pos < n; pos++) {
      let x = Rx + dx[i] * pos;
      let y = Ry + dy[i] * pos;
      if (x < 0 || y < 0 || x >= n || y >= n || board[x][y] === 'B') {
        break;
      }
      if (board[x][y] === 'p') {
        cnt++;
        break;
      }
    }
  }
  
  return cnt;
};

const findPosR = (n, board) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'R') {
        return {
          x: i,
          y: j,
        };
      }
    }
  }
};
```

### Time/Space complexity
同方法1：

时间复杂度：O(N^2)

空间复杂度：O(1)
