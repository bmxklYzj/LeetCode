// https://leetcode-cn.com/problems/water-and-jug-problem/

/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
  if (z === 0) return true;
  if (x === 0) return y === z;
  if (y === 0) return x === z;
  if (x === y) return z === x || z === (x+y);

  let min = Math.min(x, y);
  let max = Math.max(x, y);
  let maxCopy = max;
  
  let diff = 0;
  let possibleArr = [];
  diff = max - min;
  while (true) {
    // console.log('Remove me in !dev: ', min, max, diff);
    
    possibleArr.push(diff);
    if (diff === min) {
      break;
    }
    if (diff < min) {
      max = maxCopy;
      diff =  max - (min - diff);
    } else {
      diff = Math.abs(diff - min);
    }
  }
  // console.log(1, possibleArr);
  const last = possibleArr[possibleArr.length - 1];
  possibleArr = possibleArr.concat(possibleArr.map(item => item + min));
  possibleArr.push(min, max, last + max);
  // console.log(possibleArr);
  return possibleArr.findIndex(item => item === z) !== -1;
};

// // console.log(canMeasureWater(6, 7, 2));
// console.log(canMeasureWater(3, 5, 4));
// console.log(canMeasureWater(2, 6, 5));
// console.log(canMeasureWater(34, 5, 6));
// console.log(canMeasureWater(11, 13, 0));
// console.log(canMeasureWater(22003, 31237, 1));
// console.log(canMeasureWater(0, 2, 1));
console.log(canMeasureWater(1, 1, 12));
