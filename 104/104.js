/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let max = 0;
    function dfs(curNode, cnt) {
        if (curNode === null) {
            return;
        }
        max = Math.max(max, cnt);
        cnt++;
        dfs(curNode.left, cnt);
        dfs(curNode.right, cnt);
    }
    dfs(root, 1);
    return max;
};

console.log(maxDepth([]));