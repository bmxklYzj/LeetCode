// https://leetcode-cn.com/problems/middle-of-the-linked-list/
// 快慢指针，慢指针每次走一步，快指针每次走两步。当快指针都到尾部是，慢指针都到中间，返回即可。
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
