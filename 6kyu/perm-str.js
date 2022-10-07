// Given two strings, write a function to determine if one is a permutation of the
//  other (this means all the same letters at the same frequency, rearranged. 
// So abcd is a permutation of cbda, but abc would not count as a permutation of abcd).
//  Stretch: do it without built in methods like contains() or substring(). 
//  What's the best time complexity you can get?.

// My solution

function twoStr(str1,str2){
    let arr1 = str1.split('').sort().join('')
    let arr2 = str2.split('').sort().join('')
    
    if(arr1.includes(arr2) && arr1.length === arr2.length){
        return true
    }else{
        return false
    }
    }