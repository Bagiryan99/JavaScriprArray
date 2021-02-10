//'use strict'; //error
//a = 5;
//'use strict';
function SomeFunc() {
    //console.log(this);
    
}
//SomeFunc();// undefined

function f1() {
     //'use strict'; //TypeError: Cannot set property 'myVaribale' of undefined
    this.myVaribale = 120;
    
}
//f1();
//console.log(myVaribale);

const person ={
    name: "Mariam",
    age: 20,
}
const otherPerson = Object.freeze(person);
otherPerson.name = "Sara";
console.log(otherPerson);