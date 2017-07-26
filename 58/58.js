/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var reg = /(\w+)\s*$/;
    var res = reg.exec(s);
    if (res) {
        return res[1].length;
    }
    return 0;
};

console.log(lengthOfLastWord('a  '));