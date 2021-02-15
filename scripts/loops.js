// for of and for in loop

const array = [4, 5, 6, 7, 8];
//Returns values
for (let i of array){
    //console.log(i);
}

//Retrns key
for (let i in array){
    //console.log(i);
}

const obj = {
    name: "Zara",
    age: '20',
};
for (let i in obj){
    //console.log(i);
}
//forEach
const prices = [1.5, 5, 7, 8, 9];
const tax = 0.23;

const taxedPrice = [];

// for (let i of prices){
//     taxedPrice.push(i * (1 + tax));
// }
// console.log(taxedPrice);
prices.forEach((price, idx, arr) =>{
  const priceObj ={
      index : idx,
       taxedPrice: price *  tax,

  };
  taxedPrice.push(priceObj);
})
//console.log(taxedPrice);
let a = [10,20,30,5];
// a.forEach(function (val, i) {
//     console.log("what is a great number " + val + " which is at index" + i);

// })
[1,2,3].forEach(function (val, i) { 
    //console.log("what is a great number " + val + " which is at index" + i);
})
//  let forEach = function(arr, fun) {
//      let i = 0;
//      while (i < arr.length) {
//      fun(arr[i]);
//     i = i + 1;
//      }
//  };
  let zoo = [5, 6, 9];
  zoo.forEach( function (val) {
     // console.log(val);
      
  })

  //map
  let zoo1 = [2, 4, 6];
  let bar = zoo1.map(function(val, i ) {
      return val * 2;
  });
  console.log(zoo1);
  console.log(bar);

  let people = [
      {
          name: "Sona",
          lName: "Adamyan"
      },
      {
          name: "Zoya",
          lName: "Avagyan"
      }
  ];
// let names = [];
// people.forEach(function(val, i) {
//   names[i] = val.name
// })
let names = people.map(function(val, i) {
    return val.name;
})
console.log(names);

let map = new Map();
map.set('fName', 'Inna');
map.set('lName', 'Bagiryan');
console.log(map);