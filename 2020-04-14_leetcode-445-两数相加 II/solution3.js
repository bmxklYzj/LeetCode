// https://leetcode-cn.com/problems/add-two-numbers-ii/

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
