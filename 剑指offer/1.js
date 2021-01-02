/* 两数之和 */
/* 暴力求解 */
function sumOf2Num(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++){
      if(nums[i] + nums[j] === target){
        return [i,j]
      }
    }
  }
}

/* 建立hashMap */
function sumOf2Num1(nums, target){
  let result = []
  let map = new Map()

  for(let i = 0; i < nums.length; i++){
    map.set(nums[i], i)
  }

  for(let i = 0; i < nums.length; i++){
    let anotherNum = target - nums[i]
    if(map.has(anotherNum) && map.get(anotherNum) !== i){
      result.push(i)
      result.push(map.get(anotherNum))
      return result
    }
  }
}

/* 最后的结果反而是暴力更快一点 strange */