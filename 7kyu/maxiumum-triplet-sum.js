// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

// Notes :
// Array/list size is at least 3 .

// Array/list numbers could be a mixture of positives , negatives and zeros .

// Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

// My solution :

function maxTriSum(numbers){
    let unique = [...new Set(numbers)];
    return unique.sort((a,b)=> a-b).slice(-3).reduce((a,i)=> a + i, 0)
  }