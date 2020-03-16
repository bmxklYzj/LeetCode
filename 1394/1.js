// https://leetcode-cn.com/problems/compress-string-lcci/
/**
 * @param {string} s
 * @return {string}
 */
var compressString = function(s) {
  const len = s.length;
  let cnt = 0;
  let currentChar = s[0];
  let res = '';
  for (let i = 0; i < len; i++) {
    if (s[i] !== currentChar) {
      res += (currentChar + cnt);
      currentChar = s[i];
      cnt = 0;
    }
    cnt++;
  }
  currentChar && (res += (currentChar + cnt));
  
  return res.length < s.length ? res : s;
};

console.log(compressString('aaaabb'));
