## Description

[914. 卡牌分组](https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/)

给定一个整数数组，问能否有一个值x(x>=2)使得数组能分成x份，且每一份中数字都相同。

## Solution

先遍历一遍，用map来得到每个数字出现的个数。

然后针对这些个数做文章，判断个数的最大公约数大于2

so, 重点是找到数组中所有元素的最大公约数。

```js
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  let obj = {};
  for (let i = 0; i < deck.length; i++) {
    if (!obj[deck[i]]) {
      obj[deck[i]] = 1;
    } else {
      obj[deck[i]]++;
    }
  }
  
  const arr = Object.values(obj);
  let minGcd = findMinGcd(arr);
  
  return minGcd >= 2;
};

const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
const findMinGcd = arr => {
  let minGcd = arr[0];
  for (let i = 1; i < arr.length; i++) {
    minGcd = gcd(minGcd, arr[i]);
  }
  return minGcd;
};
```

### Time/Space complexity

时间复杂度：O(N * log C) N是数组长度，log C是求最大公约数，C是数组中元素的范围

空间复杂度：O(N)
