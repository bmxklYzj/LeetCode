/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let f = [];
    function fact(n) {
        // console.log(n, f[n]);
        if (f[n]) return f[n];
        if (n === 0 || n === 1) return 1;
        return f[n] = n * fact(n - 1);
        // console.log(n * fact(n - 1), f[n]);
    }

    fact(n);
    let stringN = '' + f[n];
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