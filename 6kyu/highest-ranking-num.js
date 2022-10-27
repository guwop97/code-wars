DESCRIPTION:
// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

// My solution


function highestRank(arr){

    const map = {};
   
  let result = arr.forEach(item => {
       if(map[item]){
          map[item]++;
       }else{
          map[item] = 1;
       }
    });
   let sortedList = Object.entries(map).sort((a,b)=>{
       if(b[1] > a[1]) return 1;
       else if(b[1] < a[1]) return -1; 
   else {
          if(a[0] < b[0]) return 1;
          else if(a[0] > b[0]) return -1;
          else return 0
   }
   })
   
    return Number(sortedList.map(e=>e[0]).slice(0,1))
 }