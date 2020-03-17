// 时间复杂度 O(n)
// 空间复杂度 O(n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const len = nums.length;
  let obj = {};
  for (let i = 0; i < len; i++) {
    console.log(nums[i], obj[nums[i]]);
    if (obj[target - nums[i]] !== undefined && obj[target - nums[i]] !== i) {
      return [obj[target - nums[i]], i];
    }
    obj[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([1,3,4,2], 6));
console.log(twoSum([3,3], 6));

