# description

把罗马数转换成整数

# solution

1. 【tle】本来想用复用前一题的解法，先生成1-3999的罗马-整数对应表，然后直接输出，但是tle了

```js
var romanToInt = function(s) {
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
    var temp = {};
    for (var i = 1; i <= 3999; i++) {
        var str = intToRoman(i);
        temp[str] = i;
    }
    return temp[s];
};
```

2. 找规律。不断提交不断改，wa了很多次😂

# conclusion

