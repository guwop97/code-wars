// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead


// My solution

function bump(x){
    let bumps = []
  let arr = x.split('')
  
  for(let i = 0; i< arr.length; i++){
    if(arr[i] === 'n'){
      bumps.push(arr[i])
    }
  }
   return bumps.length <= 15 ? "Woohoo!": "Car Dead"
  }