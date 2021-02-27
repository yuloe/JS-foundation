/* 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  /*   let votes = 0
    let x = nums[0]
    for(let i = 0; i < nums.length; i++){
      if(!votes) x = nums[i]
      if(x === nums[i]){
        votes++
      }else{
        votes--
      }
    }
  
    let count = 0
    for(num of nums){
      if(num === x) count++
    }
    return count > (nums.length / 2) ? x : 0 */

  nums.sort((a, b) => a > b)
  return nums[Math.floor(nums.length / 2)]
};

console.log(majorityElement([3, 2, 3]))