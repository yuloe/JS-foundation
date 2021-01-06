//乞丐版本 后续仍需优化

class MyPromise {
  constructor(executor) {
    /* 初始化state为等待态
    *  成功需要传递为this.value = undefined
    *  失败需要传递为this.reason = undefined
    *  */
    this.state = 'pending'
    this.value = null
    this.reason = null
    //两种状态的队列
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    const resolve = (value) => {
      /* 利用macro-task机制(setTimeout) 确保resolve和reject异步执行 */
      /* setTimeout中不能带有参数value */
      setTimeout(() => {
        if (this.state === 'pending') {
          this.state = 'fulfilled'
          this.value = value
          this.onFulfilledCallbacks.map(cb => {
            this.value = cb(this.value)
          })
        }
      }, 0)
    }

    const reject = (reason) => {
      //需要使用箭头函数，保存this值，否则需要用_that保存this值
      setTimeout(() => {
        if (this.state === 'pending') {
          this.state = 'rejected'
          this.value = reason
          this.onRejectedCallbacks.map(cb => {
            this.reason = cb(this.reason)
          })
        }
      }, 0)
    }

    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  then(onFulfilled, onRejected) {
    typeof onFulfilled === 'function' && this.onFulfilledCallbacks.push(onFulfilled)
    typeof onRejected === 'function' && this.onRejectedCallbacks.push(onRejected)
    /* 关键 返回this 新的promise对象 */
    return this
  }
}

let a = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000)
})
a.then(res => {
  console.log(res)
  return res + 1
}).then(res => {
  console.log(res)
})