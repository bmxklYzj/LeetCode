## Description

[912. 排序数组](https://leetcode-cn.com/problems/sort-an-array/)

给一个数组按升序排序

## Solution 1：冒泡排序

每一轮 对相邻的元素进行比较，大的排后面，每一轮可以找出该轮最大的数放在最后。

例如：{5, 1, 6, 2, 4, 3}

![Bubble sort](https://www.studytonight.com/data-structures/images/basic-bubble-sort.png)


```js
var bubbleSort = function(nums) {
  let len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
      }
    }
  }
  return nums;
};
function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
```

bubble-sort 改进版，通过添加一个标志，避免重复比较已经排好序的

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var bubbleSort = function(nums) {
  let len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    let flag = false;
    for (let j = 0; j < len - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        flag = true;
        swap(nums, j, j + 1);
      }
    }
    if (!flag) {
      break;
    }
  }
  return nums;
};
function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
```

### Time/Space complexity

- 时间复杂度：O(N^2)
- 空间复杂度：O(N)


## Solution 2：选择排序

每一轮 选择当前一轮最小的数放到头部

```js
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
```

### Time/Space complexity
同冒泡排序

- 时间复杂度：O(N^2)
- 空间复杂度：O(N)
