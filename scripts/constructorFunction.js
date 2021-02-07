function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.displayInfo = function(){
    return "Hello" +  " "  + this.name;
    };
    
}
var user1 = new User("Inna", 20);
//console.log(user1);
//user1.displayInfo();

function Car(mName, mYear) {
    this.name  = mName;
    this.year = mYear;
    this.getCarInfo = function() {
        return "Toyota: " + this.name + "  2020: " + this.year;
        
    };
    
};
function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.driveCar = function (car) {   
        //console.log(this.name + "drives a car " + car.name)
    };
    this.displayInfo = function(){
       // console.log("Name: " + this.name + "; Age: " + this.age);
    };
};
var tom = new User("Luiza ", 26);
tom.displayInfo();
var bently = new Car("Bently", 2004);
tom.driveCar(bently);

class Users{
    constructor(name, age, isWorking){
        this.name = name;
        this.age = age;
        this.isWorking = isWorking;
        this.sayHello = function() {
            return "Hello" + " " + this.name;
            
        };
    }
}
var user1 = new Users("Anna", 20, true);
console.log(user1);

//Instanceof operator
var user = new User("Sofia", 20);
var isUser = user instanceof User;
var isCar =  user instanceof  Car;
//console.log(isUser);    // true
//console.log(isCar);     // false