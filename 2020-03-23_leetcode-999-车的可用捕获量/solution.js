// https://leetcode-cn.com/problems/available-captures-for-rook/

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

console.log(numRookCaptures([[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]))
console.log(numRookCaptures([[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]))

