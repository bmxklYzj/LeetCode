# description

判断() {} [] 括号是否匹配。注意{[()]}和()[]{}两种都是匹配的

# solution

1. 【wa】刚开始只考虑了第一种情况{[()]}，wa了

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var arr = s.split('');
    var flag = true;
    while (arr.length) {
        if (arr.length % 2 !== 0) {
            flag = false;
            break;
        }
        var pop = arr.pop();
        var shift = arr.shift();
        if (!((shift === '{' && pop === '}')
            || (shift === '[' && pop === ']')
            || (shift === '(' && pop === ')'))
        ) {
            flag = false;
            break;
        }
    }
    return flag;
};
```

2. 创建一个栈，遇到左边的入栈，遇到右边的则与数组中出栈元素比较，最后如果栈为空则为true

```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if ((s.length & 1) === 1) {
        return false;
    }
    var config = {
        '{': '}',
        '(': ')',
        '[': ']'
    };
    var arr = [];
    for (var i = 0, len = s.length; i < len; i++) {
        var char = s[i];
        var isLeft = false;
        for (var key in config) {
            if (char === key) {
                isLeft = true;
            }
        }
        if (isLeft) {
            arr.push(char);
        } else {
            var topItem = arr.pop();
            if (config[topItem] !== char) {
                return false;
            }
        }
    }
    if (!arr.length) {
        return true;
    }
    return false;
};

console.log(isValid("({})"));
// 遇到左边的入栈，遇到右边的则与数组中出栈元素比较，最后如果栈为空则为true
```

# conclusion

