/* 剑指Offer 06
*  从尾到头打印链表
*  简单难度 没什么好说的
*  可以利用unshift api
*  也可以在head里面添加上向前的prev指针
*  奇奇怪怪的方法可以自己多想想
*  可以自己实现reverse的api，比调用api效率要高一点
*/

let reversePrint = function (head) {
  let array = []
  while (head.next) {
    array.unshift(head.val)
    head = head.next
  }
  return array
}

function myReverse() {
  let left = null
  let right = null
  let temporary = null
  let length = array.length
  for (left = 0; left < length / 2; left += 1) {
    right = length - 1 - left
    temporary = array[left]
    array[left] = array[right]
    array[right] = temporary
  }
  return array
}