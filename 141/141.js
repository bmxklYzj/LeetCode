/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let curNode = head;
    let hasCircle = false;
    if (!curNode) {
        return hasCircle;
    }
    while (curNode.next) {
        let curNode2 = head;
        while (curNode2.next) {
            if (curNode2.next === curNode.next) {
                hasCircle = true;
                break;
            }
            curNode2 = curNode2.next;
        }
        curNode = curNode.next;
    }
    return hasCircle;
};