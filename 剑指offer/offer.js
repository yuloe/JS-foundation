// let matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
let matrix = [[-1,3]]
let target = 3

let findNumberIn2DArray = function (matrix, target) {
  let column = matrix.length; let row
  if(matrix.length === 0){
      row = 0
  }else{
      row = matrix[0].length
  }
  let j = row - 1; let i = 0
  while (0 <= i && i < column && 0 <= j && j < row) {
    if (target > matrix[i][j]) {
      i++
    } else if (target < matrix[i][j]) {
      j--
    } else {
      return true
    }
  }
  return false
}

findNumberIn2DArray(matrix, target)