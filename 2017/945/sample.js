// https://leetcode-cn.com/problems/minimum-increment-to-make-array-unique/
// 时间复杂度O(n)
// 空间复杂度O(n)
/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
  if (A.length <= 1) {
    return 0;
  }
  let cnt = 0;
  let arr = A.sort((a, b) => a - b);
  let currentNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= currentNum) {
      cnt += (currentNum - arr[i] + 1);
      currentNum++;
    } else {
      currentNum = arr[i];
    }
    // console.log('currentNum', arr, i, currentNum);
  }
  return cnt;
};

console.log(minIncrementForUnique([])); // 1
console.log(minIncrementForUnique([3])); // 1
console.log(minIncrementForUnique([1,2,2])); // 1
console.log(minIncrementForUnique([3,2,1,2,1,7])); // 6
