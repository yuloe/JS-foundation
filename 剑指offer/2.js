/* 两数求和 简单的链表  重要的是学会利用各种特性，简化代码 详情参考函数内部*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (val === undefined ? null : next)
}


let l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
let l2 = new ListNode(5, new ListNode(6, new ListNode(8)))

var addTwoNumbers = function (l1, l2) {
  let result = new ListNode()
  let tempResult = result
  let carry = 0
  let sum = 0
  while (l1 || l2) {
      sum = (l1 ? l1.val:0) + (l2 ? l2.val:0) + carry 
      carry = sum >= 10 ? 1 : 0
      tempResult.next = new ListNode(sum%10)
      tempResult = tempResult.next

      l1&&(l1 = l1.next)
      l2&&(l2 = l2.next)
  }
  carry&&(tempResult.next = new ListNode(1))
  return result.next
};

console.log(addTwoNumbers(l1, l2))