// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );




//My solution

var capitals = function (word) {
    
    let final=[]
   
    for(let i = 0; i<word.length;i++){
      let result = word[i]
      if(result === result.toUpperCase()){
        final.push(i)
      }
    }
    return final
  };