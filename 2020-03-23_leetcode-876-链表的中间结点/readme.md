## Description

[876. 链表的中间结点](https://leetcode-cn.com/problems/middle-of-the-linked-list/)

给定一个不带头节点的链表，找出链表的中间节点。

例如输入 [1,2,3,4,5] 返回

```json
{
  "val": 3,
  "next": {
    "val": 4,
    "next": {
      "val": 5,
      "next": null
    }
  }
}
```

## Solution 1

遍历一次，把所有节点存在数组中，返回1/2数组位置的值
```js
/**
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let temp = head;
  let arr = [];
  while (temp) {
    arr.push(temp);
    temp = temp.next;
  }
  console.log(arr);
  return arr[Math.floor((arr.length) / 2)];
};
```

### Time/Space complexity

时间复杂度 O(N)

空间复杂度 O(N) N为链表的长度

## Solution 2

先循环一遍，找出链表的长度，
第二次遍历，根据之前的长度判断是否停止，
要注意题目的要求："如果有两个中间结点，则返回第二个中间结点。"
所以判断停止状态取的是 `mid = Math.ceil(len + 1) / 2` `while (--mid) {}`

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let temp = head;
  let length = 0;
  while (temp) {
    length++;
    // console.log('temp', JSON.stringify(temp));
    temp = temp.next;
  }
  // console.log(length);
  let mid = Math.ceil((length + 1) / 2);
  temp = head;
  while (--mid) {
    temp = temp.next;
  }
  return temp;
};

```
### Time/Space complexity

时间复杂度O(N)，N是链表长度

空间复杂度O(1)

## Solution

快慢指针，慢指针每次走一步，快指针每次走两步。当快指针都到尾部是，慢指针都到中间，返回即可。

```js
/**
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let temp1 = head;
  let temp2 = head;
  while (true) {
    if (!temp2 || !temp2.next) {
      return temp1;
    }
    temp1 = temp1.next;
    temp2 = temp2.next && temp2.next.next;
  }
};
```

### Time/Space complexity

时间复杂度 O(N)
空间复杂度 O(N) N为链表的长度
