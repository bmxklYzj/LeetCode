/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let pos = -1;
    for (var i = 0, len = nums.length; i < len; i++) {
        pos = i;
        if (nums[i] >= target) {
            break;
        }
    }
    if (i === nums.length) {
        return pos + 1;
    }
    return pos;
};

console.log(searchInsert([1,3,5,6],5));