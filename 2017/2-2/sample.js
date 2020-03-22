// https://leetcode-cn.com/problems/add-two-numbers/

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
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  let head =  null, current = null;
  let flag = 0;
  console.log(l1);
  while (l1 || l2) {
    const l1Next = l1 && l1.val || 0;
    const l2Next = l2 && l2.val || 0;
    
    if (head === null) {
      head = new ListNode(String((l1Next + l2Next + flag) % 10));
      current = head;
    } else {
      current.next = new ListNode(String((l1Next + l2Next + flag) % 10));
      current = current.next;
    }
    console.log(1, current, head, (l1Next + l2Next + flag) % 10);
    
    flag = Math.floor((l1Next + l2Next + flag) / 10);
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  flag && (current.next = new ListNode(1));
  return head;
};
