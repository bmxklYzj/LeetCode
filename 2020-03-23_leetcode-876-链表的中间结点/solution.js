// https://leetcode-cn.com/problems/middle-of-the-linked-list/

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
