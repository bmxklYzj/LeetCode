// https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
  let arr = new Array(n).fill().map((item, key) => key);
  let pos = m - 1;
  while (arr.length > 1) {
    if (pos >= arr.length) {
      pos = pos % arr.length;
    }
    arr.splice(pos, 1);
  
    pos += (m - 1);
  }
  return arr[0];
};

// console.log(lastRemaining(5, 3)); // 3
// console.log(lastRemaining(10, 17)); // 2
