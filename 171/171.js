/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let res = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        let powNum = s.length - i - 1;
        res += (Math.pow(26, powNum) * LetterToNum(s[i]));
    }

    function LetterToNum (letter) {
        return (letter.charCodeAt() - (65 - 1));
    }
    return res;
};

console.log(titleToNumber('AAA'));