// // function foo() {
// //     let text = "Clouser"
// //     function bar() {
// //         console.log(text);
// //     }
// //     bar();
// // }
// // foo();

// function foo() {
//     let text = "Clouser"
//     function bar() {
//         //console.log(text)
        
//     }
//     return bar();
// }
// let myFoo = foo;
//  myFoo();
// function sum(a) {
//     return function(b) {
//         return a + b;
//     };
// }
// let add1 = sum(6);
// let add2 = sum(9);
// //console.log(add1(4));
// //console.log(add2(9));

// let e = 8;
// function otherSum(a) {
//     return function(b) {
//        return function (c) {
//            return function (d) {
//                //local scope
//                return a + b + c + d + e;
//            };
           
//        };
//     };
// }
//console.log(otherSum(1) (2) (3) (4));
 var y = 3;

var f = function () {
    var x = 8;
    return function () {
        var z = 4;
        console.log(x + y + z);
    };
};
var f2 = f();
//f2();
//debugger;

let x = 7;
function a(y) {
    return x + y; // 7 + 4 = 11
}
function b(z) {
    let x = 99;
    return z(4); //11
}
//console.log(b(a));//11

function a(x) {
    return (y) => x + y;
}
//a(2)(4) //(y) => 2 + 4; 
//console.log(a(2)(4));

function a1(x) {
    return function (x) {
        return function (z) {
            return x + y + z;
        };
        
    };
    
}
// console.log(a1);
// console.log(a1(2));
// console.log(a1(2)(4));
// console.log(a1(2)(4)(9));//15

function Cat() {
    let numLives = 7;
    let name = "Jack";

    this.age = 5;
    this.getName = () =>{
        return name;
    };
    this.getAge = () =>{
        return this.age;
    };
    this.CatDies = () => {
        numLives--;
    }
    this.isDead = () =>{
        return numLives <=0;
    };
    
};
let a3 = new Cat();
a3.CatDies();
a3.CatDies();
a3.CatDies();
a3.CatDies();
console.log(a3.isDead());//false
a3.CatDies();
a3.CatDies();
a3.CatDies();
console.log(a3.isDead());//true
console.log(a3.getName());//Jack
a3.age = 99;
console.log(a3.age);//99

var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split("");
arr2.push(arr3);
console.log("array 2 : length = " + arr2.length + "last = " + arr2.slice(-1));