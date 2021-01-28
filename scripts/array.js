// var arr = new Array();
// var arr1 = [];
// //console.log(arr);  //Array[0]
// //console.log(arr1); //Array[0]
// ​
// // Array with some number of elements:
// ​
// var arr = new Array("Diana", "Alice", "Adriana", "David");
// var arr1 =["Ani", "Rafayel", "Dayana"];
// //console.log(arr);     //["Diana", "Alice", "Adriana", "David"]
// //console.log(arr1);   //["Ani", "Rafayel", "Dayana"]
// ​
// // Method push ()  adds an element to the end of the array:
// var arr = [];
// arr.push("apple")
// arr.push("cherry");
// arr.push("apricot");
// //console.log(arr); //["apple", "cherry", "apricot"]
// ​
// // Method pop ()  removes the last element from the array:
// ​
// var arr = ["apple", "cherry", "apricote"]
// arr.pop();
// //console.log(arr); //["apple", "cherry"]
// ​
// //Method shift ()  extracts and removes the first element from the array:
// var arr = ["Daniel", "Mariam", "Mane"];
// arr.shift();
// //console.log(arr); //["Mariam", "Mane"]
// ​
// // Method unshift () adds a new element to the beginning of the array:
// ​
// var arr = ["Diana", "Ilona"];
// arr.unshift("Tom");
// //console.log(arr);  //["Tom", "Diana", "Ilona"]
// ​
// //Method  concat ()  is used to concatenate arrays:
// ​
// var people = ["Arthur", "Shushan"];
// var people1 = ["Aram"];
// var concateArr = people.concat(people1);
// //console.log(concateArr);  //["Arthur", "Shushan", "Aram"]
 
// //Methods indexOf () and lastIndexOf ()  return the index of the first and last included element in the array.
//  var car = ["Toyota","Audi"];
//  var people = ["Inna", "Zoya","Vard"];
//  var firstIndex = car.indexOf("Audi");
//  var lastIndex = people.lastIndexOf("Zoya");
//  //console.log(firstIndex);  // 1
//  //console.log(lastIndex);  //1

//Method slice

var userSlice = ["Liana", "Ani", "Gayane", "Tigran", "Alyona"];
var people =userSlice.slice(1,3);
//console.log(people ,'modyfied'); //["Ani", Gayane];
//console.log(userSlice, 'original array'); // ["Liana", "Ani", "Gayane", "Tigran", "Alyona"];

var arraySlice = [1,2,3,4,5,99, 'hello'];
var SlidcedMins = arraySlice.slice(1, -1);
//console.log(arraySlice); //[ 1, 2, 3, 4, 5, 99, 'hello' ]
//console.log(SlidcedMins); // [ 2, 3, 4, 5, 99 ]

// var users=["Seda","Mariam","Meri","Arthur"];
// console.log(users, 'original');
// var users = people;

// people[2]="Laura"
// console.log(users, 'modyfied');
  

var users=["Seda","Mariam","Meri","Arthur"];
//console.log(users, 'original');
var people = users;

people[2]="Laura"
//console.log(users, 'modyfied');

//method splice
var users =["Mariam", "Lia", "Inna", "Anna", "Sara","Gevorg"];
var deleted=users.splice(3);
//console.log(users, 'original');//[ 'Mariam', 'Lia', 'Inna' ]
//console.log(deleted, 'modyfied'); //[ 'Anna', 'Sara', 'Gevorg' ]

var users=["Liana", "Sona", "Lia"];
var deleted=users.splice(-2);
//console.log(users, 'original');//["Liana"]
//console.log(deleted, 'modyfied');//["Sona", "Lia"]

var users=["Liana", "Sona", "Lia",1,4,99];
var deleted=users.splice(1,3);
//console.log(users, 'original');// [ 'Liana', 4, 99 ]
//console.log(deleted, 'modyfied');//[ 'Sona', 'Lia', 1 ]

var users=["Liana", "Sona", "Lia",1,4,99];
var deleted=users.splice(1,3 , 'Dayana', "Kristina");
//console.log(users, 'original');// 
//console.log(deleted, 'modyfied');//

var x = ["Mane", "Harut", "Luiza"];
var i = 0;

while( i < x.length){
    console.log(x[i]);
    i = i + 1;
}

