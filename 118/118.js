/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let half = ~~((numRows + 1) / 2);
    let res = [[1]];
    for (let i = 2; i <= numRows; i++) {
        let temp = [];
        temp.push(1);
        res[i-1] = temp;
        for (let j = 1; j < half; j++) {
            let leftTop = res[i-1][j-1] ? res[i-1][j-1] : 0;
            let top = res[i-1][j] ? res[i-1][j] : 0;
            let t =  leftTop + top;
            console.log(t);
            temp.push(t);
        }
        res[i-1] = temp;
    }
    return res;
};

console.log(generate(3));