// https://leetcode-cn.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x % 10 === 0 && x !== 0) {
    return false;
  }
  
  let reversedNum = 0;
  while (x > reversedNum) {
    reversedNum = reversedNum * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  
  return x === reversedNum || x === Math.floor(reversedNum / 10);
};

console.log(isPalindrome(1));
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
