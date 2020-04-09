## Description

n代表生成括号的对数，输出组成n对有效括号的所有情况。

![desc](https://tva1.sinaimg.cn/large/00831rSTly1gdnxrajdhoj30xg0gcaa9.jpg)

## Solution

先枚举所有情况，长度为n*2，每一次可以放置 ( 或 )

```js
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let len = n * 2;
  let arr = [[]];
  
  for (let i = 0; i < len; i++) {
    arr = generateBracket(arr);
  }
  
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (isValidBracket(item)) {
      result[transformToChars(item)] = 1;
    }
  }
  
  return Object.keys(result);
};
const generateBracket = (arr) => {
  return [...arr.map(item => [...item, 1]), ...arr.map(item => [...item, -1])];
};
const isValidBracket = (arrParams) => {
  let res = 0;
  const arr = [...arrParams];
  while (arr.length) {
    res += arr.splice(0, 1)[0];
    if (res < 0) {
      return false;
    }
  }
  return res === 0;
};
const transformToChars = (arr) => {
  return arr.reduce((acc, cur) =>  acc + (cur === 1 ? '(' : ')'),'');
};
```

### Time/Space complexity

- 时间复杂度：O(2^n)
- 空间复杂度：O(N)
