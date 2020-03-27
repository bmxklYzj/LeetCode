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

