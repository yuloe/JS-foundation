/* 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。 */

/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
/*   let result = []
  for(let i = 1; i < Math.pow(10,n); i++){
    result.push(i)
  }
  return result */
  let len = Math.pow(10, n)-1
  return Array.from({length: len}, (item, index) => index+1)
};

console.log(printNumbers(2))