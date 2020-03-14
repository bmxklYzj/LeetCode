/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums = nums.sort();
    return nums[~~(nums.length / 2)];
};
console.log(majorityElement([3,2,3]))
