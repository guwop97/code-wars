// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always have even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 
// Explanation:
// The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22

// My solution

function minSum(arr) {
    let result = arr.sort((a,b)=> a-b).reduce((a,e)=> a + e * arr.pop(),0)
   
    return result
   }