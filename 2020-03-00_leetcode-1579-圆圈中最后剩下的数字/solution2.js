// https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
  let head = new Node(0);
  let current = head;
  for (let i = 1; i < n; i++) {
    current.next = new Node(i);
    current = current.next;
  }
  current.next = head;

  while (true) {
    let len = m;
    while (--len) {
      current = current.next;
    }
    if (!current.next) {
      return current.val;
    }
    current.next = current.next.next;
    console.log(current, current.val);
  }
};

function Node(val) {
  this.val = val;
  this.next = null;
}
console.log(lastRemaining(5, 3)); // 3
// console.log(lastRemaining(10, 17)); // 2
