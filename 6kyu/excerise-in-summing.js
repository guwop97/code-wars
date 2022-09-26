DESCRIPTION:
// Your task is to finish two functions, minimumSum and maximumSum, that take 2 parameters:

// values: an array of integers with an arbitrary length; may be positive and negative
// n: how many integers should be summed; always 0 or bigger
// Example:
// var values = [5, 4, 3, 2, 1];
// minimumSum(values, 2); // should return 1+2 = 3
// maximumSum(values, 3); // should return 3+4+5 = 12


// My solution




function minimumSum(values, n) {
    let len = values.length
    
    if(values.length === 0 || n === 0){
      return 0
    }
    if( n > len){
      len = n
    }
    
    let value = values.sort((a,b)=> a - b)
    let result = value.slice(0,n).reduce((a,e)=> a + e,0)
   
    return result
    
  }
  
  function maximumSum(values, n) {
      let leng = values.length
    
    if(values.length === 0 || n === 0){
      return 0
    }
    if( n > leng){
      leng = n
    }
    
    let value = values.sort((a,b)=> b-a )
    let result = value.slice(0,n).reduce((a,e)=> a + e,0)
    
  console.log(result)
    return result
   
  
    
  }