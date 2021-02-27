//用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能
var CQueue = function () {
  this.stack1 = []
  this.stack2 = []
};

/*  双栈用来实现序列倒置：
    假设有 stack1=[1, 2, 3] 、 stack2=[] ，
    如果循环出栈 stack1 并将出栈元素进栈 stack2 ，
    则循环结束后 stack1=[] 、 stack2=[3, 2, 1] ，即通过 stack2 实现了 stack1 中元素的倒置
*/

/* 在本题中，以stack1中数据为准
 */
/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stack1.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.stack2.length) {
    return this.stack2.pop()
  }
  if (!this.stack1.length) return -1
  while (this.stack1.length) {
    this.stack2.push(this.stack1.pop())
  }
  return this.stack2.pop()
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */