// https://leetcode-cn.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let arr = nums1.concat(nums2).sort((a, b) => a - b);
  const len = arr.length;
  console.log(arr);
  return len % 2 === 0 ? (arr[len / 2 -1] + arr[len / 2]) / 2 : (arr[Math.floor(len / 2)]);
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
