/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var config = [
        ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'], // 1 - 10
        ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'], // 10 - 100
        ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'], // 100 - 1000
        ['M', 'MM', 'MMM'] // 1000 - 3000
    ];
    var ans = 0;
    for (var i = config.length - 1; i >= 0; i--) {
        for (var j = config[i].length - 1; j >= 0; j--) {
            var pos = s.indexOf(config[i][j]);
            var newPos = -1;
            if (pos !== -1) {
                if (i !== 0) {
                    newPos = s.indexOf(config[i - 1][config[i - 1].length - 1]);
                }
                // 处理 IX: 9 和 XIX: 19 类型
                if (j === 0 && i !== 0 && newPos !== -1 && pos > newPos) {
                // if (j === 0 && i !== 0) {
                    ans += (Math.pow(10, i - 1) * (config[i - 1].length)); // * 9
                    // s = s.split('').splice(0, config[i - 1][config[i - 1].length - 1].length).join('');
                    s = s.replace(config[i - 1][config[i - 1].length - 1], '');
                    i--;
                    break;
                }
                // 处理 IV 和 V 类型
                if (j === 4 && s.indexOf(config[i][j - 1]) !== -1) {
                    ans += (Math.pow(10, i) * j);
                    // s = s.split('').splice(0, config[i][j - 1].length).join('');
                    s = s.replace(config[i][j - 1], '');
                    break;
                }
                ans += (Math.pow(10, i) * (j + 1));
                // s = s.split('').splice(0, config[i][j].length).join('');
                s = s.replace(config[i][j], '');
                break;
            }
        }
    }
    return ans;
};

console.log(romanToInt("MCM"));