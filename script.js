// These functions below will utilize the newer ES6 syntax and methods!

// This function sorts an array of numbers from lowest to highest
let sortArr = (arr) => {
    arr.sort((a, b) => a-b);
    console.log('sortArr function output:', arr);
}
// Calling the sortArr function and passing in a randomized array of numbers 
sortArr([1, 55, 3000, 22, 5, 34, 56, 1000, 343]);


// This function converts an array of strings into a single string
let arrToString = (arr) => {
    str = arr.join(' ');
    console.log('arrToString function output:', str);
}
// Calling the arrToString function and passing in an array with 2 strings inside
arrToString(['Hello', 'World!']);


// This function will count the number of vowels in a string
let countVowels = (str) => {
    let vowels;
}