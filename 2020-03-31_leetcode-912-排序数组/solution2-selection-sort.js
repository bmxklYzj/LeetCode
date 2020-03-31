// https://leetcode-cn.com/problems/sort-an-array/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var selectionSort = function(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minPos = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minPos]) {
        minPos = j;
      }
    }
    swap(arr, i, minPos);
  }
  return arr;
};
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(selectionSort([5,2,3,1]));
console.log(selectionSort([5,1,1,2,0,0]));
console.log(selectionSort([-4,0,7,4,9,-5,-1,0,-7,-1]));

