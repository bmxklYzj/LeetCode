/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = 0x7fffffff;
    let res = 0;
    for (let i = 0, len = prices.length; i  < len; i++) {
        min = Math.min(min, prices[i]);
        if (prices[i] > min) {
            res = Math.max((prices[i] - min), res);
        }
    }
    return res;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
