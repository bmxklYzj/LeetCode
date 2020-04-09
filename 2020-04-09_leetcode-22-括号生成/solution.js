// https://leetcode-cn.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let len = n * 2;
  let arr = [[]];
  
  for (let i = 0; i < len; i++) {
    arr = generateBracket(arr);
  }
  
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (isValidBracket(item)) {
      result[transformToChars(item)] = 1;
    }
  }
  
  return Object.keys(result);
};
const generateBracket = (arr) => {
  return [...arr.map(item => [...item, 1]), ...arr.map(item => [...item, -1])];
};
const isValidBracket = (arrParams) => {
  let res = 0;
  const arr = [...arrParams];
  while (arr.length) {
    res += arr.splice(0, 1)[0];
    if (res < 0) {
      return false;
    }
  }
  return res === 0;
};
const transformToChars = (arr) => {
  return arr.reduce((acc, cur) =>  acc + (cur === 1 ? '(' : ')'),'');
};

console.log(generateParenthesis(3));
