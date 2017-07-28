# description

楼梯有n步，每次能走1或2步，问有多少种方法

# solution

1. tle: 开始很快的写了个dfs，结果tle了，然后找规律，发现是斐波拉契数列，汗，都忘了这茬了

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let cnt = 0;
    function dfs(curPos, n) {
        if (curPos > n) {
            return;
        }
        else if (curPos === n) {
            cnt++;
        }
        dfs(curPos + 1, n);
        dfs(curPos + 2, n);
    }
    dfs(0, n);
    return cnt;
};
```
2. tle，未优化的，知道应该会tle，只是练练手

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    function fib(n) {
        // if (n === 0 || n === 1) {
        //     return n;
        // }
        return n > 1 ? fib(n - 2) + fib(n - 1) : n;
    }
    return fib(n + 1);
};
```

3. 优化后的斐波拉契数列，用数组保存之前的结果，避免重复计算



# conclusion

