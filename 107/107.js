/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let res = [];
    function dfs(curNode, cnt) {
        if (curNode === null) {
            return;
        }
        if (res[cnt] === undefined) {
            res[cnt] = [];
        }
        res[cnt].push(curNode.val);
        cnt++;
        dfs(curNode.left, cnt);
        dfs(curNode.right, cnt);
    }
    dfs(root, 0);
    return res.reverse();
};