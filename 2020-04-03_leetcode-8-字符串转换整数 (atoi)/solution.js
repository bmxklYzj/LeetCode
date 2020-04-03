// https://leetcode-cn.com/problems/string-to-integer-atoi/

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  const maxDust = 2147483648;
  
  let number = parseInt(str);
  if (isNaN(number)) {
    return 0;
  }
  // [-2147483648, 2147483647]
  if (number < (-maxDust)) {
    return -maxDust;
  } else if (number > maxDust - 1) {
    return maxDust - 1;
  }
  
  return number
};

// console.log(myAtoi("42"));
// console.log(myAtoi("   -42"));
// console.log(myAtoi("4193 with words"));
// console.log(myAtoi("words and 987"));
// console.log(myAtoi("-91283472332"));
