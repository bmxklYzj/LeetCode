# description

根据数字输出对应的字符串

```
1 -> A
2 -> B
3 -> C
...
26 -> Z
27 -> AA
28 -> AB
```

# solution

1. wa

```js
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    // n--;
    let aCnt = ~~(n / 26);
    let lastChar = n % 26;

    let shiweiCnt = ~~(aCnt / 26);
    let shiweiNum = aCnt % 26;
    lastChar = String.fromCharCode(lastChar + 65 - 1);
    console.log(shiweiCnt, shiweiNum, lastChar);
    if (shiweiNum) {
        shiweiNum = String.fromCharCode(shiweiNum + 64);
    }
    else {
        shiweiNum = '';
    }
    return 'A'.repeat(shiweiCnt) + shiweiNum + lastChar;
};

console.log(convertToTitle(26));
```

# conclusion

