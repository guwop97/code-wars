
// Challenge 1 Source: Cracking the Coding Interview Develop an algorithm to 
// determine if a string contains all unique characters. What if you are not allowed 
// to use additional data structures?



// My solution


function unique(str){

    let split = str.split(' ').join('').split('').sort()
    
    for(let i = 0; i < split.length-1; i++){
     if(split[i] !== split[i+1]){
         continue;
     }else{
        return('false')
     }
    }
    return('true')
    }