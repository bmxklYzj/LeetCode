/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    // loop: nums.length - k + 1
    let result = [];
    if (!nums.length) {
        return [];
    }
    for (let i = 0; i < nums.length - k + 1; i++) {
        let tempArray = nums.slice();
        let max = tempArray.splice(i, k);
        console.log(max, Math.max.apply(null, max));
        result.push(Math.max.apply(null, max));
    }
    return result;
};

console.log(maxSlidingWindow([], 0));