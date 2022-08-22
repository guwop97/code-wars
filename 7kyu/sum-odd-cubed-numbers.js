
// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.


// My solution


function cubeOdd(arr) {

    let result= arr.filter(x=> x % 2 !== 0).map(x=> x ** 3)
    .reduce((a,e)=> a+e,0)
    
    for(let i = 0; i < arr.length; i++){
      if( typeof(arr[i]) === 'string'){
        return undefined
      }
    }
      return result
    }