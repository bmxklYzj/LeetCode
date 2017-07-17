/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // var minLen = 0x7fffffff;
    // var minLengthString = '';
    // strs.forEach(function (item, index) {
    //     if (item.length < minLen) {
    //         minLengthString = item;
    //     }
    // });

    var firstStr = strs[0] || '';
    var resStr = '';
    for (var i = 0, len = firstStr.length; i < len; i++) {
        resStr = firstStr.slice(0, i + 1);
        for (var j = 0, lenJ = strs.length; j < lenJ; j++) {
            if (strs[j].indexOf(resStr) !== 0) {
                return firstStr.slice(0, i);
            }
        }
    }
    if (firstStr) {
        return resStr;
    } else {
        return '';
    }
};

console.log(longestCommonPrefix(["abc", "abc"]));