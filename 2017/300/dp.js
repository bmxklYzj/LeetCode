// https://leetcode-cn.com/problems/longest-increasing-subsequence/

// 时间复杂度O(n^2)
/**
 * @param {number[]} nums
 * @return {number}
 */
// dp[i] 表示 nums[i] 的最长递增子序列的长度。dp[i] = max(dp[i]) + 1
var lengthOfLIS = function(nums) {
  const dp = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  console.log(dp.toString());
  return !nums.length ? 0 : Math.max.apply(null, dp);
};

// console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
// console.log(lengthOfLIS([]));
// console.log(lengthOfLIS([1]));
// console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]));

