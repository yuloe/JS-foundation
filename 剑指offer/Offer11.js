var minArray = function(numbers) {
  let flag = numbers[0]
  for(let i = 1; i < numbers.length; i++){
      if(flag <= numbers[i]){
          flag = numbers[i]
          continue
      }else{
          return numbers[i]
      }
  }
};

minArray([2,5,1])