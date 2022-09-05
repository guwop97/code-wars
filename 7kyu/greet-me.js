// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

// My solution

var greet = function(name) {
    let n = name.slice(0,1).toUpperCase()
    let s = name.slice(1).toLowerCase()
     let names = n + s
    return `Hello ${names}!`
    };