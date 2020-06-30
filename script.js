// These functions below will utilize the newer ES6 syntax and methods!

// This function sorts an array of numbers from lowest to highest
const sortArr = (arr) => {
    arr.sort((a, b) => a-b);
    console.log('sortArr output:', arr);
}
// Calling the sortArr function and passing in a randomized array of numbers 
sortArr([1, 55, 3000, 22, 5, 34, 56, 1000, 343]);


// This function converts an array of strings into a single string
const arrToString = (arr) => {
    str = arr.join(' ');
    console.log('arrToString output:', str);
}
// Calling the arrToString function and passing in an array with 2 strings inside
arrToString(['Hello', 'World!']);


// This function will count the number of vowels in a string
const countVowels = (str) => {
    str = str.toLowerCase();
    let res = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    for(letter of str) {
        for(vowel of vowels) {
            if(letter === vowel) {
                res++;
            }
        }
    } 
    console.log('countVowels output:', 'There are', res, 'vowels');
}
// Calling the countVowels function and passing in a string
countVowels('Lets check those vowels then, that would be a nice idea!');


// This function will remove a specific index from an array
const removeIndex = (arr, index) => {
    if (index > -1) {
        arr.splice(index, 1);
    }
    console.log('removeIndex output:', arr);
}
// Calling the removeIndex function and passing in an array of strings and the index we want to remove
removeIndex(['I want to remove', 'this index', 'this function will do that', 'as expected'], 1);


// This function will change the first letter of each word in the string to a capital letter
const capitalizeFirst = (str) => {
    const result = str.split(' ').map(str => (str[0] || ' ').toUpperCase() + str.slice(1)).join(' ').trim();
    console.log('capitalizeFirst output:', result);
}
// Calling the capitalizeFirst function and passing in a string of 2 words
capitalizeFirst('los angeles');


// This function finds data in an array
const search = (arr, find) => {
    for(data of arr) {
        if(data.startsWith(find)) {
            console.log('search output:', data);
        }
    }
}
// Calling the search function and passing in an array and a string that finds whats in the array
search(['Car', 'Cat', 'Capital', 'House', 'Tree', 'Shoes', 'Clothes'], 'C')