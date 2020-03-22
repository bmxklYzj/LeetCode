/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if ((s.length & 1) === 1) {
        return false;
    }
    var config = {
        '{': '}',
        '(': ')',
        '[': ']'
    };
    var arr = [];
    for (var i = 0, len = s.length; i < len; i++) {
        var char = s[i];
        var isLeft = false;
        for (var key in config) {
            if (char === key) {
                isLeft = true;
            }
        }
        if (isLeft) {
            arr.push(char);
        } else {
            var topItem = arr.pop();
            if (config[topItem] !== char) {
                return false;
            }
        }
    }
    if (!arr.length) {
        return true;
    }
    return false;
};

console.log(isValid("({})"));
// 遇到左边的入栈，遇到右边的则与数组中出栈元素比较，最后如果栈为空则为true