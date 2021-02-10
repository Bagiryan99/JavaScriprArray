// // ex 1
// function user(string) {
//     return string[0].toUpperCase() + string.slice(1);

// }
// console.log(user("hello"));

// //ex 2 Clone array
//  var people = ["Mariam", "Rozi", "David"];
//  function arrayClone(arr) {
//      return arr.slice(0);
     
//  };

//  var arr1 = arrayClone(people);
//  console.log(arr1);

//clone array with spread operator
function cloneArray(arr) {
    let clonedArr = [...arr];
    //return clonedArr;
    
}
//console.log(cloneArray([10,20,30,40]));

function cloneArray(arr) {
    let clonedArr = [].concat(arr);
   // return clonedArr;
    
}
//console.log(cloneArray([10,20,30,50]));

//Write a function that takes 2 strings as an argument and checks if those strings are anagram or not.

var isAnagram = function(str1, str2) {
    var sorted1 = str1.split('').sort().join('').toLowerCase();
    var sorted2 = str2.split('').sort().join('').toLowerCase();
    return sorted1 == sorted2;
}
console.log(isAnagram('hello', 'jello'));
console.log(isAnagram('hello','loelh'));