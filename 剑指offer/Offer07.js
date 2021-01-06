/* 剑指Offer07 重建二叉树
*  根据前序和中序遍历，重新构建二叉树
*
*
*/
function TreeNode(val){
  this.val = val
  this.left = this.right = null
}

/* 递归写法 */
function buildTree(preorder, inorder){
  let root = preorder[0]
  if(root === undefined)
    return null
  let rootNode = new TreeNode(root)
  let index = inorder.indexOf(root)
  let tempArray = inorder.slice(0, index)
  rootNode.left = buildTree(preorder.slice(1,tempArray.length + 1), tempArray)
  tempArray = inorder.slice(index + 1, inorder.length)
  rootNode.right = buildTree(tempArray.length === 0 ? [] : preorder.slice(-tempArray.length), tempArray)
  return rootNode
}

/* 循环写法 利用栈实现，还未完成*/
function buildTree1(preorder, inorder){
  let root = preorder[0]
  if(root === undefined)
    return null
  let rootNode = new TreeNode(root)
  let index = inorder.indexOf(root)
  let tempArray = inorder.slice(0, index)
  rootNode.left = buildTree(preorder.slice(1,tempArray.length + 1), tempArray)
  tempArray = inorder.slice(index + 1, inorder.length)
  rootNode.right = buildTree(tempArray.length === 0 ? [] : preorder.slice(-tempArray.length), tempArray)
  return rootNode
}

buildTree([3,9,20,15,7], [9,3,15,20,7])