/* 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
输入：matrix = [ [1,2,3],
                [4,5,6],
                [7,8,9] ]
输出：[1,2,3,6,9,8,7,4,5]
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) return []
  const rows = matrix.length
  const cols = matrix[0] === undefined ? 0 : matrix[0].length
  const visited = new Array(rows).fill(0).map(() => new Array(cols).fill(false))
  const order = new Array(rows * cols).fill(0)

  let directionIndex = 0, row = 0, col = 0
  const directions = [[0,1], [1,0], [0,-1],[-1,0]]
  for(let i = 0; i < rows * cols; i++){
    order[i] = matrix[row][col]
    visited[row][col] = true
    const nextRow = row + directions[directionIndex][0]
    const nextCol = col + directions[directionIndex][1]

    if(!(0 <= nextRow && nextRow < rows && 0 <= nextCol && nextCol <cols && !visited[nextRow][nextCol])){
      directionIndex = (directionIndex + 1) % 4
    }

    row += directions[directionIndex][0]
    col += directions[directionIndex][1]
  }

  return order
};

spiralOrder([[1,2,3],[4,5,6],[7,8,9]])