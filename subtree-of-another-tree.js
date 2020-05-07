/**
 * 给定两个非空二叉树 s 和 t，检验 s 中是否包含和 t 具有相同结构和节点值的子树。s 的一个子树包括 s 的一个节点和这个节点的所有子孙。s 也可以看做它自身的一棵子树。

示例 1:
给定的树 s:

     3
    / \
   4   5
  / \
 1   2
给定的树 t：

   4 
  / \
 1   2
返回 true，因为 t 与 s 的一个子树拥有相同的结构和节点值。

示例 2:
给定的树 s：

     3
    / \
   4   5
  / \
 1   2
    /
   0
给定的树 t：

   4
  / \
 1   2
返回 false。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/subtree-of-another-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
	let queue = [];
	queue.push(s);
	while (queue.length) {
		let temp = queue.shift();
		if (eq(temp, t)) {
			return true;
		}
		temp.left && queue.push(temp.left);
		temp.right && queue.push(temp.right);
	}
	return false;
};

function eq(t1, t2) {
	if (!t1 && !t2) {
		return true;
	}
	if (t1 && t2) {
		return t1.val === t2.val && eq(t1.left, t2.left) && eq(t1.right, t2.right);
	}
	return false;
}
