/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    // n--;
    let aCnt = ~~(n / 26);
    let lastChar = n % 26;

    let shiweiCnt = ~~(aCnt / 26);
    let shiweiNum = aCnt % 26;
    lastChar = String.fromCharCode(lastChar + 65 - 1);
    console.log(shiweiCnt, shiweiNum, lastChar);
    if (shiweiNum) {
        shiweiNum = String.fromCharCode(shiweiNum + 64);
    }
    else {
        shiweiNum = '';
    }
    return 'A'.repeat(shiweiCnt) + shiweiNum + lastChar;
};

console.log(convertToTitle(26));