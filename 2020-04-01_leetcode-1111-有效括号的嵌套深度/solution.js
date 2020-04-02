// https://leetcode-cn.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/

/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
  let index = 0;
  let ans = [];
  for (let i = 0; i < seq.length; i++) {
    if (seq[i] === '(') {
      index++;
      ans[i] = index % 2;
    } else {
      ans[i] = index % 2;
      index--;
    }
  }
  return ans;
};
