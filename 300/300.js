// https://leetcode-cn.com/problems/longest-increasing-subsequence/

// 时间复杂度O(n^2)
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const arr = [];
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        arr[i] = {
            maxValue: nums[i],
            cnt: 1,
        };
        for (let j = 0; j < i; j++) {
            if (nums[i] > arr[j].maxValue && arr[i].cnt <= arr[j].cnt) {
                arr[i].cnt = arr[j].cnt + 1;
            }
        }
    }
    // edgeCase: arr = []
    const result = arr.length && arr.sort((a, b) => b.cnt - a.cnt)[0].cnt;
    return result ? result : 0;
};

// console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
// console.log(lengthOfLIS([]));
console.log(lengthOfLIS([1]));
// console.log(lengthOfLIS([1,3,6,7,9,4,10,5,6]));

