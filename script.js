
// This function sorts an array of numbers from lowest to highest
let sortArr = (arr) => {
    arr.sort((a, b) => a-b);
    console.log('sortArr function output:', arr);
}
// Calling the sortArr function and passing in a randomized array of numbers 
sortArr([1, 55, 3000, 22, 5, 34, 56, 1000, 343]);

