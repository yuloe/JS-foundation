/* 请实现一个函数，输入一个整数（以二进制串形式），输出该数二进制表示中 1 的个数。
例如，把 9 表示成二进制是 1001，有 2 位是 1。因此，如果输入 9，则该函数输出 2。 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let result = 0
  while(n){
    (n & 1) && (result++, n = n>>1)
  }
  return result

  //效率更高 仔细思考
  let count = 0
  while(n!==0){
      n = ((n-1)&n)
      count++
  }
  return count
};