/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let stringN = '' + n;
    let cnt = 0;
    for (let i = stringN.length - 1; i > 0; i--) {
        if (stringN[i] === '0') {
            cnt++;
        }
        else {
            break;
        }
    }
    return cnt;
};

console.log(trailingZeroes(5));