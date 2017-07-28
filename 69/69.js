/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let i;
    if (x === 0 || x === 1) {
        return x;
    }
    for (i = 0; i <= ~~(x / 2); i++) {
        if (i * i > x) {
            return --i;
        }
    }
    return --i;
};

console.log(mySqrt(0));
console.log(mySqrt(1));
console.log(mySqrt(2));
console.log(mySqrt(3));
console.log(mySqrt(4));
console.log(mySqrt(16));