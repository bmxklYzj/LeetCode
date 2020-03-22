方法一：暴力两层遍历

// 时间复杂度 O(n^2)
// 空间复杂度 O(1)
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return []
};
```

方法二：两遍哈希表

// 时间复杂度 O(n)
// 空间复杂度 O(n)

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const len = nums.length;
  let obj = {};
  for (let i = 0; i < len; i++) {
    obj[nums[i]] = i;
  }

  for (let i = 0; i < len; i++) {
    if (obj[target - nums[i]] && obj[target - nums[i]] !== i) {
      return [i, obj[target - nums[i]]];
    }
  }
};
```

方法三：一遍哈希表，在遍历的同时在前面找哈希表中符合的

// 时间复杂度 O(n)
// 空间复杂度 O(n)

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const len = nums.length;
  let obj = {};
  for (let i = 0; i < len; i++) {
    console.log(nums[i], obj[nums[i]]);
    if (obj[target - nums[i]] !== undefined && obj[target - nums[i]] !== i) {
      return [obj[target - nums[i]], i];
    }
    obj[nums[i]] = i;
  }
};
```
