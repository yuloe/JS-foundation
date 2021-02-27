/* 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1) */
/* 利用辅助栈解决 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.A = []
  this.B = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.A.push(x)

  if(this.B.length === 0 || this.B[this.B.length - 1] >= x) this.B.push(x)
  
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let returnElement = this.A.pop()

  if(this.B[this.B.length - 1] === returnElement) this.B.pop()

  return returnElement
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.A[this.A.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
  return this.B[this.B.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */