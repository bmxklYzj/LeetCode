// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 6.     31121211
// 7.     132112111221

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) {
        return '1';
    }
    n--;
    let str = '1';
    let result = '';
    for (let i = 1; i <= n; i++) {
        result = '';
        for (let j; j = 0, j < str.length; j++) {
            let repeatStr = str[j];
            let cnt = 0; // 记录单个字符出现次数
            while (true) {
                cnt++;
                if (str[j] !== str[j + 1]) {
                    break;
                }
                j++;
            }
            // repeatStr = repeatStr.repeat(cnt);
            str = str.slice(cnt);
            result += ('' + cnt + repeatStr);
        }
        str = result;
        // console.log(str);
    }
    return result;
};

console.log(countAndSay(6));
