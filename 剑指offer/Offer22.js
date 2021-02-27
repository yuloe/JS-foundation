/* 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，
即链表的尾节点是倒数第1个节点。

例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 2 个节点是值为 4 的节点。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

/* 两种方法： 1 栈   2 双指针 提前移动k次 */
var getKthFromEnd = function (head, k) {
  let prev = head
  for (let i = 0; i < k; i++) {
    prev = prev.next
  }
  let temp = head
  while (prev) {
    temp = temp.next
    prev = prev.next
  }

  return temp
};