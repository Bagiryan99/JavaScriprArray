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

