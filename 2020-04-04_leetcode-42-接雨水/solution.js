/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let sum = 0;
  let tempSum = 0;
  let arr = height;
  for (let i = 1; i < arr.length; i++) {
    tempSum = 0;
  
    if (arr[i] > arr[i - 1]) {
      let j = i;
      // console.log(j);
      while (j--) {
        // console.log(i, j, arr[j], arr[i], arr[j] >= arr[i]);
        if (arr[j] >= arr[i]) {
          sum += (Math.abs(Math.min(arr[j], arr[i]) * (i - j - 1) - tempSum));
          break;
        }
        tempSum += arr[j];
      }
    }
  }
  return sum;
};
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([]));
console.log(trap([2,0,2]));
console.log(trap([4,2,3]));

