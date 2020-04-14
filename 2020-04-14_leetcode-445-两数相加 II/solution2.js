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
