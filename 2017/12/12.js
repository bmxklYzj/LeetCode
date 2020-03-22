/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var config = [
        ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'], // 1 - 10
        ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C'], // 10 - 100
        ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M'], // 100 - 1000
        ['', 'M', 'MM', 'MMM'] // 1000 - 3000
    ];
    var thousand = ~~(num / 1000);
    num %= 1000;
    var handurd = ~~(num / 100);
    num %= 100;
    var shiwei = ~~(num / 10);
    var gewei = num % 10;

    return config[3][thousand] + config[2][handurd] + config[1][shiwei] + config[0][gewei];
};

console.log(intToRoman(700));