/* 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

 

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
  [20,9],
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
  let flag = false
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
    if(flag) tmpResult.reverse()
    flag = !flag
    newNodeSet.length !== 0 && queue.push(newNodeSet)
    tmpResult.length !== 0 && result.push(tmpResult)
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

console.log(levelOrder(tmp))