## Description

[820. 单词的压缩编码](https://leetcode-cn.com/problems/short-encoding-of-words/)

给定一个单词列表，我们将这个列表编码成一个索引字符串 S 与一个索引列表 A。

例如，如果这个列表是 ["time", "me", "bell"]，我们就可以将其表示为 S = "time#bell#" 和 indexes = [0, 2, 5]。

求对给定单词列表进行编码的最小字符串长度是多少

## Solution

存储索引字符串，每次遍历单词列表，

1. 如果单词包含某个索引，则用当前单词更新索引；
2. 如果索引包含单词，则跳出进行下一次遍历

```js
/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  let arr = [words[0]];
  for (let i = 1; i < words.length; i++) {
    let len = arr.length;
    let j = 0;
    for (j = 0; j < len; j++) {
      if (words[i].endsWith(arr[j])) { // 注意使用endsWith 而不是 indexOf !== -1
        arr.splice(j, 1, words[i]);
        break;
      } else if (arr[j].endsWith(words[i])) {
        break;
      }
    }
    if (j === len) {
      arr.push(words[i]);
    }
  }
  
  return (arr.join('#') + '#').length;
};
```

### Time/Space complexity

- 时间复杂度：O(N^2)
- 空间复杂度：O(N)
