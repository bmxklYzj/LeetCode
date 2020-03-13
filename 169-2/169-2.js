
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const obj = {};
    let len = nums.length;
    while (len--) {
        if (!obj[nums[len]]) {
            obj[nums[len]] = 1;
        } else {
            obj[nums[len]]++;
        }
        if (obj[nums[len]] > ~~(nums.length / 2)) {
            return nums[len];
        }
    }
 
    // return +Object.keys(obj).map(key => ({
    //     key: key,
    //     cnt: obj[key],
    // })).sort((a, b) => b.cnt - a.cnt)[0].key
    // return +Object.keys(obj).map(key => ({
    //     key: key,
    //     cnt: obj[key],
    // })).reduce((acc, cur) => {
    //     return acc.cnt > cur.cnt ? acc : cur
    // }).key;
};

console.log(majorityElement([3,2,3]))
