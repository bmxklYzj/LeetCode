var reverse = function(x) {
    var isNegative = x < 0 ? -1 : 1;
    var num = Math.abs(x) + '';
    num = num.split('').reverse().join('');
    if (+num > 2147483647) {
        return 0;
    }
    return isNegative * (+num);
};