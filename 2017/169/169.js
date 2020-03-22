/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // 利用js的对象
    let o = {};
    for (let i = 0, len = nums.length; i < len; i++) {
        if (!o[nums[i]]) {
            o[nums[i]] = 1;
        }
        else {
            o[nums[i]]++;
        }
        if (o[nums[i]] > (~~(len / 2))) {
            return nums[i];
        }
    }
};

console.log(majorityElement([6]));