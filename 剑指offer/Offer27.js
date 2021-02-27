/*
请完成一个函数，输入一个二叉树，该函数输出它的镜像。

例如输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
镜像输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
  //递归
  function mirror(root){
    if(!root) return null
    let tmp = root.right

    root.right = mirror(root.left)
    root.left = mirror(tmp)

    return root
  }

  return mirror(root)

  //栈
  function mirror2(root){
    if(root) return []
    let stack = [root]
    while(stack){
      let node = stack.pop()
      if(node.left) stack.push(node.left)
      if(node.right) stack.push(node.right)

      [node.right, node.left] = [node.left, node.right]
    }
  }
};