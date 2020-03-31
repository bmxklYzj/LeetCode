// https://leetcode-cn.com/problems/sort-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  return nums.sort((a, b) => a - b);
};
