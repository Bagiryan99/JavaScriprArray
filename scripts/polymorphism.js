//Create Animal class - Parent
class Animal {
    speak (){
        return 'Sound';
    }
}
//create child class Dog inherit from Animal
class Dog extends Animal{
    
}
//create child class Cat inherit from Animal
class Cat extends Animal{
   
}

const Miki = new Dog();
const Oliver = new Cat();
//console.log(Miki.speak());
//console.log(Oliver.speak());

var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split("");
arr2.push(arr3);
console.log("array 2 : length = " + arr2.length + "last = " + arr2.slice(-1));