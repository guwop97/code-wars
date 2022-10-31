
// DESCRIPTION:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// My solution


function solution(str){
  
    var result = []
    
    for(var i = 0; i< str.length; i+=2){
      
      var second = str[i+1] || '_'
    
     result.push(str[i] + second)
  }
  
  return result
  }