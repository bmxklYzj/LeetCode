/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    s = s.trim();
    let arr = [];
    for (let i = 0, len = s.length; i < len; i++) {
        let temp = s[i];
        if (temp >= 'a' && temp <= 'z'
            || temp >= 'A' && temp <= 'Z'
            || temp >= '0' && temp <= '9'
        ) {
            arr.push(temp);
        }
    }
    // // 处理：比如全是数字或标点的情况
    // if (s.length && !arr.length) {
    //     return false;
    // }
    let half = ~~(arr.length / 2);
    for (let i = 0; i <= half; i++) {
        if (arr[i] != arr[arr.length - i - 1]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome('addda'));