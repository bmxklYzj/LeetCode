// https://leetcode-cn.com/problems/add-two-numbers-ii/
// 错误解法，使用了+，肯定会有溢出问题
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
  const n1 = getNumberFromList(l1);
  const n2 = getNumberFromList(l2);
//   console.log(n1, n2);
  const sumString = String(n1 + n2);
  const head = new ListNode(0);
  let cur = head;
  for (let i = 0; i < sumString.length; i++) {
    cur.next = new ListNode(sumString[i]);
    cur = cur.next;
  }
  return head.next;
};
const getNumberFromList = list => {
  let res = list.val;
  while (list.next) {
    list = list.next;
    res = res * 10 + list.val; // 错误解法，使用了+，肯定会有溢出问题
  }
  return res;
};
