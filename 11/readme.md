# description

给一个数组，对应于坐标轴中的（i，ai），求两个数组元素与x轴之间（i,ai),(j,aj)最多能装多少水？
暴力tle：双重循环判断每两个元素的最小值min(a, b)乘以二者x坐标的差

tle解法：

```js
var maxArea = function(height) {
    var maxRes = -1;
    for (var i = 0; i < height.length; i++) {
        var a = height[i];
        for (var j = 0; j < height.length, i !== j; j++) {
            var b = height[j];
            var min = Math.min(a, b);
            maxRes = Math.max(maxRes, min * (Math.abs(i - j)));
        }
    }
    return maxRes;
};
```

# solution



# conclusion

