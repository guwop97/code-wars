

// Task
// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives and negatives also zeros_

// Repetition of numbers in the array/list could occur.

// The Maximum Gap is computed Regardless the sign.

// Input >> Output Examples
// maxGap ({13,10,5,2,9}) ==> return (4)

// My solution

function maxGap (numbers){
  
    let result = []
    let sorted = numbers.sort((a,b)=> b - a)
   
    for(let i = 0; i < sorted.length-1; i++){
      result.push(sorted[i] - sorted[i+1])
    }
    return Math.max(...result)
  }