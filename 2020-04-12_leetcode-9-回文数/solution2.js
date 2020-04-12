// https://leetcode-cn.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let str = String(x);
  
  return str === str.split('').reverse().join('');
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
