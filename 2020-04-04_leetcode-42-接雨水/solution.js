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
    
    // TODO: remove me
    // console.log('Remove me in !dev: ', i, arr[i], arr[i - 1]);
    
    if ((arr[i] > arr[i - 1] && (arr[i + 1] <= arr[i] || i === arr.length - 1))) {
      let j = i - 1;
      // console.log(j);
      while (j--) {
        // console.log(i, j, arr[j], arr[i], arr[j] >= arr[i]);
        if (arr[j + 1]) {
          tempSum += arr[j + 1];
        }
  
        // if ((j < i - 1 && arr[j - 1] <= arr[j]) || j === 0) {
        if (arr[j - 1] <= arr[j] || (arr[j] >= arr[i]) || j === 0) {
          sum += (((Math.abs(Math.min(arr[j], arr[i])) * (i - j - 1) - tempSum)));
          // console.log(i, j, Math.min(arr[j], arr[i]), (i - j - 1), tempSum,
          //   Math.abs(Math.min(arr[j], arr[i]) * (i - j - 1) - tempSum), sum);
  
          break;
        }
      }
    }
  }
  return sum;
};
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
console.log(trap([])); // 0
console.log(trap([2,0,2])); // 2
console.log(trap([4,2,3])); // 1
console.log(trap([5,4,1,2])); // 1

