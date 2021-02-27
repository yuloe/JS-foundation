/* 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。
要求不能创建任何新的节点，只能调整树中节点指针的指向 */

/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
  let prev = null
  let head //链表的头节点

  function recur(cur){
    if(!cur) return 
    recur(cur.left)
    if(!prev){//当prev不为空时，表示找到链表头节点
      head = cur
    }else{
      prev.right = cur
      cur.left = prev
    }
    prev = cur
    recur(cur.right)
  }

  if(!root) return
  recur(root)
  head.left = prev
  prev.right = head
  return head
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

treeToDoublyList(tree)