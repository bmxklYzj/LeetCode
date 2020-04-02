// https://leetcode-cn.com/problems/sort-an-array/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var quickSort = function(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= mid) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), mid, ...quickSort(right)];
};

console.log(quickSort([5,2,3,1]));
console.log(quickSort([5,1,1,2,0,0]));
console.log(quickSort([-4,0,7,4,9,-5,-1,0,-7,-1]));

