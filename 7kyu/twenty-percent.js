// Write a function to replace all spaces in a string with %20. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the true length of the string. Note, if implementing this in Java please use a character array so that you can perform this operation in place

// My solution


function twentyPercent(str){
    let x = str.split('')

  for(let i = 0; i < x.length;i++){
    if(x[i]=== ' '){
        x[i] = '20%'
    }
  }
return x.join('')
}