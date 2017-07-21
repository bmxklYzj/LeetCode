var strStr = function(haystack, needle) {
    var pos = -1;
    if (needle === '') {
        return 0;
    }
    for (var i = haystack.length - 1; i >= 0; i--) {
        if (haystack[i] === needle[0]) {
            var allEqual = true;
            for (var j = 0, lenJ = needle.length; j < lenJ; j++) {
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