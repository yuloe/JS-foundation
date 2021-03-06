/* 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  /* 利用带头节点的链表就可以简单解决问题 */
  let current = new ListNode()
  const dummy = current
  while(l1 || l2){
    if(!l1){
      current.next = l2
      return dummy.next
    }else if(!l2){
      current.next = l1
      return dummy.next
    }

    if(l1.val <= l2.val){
      current.next = l1
      l1 = l1.next
    }else{
      current.next = l2
      l2 = l2.next
    }

    current = current.next
  }


  return dummy.next
};