/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var arr = [];
    arr[0] = 1;
    arr[1] = 1;
    function fib(n) {
        // if (n === 0 || n === 1) {
        //     return n;
        // }
        if (arr[n]) {
            return arr[n];
        }
        arr[n] = fib(n - 2) + fib(n - 1)
        return n > 1 ? arr[n] : n;
    }
    return fib(n);
};

console.log(climbStairs(38));
