# description

给一个数组，找出出现次数 > n/2 的数

# solution

1. tle

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let string = nums.join(',');
    string += ','
    string = ',' + string;
    for (let i = 0, len = nums.length; i < len; i++) {
        // let reg = /(\d+)+/g;
        // console.log(string.match(new RegExp(nums[i], 'g')).length);
        let t = ',' + nums[i] + ',';
        // console.log(string, t, i);
        let cnt = 0;
        let reg = new RegExp(t, 'g');
        while (reg.exec(string)) {
            reg.lastIndex--;
            cnt++;
            if (cnt > (~~(len / 2))) {
                return + nums[i];
            }
        }
    }
};


2.  利用js的对象

把数组作为 key ，每个数出现的次数作为 value

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // 利用js的对象
    let o = {};
    for (let i = 0, len = nums.length; i < len; i++) {
        if (!o[nums[i]]) {
            o[nums[i]] = 1;
        }
        else {
            o[nums[i]]++;
        }
        if (o[nums[i]] > (~~(len / 2))) {
            return nums[i];
        }
    }
};
```

console.log(majorityElement([1]));
```

# conclusion

