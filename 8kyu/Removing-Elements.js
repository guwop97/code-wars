
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// My solution



function removeEveryOther(arr){
    let evens = []
    for(let i = 0; i< arr.length;i++){
      if(i % 2 === 0){
        evens.push(arr[i])
      }
    }
    return evens
  }
  