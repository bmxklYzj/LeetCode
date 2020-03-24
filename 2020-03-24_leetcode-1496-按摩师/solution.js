// https://leetcode-cn.com/problems/the-masseuse-lcci/
/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
  return goNext(0, 0, nums);
};

function goNext(maxCntParam, curIndex, nums) {
  if (curIndex >= nums.length) {
    return maxCntParam;
  }
  // 选择
  let maxCnt = maxCntParam + nums[curIndex];
  curIndex += 2;
  goNext(maxCnt, curIndex, nums);
  
  // 不选择
  curIndex++;
  goNext(maxCntParam, curIndex, nums);
  return Math.max(maxCntParam, maxCnt);
}

console.log(massage([1,2,3,1])); // 4
