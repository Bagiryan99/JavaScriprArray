//Function Declaration

// function showMessege  () { 
//  console.log("Hello")
// }
// showMessege();

//Global varibale 
// let message;
// function showMessege (){ 
//     //local variable
//      message = "Hello world"; 
// }
// showMessege();
// console.log(message);

//Parameters (arguments)

// function CulcSum (numOne, numTwo){
//     console.log(numOne);
//     console.log(numTwo);

//     let numSum = numOne + numTwo;
//     console.log(numSum);
// }
// CulcSum( 7, 8);

// function CulcSum (numOne, numTwo){
//     let numSum = numOne + numTwo;
//     return numSum;
// }
// let funcRezult = CulcSum(1, 10);
// console.log(funcRezult);

//Function Expression
let showMessege = function() {
    console.log("Hello")  
};
showMessege();


let getMessage = function (text, name) {
    let message = text  + ', ' + name;
    return message;
    
}
console.log(getMessage("Hello", "Ann"));

//setTimeout and setInterval

function Showmessage(text, name ) {
    console.log(`${text}, ${name}`);
    
}
setTimeout(Showmessage, 3000, "Hello", "Ann");
//setInterval(Showmessage, 30, "Hello", "Ann");

function display(x = 5, y = 10) {
    let z = x * y;
    console.log(z);
    
}
display();//50
display(10, 2);//20
display(3);//30