//Write a function which calculates the average of the numbers in a given list.

//Note: Empty arrays should return 0.

//My solution

function find_average(array) {
    // your code here
   if(array.length === 0){
     return 0
   }
    let ave = array.reduce((a,i)=>(a + i)
     ,0)
     
     let result = ave/array.length
     return result;
}