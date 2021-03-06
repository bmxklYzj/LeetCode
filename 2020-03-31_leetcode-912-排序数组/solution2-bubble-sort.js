// https://leetcode-cn.com/problems/sort-an-array/

// bubble sort
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var bubbleSort = function(nums) {
  let len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
      }
    }
  }
  return nums;
};
function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

console.log(sortArray([5,2,3,1]));
console.log(sortArray([5,1,1,2,0,0]));
