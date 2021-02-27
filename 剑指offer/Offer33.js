/* 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。
如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。 */

/**
 * @param {number[]} postorder
 * @return {boolean}
 */
//利用辅助栈
var verifyPostorder = function(postorder) {
  
};


//递推法
var verifyPostorder1 = function(postorder) {
  //递归解析： 
  /* 终止条件： 当 i≥j ，说明此子树节点数量 ≤1 ，无需判别正确性，因此直接返回 true ；
  递推工作：
    划分左右子树： 遍历后序遍历的 [i, j] 区间元素，寻找 第一个大于根节点 的节点，索引记为 m 。此时，可划分出左子树区间 [i,m−1] 、右子树区间 [m,j−1] 、根节点索引 j 。
    判断是否为二叉搜索树：
      左子树区间 [i, m - 1] 内的所有节点都应 < postorder[j] 。而第 1.划分左右子树 步骤已经保证左子树区间的正确性，因此只需要判断右子树区间即可。
      右子树区间 [m, j-1] 内的所有节点都应 > postorder[j] 。实现方式为遍历，当遇到 ≤postorder[j] 的节点则跳出；则可通过 p=j 判断是否为二叉搜索树。
    返回值： 所有子树都需正确才可判定正确，因此使用 与逻辑符 && 连接。
      p = j： 判断 此树 是否正确。
      recur(i,m−1) ： 判断 此树的左子树 是否正确。
      recur(m,j−1) ： 判断 此树的右子树 是否正确。
 */

  function recur(postorder,i,j){
    if(i >= j) return true
    let point = i
    while(postorder[point] < postorder[j]) point++
    let m = point
    while(postorder[point] > postorder[j]) point++
    return point === j && recur(postorder, i, m - 1) && recur(postorder, m, j - 1)
  }

  return recur(postorder, 0, postorder.length - 1)
};