/* 从上到下打印出二叉树的每个节点，
同一层的节点按照从左到右的顺序打印。 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  let queue = [root]
  let result = []
  while (queue.length !== 0) {
    let node = queue.shift()
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
    result.push(node.val)
  }

  return result
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let tmp = new TreeNode(3)
tmp.left = new TreeNode(9)
tmp.right = new TreeNode(20)
tmp.right.left = new TreeNode(15)
tmp.right.right = new TreeNode(7)

console.log(levelOrder1(tmp))


