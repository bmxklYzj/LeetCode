## Description

[151. 翻转字符串里的单词](https://leetcode-cn.com/problems/reverse-words-in-a-string/)

翻转一个句子中的单词，并去掉两端空白字符

![](https://tva1.sinaimg.cn/large/00831rSTly1gdp44zb0bhj30wu0qu3ze.jpg)
## Solution

js一句解决

```js
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.split(/\s+/gim).reverse().join(' ').trim();
};
```

太简单了，试试模拟的方法：

```js
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      s = s.slice(i);
      break;
    }
  }
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      s = s.slice(0, i + 1);
      break;
    }
  }
  
  let resStr = '';
  let start = 0;
  let i = 0;
  for (i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      resStr = s.slice(start, i) + ((resStr.length ? ' ' : '') + resStr);
      while (s[i] === ' ') {
        i++;
      }
     
      start = i;
    }
  }
  
  resStr = s.slice(start, i) + ((resStr.length ? ' ' : '') + resStr);
  
  return resStr;
};
```

### Time/Space complexity

- 时间复杂度：O(N)
- 空间复杂度：O(1)
