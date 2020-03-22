# description


# solution

先找出一个字符中能被拆分的所有子串，

最后从两个数组中找出相同的，并找出长度最大的字符串

更高级的是用数学解法，就几行代码: 设m为str1.length，n为str2.length，则m+n=n+m，最大值为m、n的最大公约数。

# conclusion

ps：
找出字符串数组中最长的字符串 简洁写法：

```js
  const commonArr = [];
  longest = commonArr.sort(function (a, b) { return b.length - a.length; })[0];
  commonArr.reduce((acc, cur) => acc.length > cur.length ? acc : cur, '');

```

最大公约数：

```js
// 辗转相除法: 两个整数的最大公约数为较小的数与他们相除余数的最大公约数
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
```

ref:
- https://www.bilibili.com/video/av53438290/?spm_id_from=333.788.videocard.0

- https://zhuanlan.zhihu.com/p/31824895
