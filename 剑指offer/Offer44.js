/* 数字以0123456789101112131415…的格式序列化到一个字符序列中。在这个序列中，第5位（从下标0开始计数）是5，第13位是1，第19位是4，等等。

请写一个函数，求任意第n位对应的数字。*/

/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  for (let bit = 1; bit < 32; ++bit) {
    const startNum = Math.pow(10, bit - 1);
    const bitSum = 9 * startNum * bit;
    if (n > bitSum) {
      n -= bitSum;
    } else {
      let num = startNum + Math.ceil(n / bit) - 1;
      let pos = n - bit * (num - startNum) - 1;
      return num.toString(10)[pos];
    }
  }
};