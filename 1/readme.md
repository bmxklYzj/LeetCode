# description

给一个数组nums和一个数target，判断数组中的某两个数相加是否为target，并返回他们的下标
```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

# solution

1. 暴力双重循环，时间复杂度O(n^2),空间复杂度O(1)

```js
var twoSum = function(nums, target) {
    for (var i = nums.length; i >= 0; i--) {
        for (var j = i - 1; j >= 0; j--) {
            if (nums[j] + nums[i] === target) {
                return [j, i];
            }
        }
    }
};
```

2. 两次hashtable，js就是对象，时间复杂度O(n),空间复杂度O(n)

```js
var twoSum = function (nums, target) {
    var map = {};
    for (var i = 0, len = nums.length; i < len; i++) {
        map[nums[i]] = i;
    }
    for (var i = 0, len = nums.length; i < len; i++) {
        var j = map[target - nums[i]];
        if (j) {
            return [i, j];
        }
    }
};
```

3. 一次hashtable，复杂度同2

```js
var twoSum = function (nums, target) {
    var map = {};
    for (var i = 0, len = nums.length; i < len; i++) {
        map[nums[i]] = i;
        var j = map[target - nums[i]];
        if (j) {
            return [i, j];
        }
    }

};
```

# conclusion

典型的时间换空间的思想