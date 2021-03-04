//Create Animal class - Parent
class Animal {
    constructor(type, numberOfLength, sound){
         this.type = type;
         this.numberOfLength = numberOfLength;
         this.sound = sound;
    }
    speak (){
        return this.sound;
    }
}
//create child class Dog inherit from Animal
class Dog extends Animal{
     constructor(type, numberOfLength, sound, canBring){
         super(type, numberOfLength, sound);
         this.canBring = canBring;

     }
}
//create child class Cat inherit from Animal
class Cat extends Animal{
    constructor(type, numberOfLength, sound, canClimbTree){
        super(type, numberOfLength, sound);
        this.canClimbTree = canClimbTree;

    }
}

const Miki = new Dog('domestic', 4, 'Huf', true);
const Oliver = new Cat('domestic', 4, 'Maw', true);
console.log(Miki.speak());
console.log(Oliver.speak());