// https://leetcode-cn.com/problems/compress-string-lcci/

// 双指针法：https://leetcode-cn.com/problems/compress-string-lcci/solution/shuang-zhi-zhen-fa-qu-lian-xu-zi-fu-cpython-by-net/
/**
 * @param {string} s
 * @return {string}
 */
var compressString = function(s) {
  const len = s.length;
  let cnt = 0;
  let res = '';
  
  let i = 0, j = 0;
  while (i < len) {
    if (s[i] === s[j]) {
      j++;
    } else {
      res += (s[i] + (j - i));
      i = j;
      j++;
    }
  }
  
  return res.length < s.length ? res : s;
};

console.log(compressString('aabb'));
