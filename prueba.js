const twoNumberSum = (array, targetSum) => {
    let isCorrect = false
    let index = 0;
  
    while(!isCorrect){
      for(let i = 1; i < array.length; i++){
        if(array[index] + array[i] === targetSum){
          isCorrect = true;
          return [array[index], array[i]]
        }
        else if(index > array.length){
          return []
        }
      }
      index++;
    }
}
  
  
  let arrayInt = [2,4,3,7,8,9,0,20,45,85,1,70];
  let tagetSum = 89;
  
  let result = twoNumberSum(arrayInt,tagetSum )
  console.log(result)