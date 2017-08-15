var twoSum = function (numbers, target) {
    // 1234, 5
    // mid = 2,1
    // nlog(n)
    let i;
    let len;
    let left;
    let right;
    let mid;
    for (i = 0, len = numbers.length - 1; i < len; i++) {
        let currentNumber = numbers[i];
        left = i;
        right = numbers.length - 1;
        mid = ~~((left + right + 1) / 2);
        while (left < right) {
            let sum = currentNumber + numbers[right];
            if (sum === target) {
                return [i + 1, right + 1];
            }
            if (sum > target) {
                left = i;
                right = mid - 1;
            }
            if (sum < target) {
                left = mid + 1;
                right = numbers.length - 1;
            }
            mid = ~~((left + right + 1) / 2);
        }
    }
};

console.log(twoSum([3,24,50,79,88,150,345]
    ,200));