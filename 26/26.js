/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var cnt = 0;
    for (var i = 0; i < nums.length; i++) {
        if (i === (nums.length - 1)) {
            return ++cnt;
        }
        while (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            // i++;
        }
        cnt++;
    }
    console.log(nums);
    return cnt;
};

console.log(removeDuplicates([1,3,2]));