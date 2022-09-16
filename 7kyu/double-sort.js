// Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

// Note that numbers written as strings are strings and must be sorted with the other strings.




// My solution


function dbSort(a){
    let nums = []
    
    let str= []
    
    for(let i = 0; i < a.length; i++){
      if(typeof a[i] === 'number'){
        nums.push(a[i])
      }else{
        str.push(a[i])
      }
    }
     let num = nums.sort((a,b)=> a - b )
     let string = str.sort()
     return num.concat(string)
   }