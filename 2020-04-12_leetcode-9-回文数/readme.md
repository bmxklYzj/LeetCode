## Description

[判断回文数](https://leetcode-cn.com/problems/palindrome-number/submissions/)

## Solution 1

转换成字符串：暴力分别从收尾开始比较是否相等

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let str = String(x);
  let mid = Math.floor(str.length / 2);
  for (let i = 0; i <= mid; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
```

### Time/Space complexity

- 时间复杂度：O(N)
- 空间复杂度：O(1)

## Solution 2

转换成字符串：翻转字符串并比较，一行搞定

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let str = String(x);
  
  return str === str.split('').reverse().join('');
};
```

### Time/Space complexity

- 时间复杂度：O(N)
- 空间复杂度：O(1)

## Solution 2

不转换成字符串：比较数字的后半部分是否和前半部分相等

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x % 10 === 0 && x !== 0) { // 10的case，末尾为0的只有数字0满足回文
    return false;
  }
  
  let reversedNum = 0;
  while (x > reversedNum) {
    reversedNum = reversedNum * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  
  return x === reversedNum || x === Math.floor(reversedNum / 10);
};
```

### Time/Space complexity

- 时间复杂度：O(logN)
- 空间复杂度：O(1)
