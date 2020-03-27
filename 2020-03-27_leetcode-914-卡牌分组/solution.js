// https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  let obj = {};
  for (let i = 0; i < deck.length; i++) {
    if (!obj[deck[i]]) {
      obj[deck[i]] = 1;
    } else {
      obj[deck[i]]++;
    }
  }
  
  const arr = Object.values(obj);
  let minGcd = findMinGcd(arr);
  
  return minGcd >= 2;
};

const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
const findMinGcd = arr => {
  let minGcd = arr[0];
  for (let i = 1; i < arr.length; i++) {
    minGcd = gcd(minGcd, arr[i]);
  }
  return minGcd;
};
// console.log(hasGroupsSizeX([1,2,3,4,4,3,2,1])); // true
// console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3])); // false
// console.log(hasGroupsSizeX([10])); // false
// console.log(hasGroupsSizeX([10,10])); // true
// console.log(hasGroupsSizeX([1,1,2,2,2,2])); // true

