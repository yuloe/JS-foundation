/* 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

 

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root) return []
  let queue = [[root]]
  let result = []
  while(queue.length !== 0){
    let nodeSet = queue.shift()
    let newNodeSet = []
    let tmpResult = []
    while(nodeSet.length !== 0){
      let node = nodeSet.shift()
      node.left && newNodeSet.push(node.left)
      node.right && newNodeSet.push(node.right)
      tmpResult.push(node.val)
    }
    newNodeSet.length !== 0 && queue.push(newNodeSet)
    tmpResult.length !== 0 && result.push(tmpResult)
  }

  return result
};