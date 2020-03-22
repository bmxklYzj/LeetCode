// 用js函数，太简单了
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

// 自己写暴力判断，结果tle😂
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var pos = -1;
    if (needle === '') {
        return 0;
    }
    for (var i = 0, lenI = haystack.length; i < lenI; i++) {
        if (haystack[i] === needle[0]) {
            var allEqual = true;
            for (var j = 1, lenJ = needle.length; j < lenJ; j++) {
                if (haystack[i + j] !== needle[j]) {
                    allEqual = false;
                    break;
                }
            }
            if (allEqual) {
                pos = i;
                break;
            }
        }
    }
    return pos;
};

console.log(strStr('aaa', 'a'));