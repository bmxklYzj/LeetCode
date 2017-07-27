/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if (n === 1) return [[1]];
    if (n === 0) return [];
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr[i] = [];
        for (var j = 0; j < n; j++) {
            arr[i][j] = -1;
        }
    }
    var loopCnt = 1;
    var num = 1;
    while (true) {
        var i = loopCnt - 1;
        var j = loopCnt - 1;
        for (; i <= (n - loopCnt); i++) {
            arr[j][i] = num;
            num++;
        }
        for (i--, j++; j <= (n - loopCnt); j++) {
            arr[j][i] = num;
            num++;
        }
        for (i--, j--; i >= (loopCnt - 1); i--) {
            arr[j][i] = num;
            num++;
        }
        for (i++, j--; j >= (loopCnt); j--) {
            arr[j][i] = num;
            num++;
        }
        i++;
        j++;
        // console.log(i, j);
        loopCnt++;
        if (arr[i][j] !== -1) {
            return arr;
        }
    }
};

console.log(generateMatrix(1));