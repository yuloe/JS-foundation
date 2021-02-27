/* 输入一个整数 n ，求1～n这n个整数的十进制表示中1出现的次数。

例如，输入12，1～12这些整数中包含1 的数字有1、10、11和12，1一共出现了5次。*/

/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  //对于个位出现的1： (n / 10) * 1 + (n % 10) > 1 ? 1 : 0;
  //对于十位出现的1： (n / 100) * 10 + (low > ) > 1 ? 
  let count = 0

  for (let i = 1; i <= n; i * 10) {
    let divide = i * 10
    let high = Math.floor(n / divide), low = n % divide, rest = 0

    count += high * i
    rest = (low > (2 * i - 1)) ? i : ((low < i) ? 0 : k - i + 1)
    count += rest
  }
  return count
};