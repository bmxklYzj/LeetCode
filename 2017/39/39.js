/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = [];
    function intArraySum(array) {
        let res = 0;
        array.map(function (item, index) {
            res += item;
        });
        return res;
    }
    function dfs(arrayParams, pos) {
        var array = [];
        Object.assign(array, arrayParams);
        if (intArraySum(array) > target) {
            return;
        } else if (intArraySum(array) === target) {
            res.push(array);
            return res;
        }
        for (let i = pos, len = candidates.length; i < len; i++) {
            array.push(candidates[i]);
            var temp = dfs(array, i);
            // array = [];
            // if (temp && temp.length) {
            //     break;
            // }
        }
    }
    for (let i = 0, len = candidates.length; i < len; i++) {
        dfs([candidates[i]], i);
    }
    dfs([]);
    return res;
};

// console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([1, 2], 3));
