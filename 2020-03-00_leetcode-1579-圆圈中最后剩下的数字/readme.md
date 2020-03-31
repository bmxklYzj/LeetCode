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

## solution 2

数学解法，[参考](https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/solution/huan-ge-jiao-du-ju-li-jie-jue-yue-se-fu-huan-by-as/)：

地推公式：

f(n, m) = [f(n-1, m) + m] % n

f(n, m)表示有n个人，每隔m个元素进行环形删除后剩下的元素的索引号

n=1时f=0

```js
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
```

### Time/Space complexity

- 时间复杂度：O(N)
- 空间复杂度：O(1)
