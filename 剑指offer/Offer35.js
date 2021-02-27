/* 请实现 copyRandomList 函数，复制一个复杂链表。
在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。
 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
};


var copyRandomList = function (head) {
  if (!head) return null
  const map = new Map()
  let node = head//当前节点
  const newHead = new Node(node.val)
  let newNode = newHead //当前节点的copy
  map.set(node, newNode)
  
  while(node.next){
    newNode.next = new Node(node.next.val)
    node = node.next
    newNode = newNode.next
    map.set(node, newNode)
  }

  newNode = newHead
  node = head

  while(newNode){
    newNode.random = map.get(node.random)
    newNode = newNode.next
    node = node.next
  }

  return newHead
};