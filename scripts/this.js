//function foo() {
    
 //}
//console.log(this);//refer. to window/global object
// console.log(this === window); //true
//"use strict";

function foo() {
 //console.log(this);// undefined if strict mode else global object
    
}
foo();

//this in arrow function alwes referce to global object/window
const bar = ( ) => console.log(this);
//bar();


const obj = {
    name: "Anna",
    age: '22',
    display() {
        //console.log(this.name);   
    } ,
    sayHi: function () {
        //console.log(this.age); 
    }
}
//obj.display();// Anna
//obj.sayHi(); //22

const obj2 ={
    name: "Rafayel",
    age: '25',
    display: () => {
       // console.log(this.age);
    }
}
//obj2.display();// undefined with arrow function

const obj4 = {
 name: "Sofa",
 display(){
     //console.log(this.name);
 },
};

const otherObj4 = {name: "Alyona"};
otherObj4.sayHello =  obj4.display;
otherObj4.sayHello();

function Person(name, age, isWorking) {
    this.name = name;
    this.age = age;
    this.isWorking = isWorking;
    this.sayHello = function (){
      // console.log(this);
    }
 }
const person1 = new Person("Anna", 22, false);
const person2 =  new Person("Ruben", 25, true);
//person1.sayHello();
//person2.sayHello();

let person = {
    name: "Anna",
    age: 20,
    printName: function () {
        console.log(this.name);
    }
}
let p = person;
//p.printName();



function zoo() {
    console.log(this);
}
// zoo();
let pers = {
    name: "Zoya",
    age: 20,
};
 
//pers.foo = zoo;

let pers1 = {
    name: "Inna",
    age: 20,
};

//pers1.foo = zoo;

// pers.foo();
// pers1.foo();

"use strict"
function zooo(txt) {
    console.log(txt + " " + this.name);
    
}

let user = {
    name: "Sara",
    age: 20
};

// function bind(func, context) {
//     return function (...args) {
//         return func.apply(context, args);
//     };
// }
// const f = bind(zooo, user);
// f("hello world");
//zooo.call(user, "My name is");
//zooo.apply(user, ["My name is"]);
const f = zooo.bind(user);
//f("Hello");


function User() {
    this.name = "Maria"
}

const a = new User();
//console.log(a.name);

function func(a) {
    alert(this);
    alert(a);
  }
  
  const obj = {
    func: func
  };
  
  // 1. obj.func(5); // this = obj
  
  // 2. func(5); // this = window/undefined(use strict)
  
  // 3. func.apply(obj, [5]); // this = obj
  //     func.call(obj, 5);      // this = obj
  
  // 4. const boundFunc = func.bind(obj);
  //     boundFunc(5);
  
  // 5. new func(5); // this = {}