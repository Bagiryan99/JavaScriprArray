var fruits = ["pear", "apple", "orange", "banana"];
//console.log(fruits);

var fruits = [ "grapes", "lime", "watermelon", "peach"];
//console.log(fruits[1]); //lime
var fruits1 = fruits[2]; //watermelon
//console.log(fruits1);    //watermelon

var fruits = ["strawbery", "coconut", "avocado"];
//console.log(fruits[4]);//undefined

var fruits = ["blackberry", "kiwi", "mango", "plum"];
//console.log(fruits[3]);//plum
fruits[1] = "fig";
//console.log(fruits[1]);//fig

var objects = ["Mariam", 21, true, 5.36, false]
//console.log(objects);

//spread operator
var citisArmenia = ["Erevan", "Gyumri", "Armavir"];
var citisEurope =["Paris", "Berlin", "Praga"];
//console.log( ...citisArmenia);
//console.log(...citisEurope)
//console.log(...citisEurope, ...citisArmenia);
//console.log(...citisEurope, "Canada", ...citisArmenia);

var citisArmeniawithPopulation ={
    Erevan: 3,
    Gyumri: 2,
    Armavir: 1
}
var citisEuropewithPopulation ={
    Paris: 5,
    Berlin: 4,
    Praga: 3
}
//console.log(...citisEuropewithPopulation);error
//console.log({...citisEuropewithPopulation});
//console.log({...citisEuropewithPopulation,... citisArmeniawithPopulation});

//Multidimensional arrays
var number = [1, 2, 3, 4, 5]
var number1 = [[6, 7, 8], [9, 10, 11]]
// console.log(number);
// console.log(number1);
// console.table(number1);

var user =[
    ["Inna", 20, true],
    ["Mariam", 25, false]
]
//console.log(user);//[ [ 'Inna', 20, true ], [ 'Mariam', 25, false ] ]
//console.log(user[0]);//[ 'Inna', 20, true ]
//console.table(user[1]);

//join () method concatenates all the elements of an array into one string:
var b = [1, 2, 3, 4];
//console.log(b.join());
//console.log(b);
var fruit = ["lime", "orange", "pear"];
var fruitString = fruit.join(", ");
//console.log(fruitString);

//method Reducen
var a = [11, 2, 3, 5];

//prevValue =  calculated value
//prev = a[0]
 var b = a.reduce(function(prevValue, currentValue, index) {
//    console.log('prevValue = '+prevValue);
//    console.log('currentValue = '+currentValue);
//    console.log('index:' + index);
   return prevValue + currentValue;
 });
//console.log(b);
 

// reduceRight method
var b = a.reduceRight(function(prevValue, currentValue, index) {
    // console.log('prevValue = '+prevValue);
    // console.log('currentValue = '+currentValue);
    // console.log('index:' + index);
    return prevValue + currentValue;
  });
// console.log(b);

//reverse () method
var fruit = [ "apple", "lime", "orange", "banana"];
fruit.reverse();

for (var i = 0; i < fruit.length; i++){
    //console.log(fruit[i]); 
}

//sort() method

var fruit = [ "apple", "lime", "orange", "banana", "limon", "pear"];
fruit.sort();

for (var i = 0; i < fruit.length; i++){
    console.log(fruit[i]); 
}
