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

//console.log(isAnagram('hello', 'jello'));//false
//console.log(isAnagram('hello','loelh'));// true

//Example of anagram
function validAnagram(str1, str2) {
    if(str1.length !== str2.length){
        return false;
    }
    

    const lookup = {}
    for (let i = 0; i < str1.length; ++i){
        let letters = str1[i];
        //if letters exisit increment else set to 1
        lookup[letters] ? lookup[letters] += 1 : lookup[letters] = 1;

    }
    //console.log(lookup);
    for(let i = 0; i < str2.length; ++i){
        let letters = str2[i];
        if(!lookup[letters]){
            return false;
        }else{
            lookup[letters] -= 1;
         }
    }
    return true;
}
// console.log(validAnagram("aac", "aca"));
// console.log(validAnagram("", ""));
// console.log(validAnagram("abcd", "abc"));
// console.log(validAnagram("abb", "baa"));





//Program to Convert the Temperature from Celsius to Fahrenheit 1
function convertToF(celsius) {

    var fahrenheit = (celsius * (9/5)) + 32;
  
    if ( typeof fahrenheit !== 'undefined' ) {
    return fahrenheit;
    }
   else {
      return 'fahrenheit not defined';
    }
  }
  //console.log(convertToF(0));
 
//2
//   let F = prompt("Enter temperature in farenheit");
//   let C =(F - 32) * 5/9;
//   console.log("Temperature in celsius =" + C);

//Write a function that will check whether the given string is a palindrome or not.
    let Palindrome = function (word) {
    let len = word.length;
    let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
    let end = word.substring(len -Math.floor(len / 2)).toLowerCase();
    //console.log(start. end);
    let flip = end.split('').reverse('').join('');
    return (start == flip);

    
}
    // console.log(Palindrome('radar'));//true
    // console.log(Palindrome('Anna'));//true
    // console.log(Palindrome('banana'));//false