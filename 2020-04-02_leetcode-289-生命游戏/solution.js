// https://leetcode-cn.com/problems/game-of-life/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// 如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
// 如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
// 如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
// 如果死细胞周围正好有三个活细胞，则该位置死细胞复活；

var gameOfLife = function(board) {
  const dx = [0, 1, 1, 1, 0, -1, -1, -1];
  const dy = [1, 1, 0, -1, -1, -1, 0, 1];
  const xLen = board.length;
  const yLen = board[0].length;
  let arr = [];
  for (let i = 0; i < xLen; i++) {
    arr.push([])
  }
  for (let i = 0; i < xLen; i++) {
    for (let j = 0; j < yLen; j++) {
      let liveCellInSurround = 0;
      
      for (let m = 0; m < dx.length; m++) {
        const x = i + dx[m];
        const y = j + dy[m];
        
        if (x >= 0 && x < xLen && y >= 0 && y < yLen && board[x][y]) {
          liveCellInSurround++;
        }
      }
      
      if (board[i][j]) {
        arr[i][j] = (liveCellInSurround === 2 || liveCellInSurround === 3) ? 1 : 0;
      } else {
        arr[i][j] = (liveCellInSurround === 3) ? 1 : 0;
      }
    }
  }
  
  for (let i = 0; i < xLen; i++) {
    for (let j = 0; j < yLen; j++) {
      board[i][j] = arr[i][j];
    }
  }
};

console.log(gameOfLife(
  [
    [0,1,0],
    [0,0,1],
    [1,1,1],
    [0,0,0]
  ]
));
