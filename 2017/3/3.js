var isPalindrome = function(x) {
    var str = x + '';
    var len = str.length;
    var flag = true;

    for (var i = 0, iteLength = ~~(len / 2); i < iteLength; i++) {
        if (str[i] !== str[len - 1 - i]) {
            flag = false;
            break;
        }
    }
    return flag;
};