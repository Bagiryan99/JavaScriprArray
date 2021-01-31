// ex 1
function user(string) {
    return string[0].toUpperCase() + string.slice(1);

}
console.log(user("hello"));

//ex 2
 var people = ["Mariam", "Rozi", "David"];
 function arrayClone(arr) {
     return arr.slice(0);
     
 };

 var arr1 = arrayClone(people);
 console.log(arr1);