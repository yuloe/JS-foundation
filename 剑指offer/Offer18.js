/* 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (head.val === val) return head.next

  let temp = head.next
  let prev = head
  while (temp) {
    if (temp.val === val) {
      prev.next = temp.next
      return head
    }
    prev = temp
    temp = temp.next
  }
  return head
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let test = new ListNode(4)
test.next = new ListNode(5)
test.next.next = new ListNode(1)
test.next.next.next = new ListNode(9)

deleteNode(test, 1)