// Given a series of digits as a string, determine if the number represented by the string is divisible by three.

// Example:

// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false
// Try to avoid using the % (modulo) operator.

// My solution

function divisibleByThree(str){
    let result = str.split('').reduce((a,i)=> a + Number(i), 0)/3;
     
    if (Number.isInteger(result)) {
        return true
    }else{
      return false
    }
      }