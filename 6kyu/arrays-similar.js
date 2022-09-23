
// DESCRIPTION:
// Write a function that determines whether the passed in arrays are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

// const arr1 = [1, 2, 2, 3, 4],
//       arr2 = [2, 1, 2, 4, 3],
//       arr3 = [1, 2, 3, 4],
//       arr4 = [1, 2, 3, "4"]

// arraysSimilar(arr1, arr2); // Should equal true
// arraysSimilar(arr2, arr3); // Should equal false
// arraysSimilar(arr3, arr4); // Should equal false


// My solution


function arraysSimilar(arr1, arr2) {
    let ar1 = arr1.reduce((a,e)=> a + e,0)
    let ar2 = arr2.reduce((a,e)=> a + e, 0)
    
    if(ar1 === ar2){
      return true
    }else{
      return false
    }
    
    
  }