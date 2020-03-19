// https://leetcode-cn.com/problems/longest-palindrome/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let obj = {};
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 1;
    } else {
      obj[s[i]] = 0;
      cnt += 2;
    }
  }
  let hasSingle = false;
  const arr = Object.values(obj);
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i]) {
      hasSingle = true;
      break;
    }
  }
  hasSingle && (cnt++);
  return cnt;
};

console.log(longestPalindrome('abccccdd'));
console.log(longestPalindrome('bb'));
