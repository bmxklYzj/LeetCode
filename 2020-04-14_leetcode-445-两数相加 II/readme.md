## Description

[两数相加 II](https://leetcode-cn.com/problems/add-two-numbers-ii/submissions/)

给2个链表表示的数字，求其和。

![img](https://tva1.sinaimg.cn/large/007S8ZIlly1gdtpnu2pj8j310y0lkt9k.jpg)

## Solution 1

暴力模拟：
先把链表转成字符串，字符串反转逐个计算和，得到反转后的数字结果，最后反向遍历此数字构造链表并输出

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const n1 = getNumberStringFromList(l1).split('').reverse().join('');
  const n2 = getNumberStringFromList(l2).split('').reverse().join('');
  console.log(n1, n2);
  let sumString = '';
  let i = 0;
  let flag = 0;
  while (true) {
    if (i >= n1.length && i >= n2.length) {
      break;
    }
    const sum = +(i >= n1.length ? 0 : n1[i])
      + +(i >= n2.length ? 0 : n2[i]) + flag;
    sumString += (sum % 10 );
    flag = Math.floor(sum / 10);
    i++;
    console.log(sum, flag);
  }
  flag && (sumString += flag);
  
  const head = new ListNode(0);
  let cur = head;
  let len = sumString.length;
  while (len--) {
    cur.next = new ListNode(sumString[len]);
    cur = cur.next;
  }
  
  return head.next;
};
const getNumberStringFromList = list => {
  let res = String(list.val);
  while (list.next) {
    list = list.next;
    res += list.val;
  }
  return res;
};
```

### Time/Space complexity

- 时间复杂度：O(Max(m, n)) m和n分别是两数字的长度
- 空间复杂度：O(m + n)

## Solution 2

稍巧妙的方法，把链表转成栈，从栈的尾部每次计算和，同时构造链表，注意此时是把当前节点放到结果链表的前面。

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const n1 = getNumberArrFromList(l1);
  const n2 = getNumberArrFromList(l2);
  
  let carry = 0;
  let resList = null;
  while (n1.length || n2.length || carry) {
    const sum = (n1.pop() || 0) + (n2.pop() || 0) + carry;
    let curNode = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    curNode.next = resList;
    resList = curNode;
  }
  return resList;
};
const getNumberArrFromList = list => {
  let res = [list.val];
  while (list.next) {
    list = list.next;
    res.push(list.val);
  }
  return res;
};
```

### Time/Space complexity

同方法1

- 时间复杂度：O(Max(m, n)) m和n分别是两数字的长度
- 空间复杂度：O(m + n)
