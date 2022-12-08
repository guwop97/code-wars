// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 


const maxCharacter= (str) =>{
const map = {}
let count = 0
let character = ''

for( let index in str){
    map[str[index]] = map[str[index]] + 1 || 1
    
}
for(let i in map){
    if(map[i] > count){
        count = map[i]
        character = i
    }
}
console.log(character)
}

maxCharacter('lopperrrr')