/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    // dfs/bfs 都行
    var equal = true;
    function dfs(curNode, curNode2) {
        if (curNode === null) {
            return;
        }
        if (curNode2 === null || curNode.val !== curNode2.val) {
            equal = false;
            return;
        }
        dfs(curNode.left, curNode2.left);
        dfs(curNode.right, curNode2.right);
    }
    dfs(p, q);
    return equal;
};

console.log(isSameTree([], []));