/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxArr = [nums[0]];
    // let minNum = Math.min.apply(null, nums);
    for (let i = 1, len = nums.length; i < len; i++) {
        maxArr[i] = Math.max(maxArr[i - 1] + nums[i], nums[i]);
    }
    // console.log(maxArr);
    return Math.max.apply(null, maxArr);
};

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([-2,-51, 2]));
