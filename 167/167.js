/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length + 1;
    let mid;
    // 1234, 5
    // mid = 2,1
    while (left < right) {
        mid = ~~((left + right) / 2);
        let sum = numbers[mid] + numbers[mid + 1];
        if (sum === target) {
            break;
        }
        if (sum > target) {
            right = mid;
        }
        if (sum < target) {
            left = mid;
        }
    }
    return [mid, mid + 1];
};

console.log(twoSum([2, 7, 11, 15], 13));