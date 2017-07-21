var a1 = [];
var a2 = [];

var len1 = 1e8;
var len2 = 1e3;

var startTime1 = Date.now();
/**
 * 随机生成一个n位的字母字符串
 */
function getRandomString(n) {
    var str = '';
    for (var i = n - 1; i >= 0; i--) {
        var num = Math.floor(Math.random() * 26);
        str += (String.fromCharCode(num + 97));
    }
    return str;
}
for (var i = 0; i < len1; i++) {
    // 添加10位的字符串
    a1.push(getRandomString(10));
}
for (var i = 0; i < len2; i++) {
    // 添加10位的字符串
    a2.push(getRandomString(10));
}

// 数据构造结束，开始循环
var equal = [];
var startTime2 = Date.now();
for (var i = a1.length - 1; i >= 0; i--) {
    // for (var j = a2.length - 1; j >= 0; j--) {
    //     if (a1[i] === a2[j]) {}
    //     if (a2[j].indexOf(a1[0][0]) !== -1) {
    //         equal.push(a2[j]);
    //     }
    // }

    if (a1[i].indexOf('ab') !== -1) {
        equal.push(a1[i]);
    }
}
console.log(equal);
console.log('构造两个数组数据花费时间：' + (startTime2 - startTime1));
console.log('双重循环花费时间：' + (Date.now() - startTime2));
console.log('总时间：' + (Date.now() - startTime1));