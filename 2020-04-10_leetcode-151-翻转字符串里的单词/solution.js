// https://leetcode-cn.com/problems/reverse-words-in-a-string/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.split(/\s+/gim).reverse().join(' ').trim();
};

console.log(reverseWords("the sky is blue")); // "blue is sky the"
console.log(reverseWords("  hello world!  ")); // "world! hello"
console.log(reverseWords("a good   example")); // "example good a"


