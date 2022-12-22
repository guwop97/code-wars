// Given a magazine of words and a ransom note, 
// determine if it’s possible to “cut out” and create the 
// ransom note from the magazine words.


// const magazine =
//  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
//  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
//  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
//   nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
//   id est laborum";


function ransom(noteStr,magStr){
    let note = noteStr.split(' ')
    let mag = magStr.split(' ')

    for(let i = 0; i < note.length;i++){

        let found = false

        for(let j= 1; j < mag.length;j++){
            if(note[i] === mag[i]){
                found = true
                break;
            }
            if(!found){
                console.log(false)
            }
        }
    }
    console.log(true)

}

ransom('sit amet sed do eiusmod','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et' )


