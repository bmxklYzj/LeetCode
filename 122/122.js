/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let prev = prices[0];
    let res = 0;
    for (let i = 0, len = prices.length; i  < len; i++) {
        if (prices[i] > prev) {
            res += (prices[i] - prev);
        }
        prev = prices[i];
    }
    return res;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
