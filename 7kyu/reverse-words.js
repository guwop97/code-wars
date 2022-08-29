// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// My solution

function reverseWords(str) {
    return str.split('').reverse().join('').split(' ').reverse().join(' ')
   }