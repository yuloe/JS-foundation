/* 实现函数double Power(double base, int exponent)，求base的exponent次方。不得使用库函数，同时不需要考虑大数问题。 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  function power(x, n) {
    if (n === 0) return 1
    if (n & 1) {
      let tmp = power(x, (n - 1) / 2)
      return tmp * tmp * x
    } else {
      let tmp = power(x, n / 2)
      return tmp * tmp
    }
  }
  if(n > 0){
    return power(x,n)
  }else{
    return 1/power(x, -n)
  }
};

var myPow2 = function(x, n){
  if(n === 0){
    return 1
  } else if(n === 1){
    return x
  }
  let exp = n > 0 ? n : -n
  let result = 1
  while(exp){
    if(n & 1){
      result *= x
    }
    x *= x
    exp >>= 1
  }
  return n > 0 ? result : 1/result
}

console.log(myPow2(2,2))