// https://leetcode-cn.com/problems/add-two-numbers/

// 简洁写法，两数相加，用链表倒序表示数字的思路值得学习，另外链表的定义及使用
/**
 * Definition for singly-linked current.
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
  let head = new ListNode(0);
  let current = head;
  let flag = 0;
  while (l1 || l2) {
    const sum = ((l1 && l1.val || 0) + (l2 && l2.val || 0)) + flag;
    flag = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    console.log(current, head, flag);
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  flag && (current.next = new ListNode(1));
  return head.next;
};
