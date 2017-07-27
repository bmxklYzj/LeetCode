/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// var addBinary = function (a, b) {
//     a = parseInt(a, 2);
//     b = parseInt(b, 2);
//     return (a + b).toString(2);
// };

var addBinary = function (a, b) {
    var minStr, maxStr;
    if (a.length > b.length) {
        minStr = b;
        maxStr = a;
    } else {
        minStr = a;
        maxStr = b;
    }
    let flag = 0;
    for (let i = minStr.length - 1; i >= 0; i--) {
        let pos = maxStr.length - (minStr.length - i);
        let temp = +maxStr[pos] + +minStr[i] + +flag;
        if (temp > 1) {
            maxStr[pos] = temp % 2;
            flag = 1;
            continue;
        }
        maxStr[pos] = temp;
        flag = 0;
        break;
    }
    console.log(maxStr);
    for (let i = maxStr.length - minStr.length; i >= 0; i--) {
        let temp = maxStr[i] + flag;
        if (temp > 1) {
            maxStr[i] = temp % 2;
            flag = 1;
            continue;
        }
        maxStr[i] = temp;
        flag = 0;
    }
    if (flag === 1) {
        maxStr = '1' + maxStr;
    }
    return maxStr;
};

console.log(addBinary('111', '11'));