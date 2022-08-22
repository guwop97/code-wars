
// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.


// My solution


function divCon(x){
    let str = []
    let num = []
  for(let i = 0; i < x.length; i++){
    if(Number.isInteger(x[i])=== true){
      str.push(x[i])
    }else{
      num.push(x[i])
    }
  
  }
    return str.reduce((a,e)=> a + e,0) - num.reduce((a,e)=>a + Number(e),0)
  }