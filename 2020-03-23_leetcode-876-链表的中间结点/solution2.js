// https://leetcode-cn.com/problems/middle-of-the-linked-list/
// 遍历一次，把所有节点存在数组中，返回1/2数组位置的值
// 时间复杂度 O(N)
// 空间复杂度 O(N) N为链表的长度
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
