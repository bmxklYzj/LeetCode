// https://leetcode-cn.com/problems/reverse-words-in-a-string/

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

console.log(reverseWords("the sky is blue")); // "blue is sky the"
console.log(reverseWords("  hello world!  ")); // "world! hello"
console.log(reverseWords("a good   example")); // "example good a"
console.log(reverseWords("")); // ""


