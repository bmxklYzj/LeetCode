/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) {
        return [];
    }
    let half = ~~((numRows + 1) / 2);
    let res = [[1]];
    let temp = [];
    for (let i = 1; i < numRows; i++) {
        temp = [];
        for (let j = 0; j <= i; j++) {
            let pos;
            let leftTop;
            if (j === 0) {
                leftTop = res[i - 1][pos];
            }
            leftTop = res[i - 1][j - 1];
            let top = res[i - 1][j];
            leftTop = leftTop ? leftTop : 0;
            top = top ? top : 0;
            temp.push(leftTop + top);
        }
        res.push(temp);
    }
    return temp;
};

console.log(generate(6));