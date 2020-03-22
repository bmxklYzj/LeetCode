// https://leetcode-cn.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length <= 1) return s;
  const len = s.length;
  let maxlengthStr = '';
  for (let i = 1; i < len; i++) {
    // console.log('i', i);
    let left = i - 1, right = i + 1;
    while(s[left] === s[right] && left >= 0 && right <len) {
      let tempStr = s.slice(left, right + 1);
      // console.log(left, right, tempStr);
      tempStr.length > maxlengthStr.length && (maxlengthStr = tempStr);
      left--;
      right++
    }
  }
  for (let i = 1; i < len; i++) {
    // console.log('i', i);
    let left = i - 1, right = i + 1;
    while(s[left] === s[right-1] && left >= 0 && right <= len) {
      let tempStr = s.slice(left, right);
      // console.log(left, right, tempStr);
      tempStr.length > maxlengthStr.length && (maxlengthStr = tempStr);
      left--;
      right++
    }
  }
  
  if (!maxlengthStr) return s[0];
  return maxlengthStr;
};

console.log(longestPalindrome("babad")); // bab
console.log(longestPalindrome("cbbd")); // bb
console.log(longestPalindrome("a")); // a
console.log(longestPalindrome("ac")); // a
console.log(longestPalindrome("")); // ''
console.log(longestPalindrome("aaaabaaa"));
console.log(longestPalindrome("bb"));

