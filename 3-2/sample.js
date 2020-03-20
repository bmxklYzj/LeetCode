// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s.length) {
    return 0;
  }
  let max = 1;
  let repeat = {};
  for (let i = 1; i < s.length; i++) {
    let currentChar = s[i];
    for (let k = i - 1; k >= 0; k--) {
      if (s[k] === currentChar || repeat[k]) {
        repeat[k] = 1;
        break;
      }
      // console.log(':', s[i], s[k]);
      max = Math.max(max, i - k + 1);
    }
  }
  return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('bb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring(''));
console.log(lengthOfLongestSubstring('au'));

