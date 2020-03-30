## Description

[面试题62. 圆圈中最后剩下的数字](https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/)

约瑟夫环问题：给定0,1,...,n-1这n个数围成一圈，每次从圆圈里删除第m个数字，问最后剩下的数字是什么？

## Solution

```js
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
```

### Time/Space complexity

- 时间复杂度：O(N)
- 空间复杂度：O(N)
