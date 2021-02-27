/*  地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
    一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。
    例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？
    注：满足k条件的坐标不一定能进去
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  let count = function (row, col) {
    let result = 0
    while (row) {
      result += row % 10
      row = parseInt(row / 10)
    }
    while (col) {
      result += col % 10
      col = parseInt(col / 10)
    }
    return result
  }

  const directionArray = [
    [-1, 0], // 上
    [0, 1], // 右
    [1, 0], // 下
    [0, -1] // 左
  ]

  let arrivedPosition = new Set(['0,0'])    //已走过的坐标
  let queue = [[0, 0]]              //遍历的坐标队列
  while (queue.length) {
    let [x, y] = queue.shift()      //队首的坐标

    //遍历的方向
    for (let i = 0; i < 4; i++) {
      let offsetX = x + directionArray[i][0]
      let offsetY = y + directionArray[i][1]

      if (offsetX < 0 || offsetX >= m || offsetY < 0 || offsetY >= n || count(offsetX, offsetY) > k || arrivedPosition.has([offsetX, offsetY].toString())) {
        continue
      }

      arrivedPosition.add([offsetX, offsetY].toString())

      queue.push([offsetX, offsetY])
    }
  }

  return arrivedPosition.size
};

movingCount(1, 2, 1)