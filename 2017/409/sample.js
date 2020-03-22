// https://leetcode-cn.com/problems/longest-palindrome/
// 时间复杂度 O(n)
// 空间复杂度 O(n)
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 1;
    } else {
      obj[s[i]]++;
    }
  }
  let cnt = 0;
  let hasOdd = false;
  Object.values(obj).forEach(value => {
    const isEven = value % 2 === 0;
    !isEven && (hasOdd = true);
    cnt += (isEven ? value : value - 1);
  });
  hasOdd && (cnt++);
  return cnt;
};

console.log(longestPalindrome('abccccdd'));
