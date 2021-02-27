/* 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

要求时间复杂度为O(n)。 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  return Math.max(...nums.reduce((dp, currentValue, index)=>{
    index && (dp[index] = ((dp[index - 1] > 0 ? dp[index - 1] : 0) + currentValue))
    return dp
  }, [nums[0]]))
};  

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])