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
    minStr = minStr.split('');
    maxStr = maxStr.split('');
    minStr.reverse();
    maxStr.reverse();

    let flag = 0;
    for (let i = 0; i < maxStr.length; i++) {
        let minItem = +(minStr[i] ? minStr[i] : 0);
        let maxItem = +maxStr[i];
        let sum = minItem + maxItem + flag;
        if (sum > 1) {
            maxStr[i] = sum % 2;
            flag = 1;
            continue;
        }
        maxStr[i] = sum;
        flag = 0;
    }
    if (flag) {
        maxStr.push(1);
    }

    return maxStr.reverse().join('');
};

console.log(addBinary(
"10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
"110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"));

