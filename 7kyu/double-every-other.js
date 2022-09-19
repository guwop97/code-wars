// DESCRIPTION:
// Write a function that doubles every second integer in a list, starting from the left.

// Example:

// For input array/list :

// [1,2,3,4]

// My solution

function doubleEveryOther(a) {
  
    let arr = []
   
  for(let i = 0; i < a.length; i++){
    if(i % 2 === 1){
      arr.push(a[i] *2)
    }else{
      arr.push(a[i])
    }
  }
    return arr
  
  }