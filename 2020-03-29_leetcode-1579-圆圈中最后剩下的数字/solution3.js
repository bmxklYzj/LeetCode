// https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
  let pos = 0;
  for (let i = 2; i <= n; i++) {
    pos = (pos + m) % i;
  }
  return pos;
};

console.log(lastRemaining(5, 3)); // 3
console.log(lastRemaining(10, 17)); // 2
