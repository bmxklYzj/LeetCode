/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var pos = -1;
    while ((pos = nums.indexOf(val)) !== -1) {
        nums.splice(pos, 1);
    }
    return nums.length;
};

console.log(removeElement([3,2,2,3], 3));
