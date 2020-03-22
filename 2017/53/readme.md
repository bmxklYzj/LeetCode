# description

给一个数组arr和数值a，[2, 3, 6, 7],7找出 数组中连续的元素和最大的

# solution

感觉是个dp，用一个以为数组记录下目前的最大值，关键点是

```js
maxArr[i] = Math.max(maxArr[i - 1] + nums[i], nums[i]);
```


# conclusion

