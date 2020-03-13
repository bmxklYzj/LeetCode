// https://leetcode-cn.com/problems/greatest-common-divisor-of-strings/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function(str1, str2) {
  const str1FragmentsArr = getDuplicateParts(str1);
  const str2FragmentsArr = getDuplicateParts(str2);
  let commonArr = str1FragmentsArr.filter(item => {
    let find = false;
    if (str2FragmentsArr.find(item2 => item2 === item)) {
      find = true
    }
    return find;
  });
  // return longest = commonArr.sort(function (a, b) { return b.length - a.length; })[0];
  return commonArr.reduce((acc, cur) => acc.length > cur.length ? acc : cur, '');
  // let res = '', maxLength = -1;
  // commonArr = commonArr.map(item => ({
  //   key: item,
  //   length: item.length,
  // })).forEach(item => {
  //   if (item.length > maxLength) {
  //     res = item.key
  //   }
  // });
  // return res;
};
console.log(gcdOfStrings("ABCABC", "ABC"));
function getDuplicateParts(str) {
  const parts = [];
  const strLength = str.length;
  for (let fragmentLength = 1; fragmentLength <= strLength; fragmentLength++) {
    if (strLength % fragmentLength === 0) {
      let fragmentCnt = strLength / fragmentLength;
      let isAllFragmentsEqual = true;
      let fragmentCntCopy = fragmentCnt;
      while (fragmentCntCopy--) {
        const index = strLength - (fragmentCntCopy + 1) * fragmentLength;
        if (str.slice(index, index + fragmentLength) !== str.slice(0, fragmentLength)) {
          isAllFragmentsEqual = false;
          break;
        }
      }
      if (isAllFragmentsEqual) {
        parts.push(str.slice(0, fragmentLength));
      }
    }
  }
  return parts;
}


function gcd(a, b) {
  return b === 0 ? a: gcd(b, a % b);
}
console.log(gcd(24, 82));
