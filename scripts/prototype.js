function User(name, age, isWorking) {
  this.name = name;
  this.age = age;
  this.isWorking = isWorking;
  this.sayHi = function () {
    console.log("Hi" + this.name);
  };
 
}


User.prototype = {
    printAge (){
      console.log(this.age);
    },
    lastName: "Hello",
};



let  user1 = new User("Hello", 30, true);
let  user2 = new User("World" , 20, false);
//console.log(Object.getPrototypeOf(user1));
//console.log(user1.__proto__.__proto__);
console.dir(User);
console.dir(Object.__proto__);
//console.log(User.prototype);
user1.sayHi();
user1.printAge();
user2.printAge();
//console.log(user1);

// console.log(user1.__proto__ === User.prototype);
// console.log(user1.__proto__ ===User.__proto__);

let user3 = Object.create(user1);
//console.log(user3);

let obj = {
   a: 5,
   b: 8
}
 Object.defineProperty(obj, 'sum', {
   get: function () {
   return this.a + this.b;
 },
   set: function(num){
  num = 20;
  this.b = num;
   },
})
 //console.log(obj.sum);
 //console.log(obj.b);

 let age = 18;
 console.log(age.prototype === Number.prototype);// false
 console.log(age.__proto__ === Number.prototype);// true

 console.log( ({}).prototype === ({}.__proto__));//false


 
 const person = new Object({
  name: "Mari",
  age: 20,
  greet: function () {
    console.log("Greet!");
  }
})
 Object.prototype.sayHello = function(){
   console.log('Hello');
 }
 const a = Object.create(person);
 a.name = "Anna";