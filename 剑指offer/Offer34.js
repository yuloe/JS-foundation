/* 输入一棵二叉树和一个整数，
打印出二叉树中节点值的和为输入整数的所有路径。
从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。

示例:
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
返回:

[
   [5,4,11,2],
   [5,8,4,5]
]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  let res = []
  let path = []
  function recur(root, tar) {
    if (!root) return
    path.push(root.val)
    tar = tar - root.val
    tar === 0 && root.left === null && root.right === null && res.push(Array.from(path))
    recur(root.left, tar)
    recur(root.right, tar)
    path.pop()
  }

  recur(root, sum)
  return res
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let tree = new TreeNode(5)
tree.left = new TreeNode(4)
tree.right = new TreeNode(8)
tree.left.left = new TreeNode(11)
tree.left.left.left = new TreeNode(7)
tree.left.left.right = new TreeNode(2)
tree.right.left = new TreeNode(13)
tree.right.right = new TreeNode(4)
tree.right.right.left = new TreeNode(5)
tree.right.right.right = new TreeNode(1)

console.log(pathSum(tree, 22))