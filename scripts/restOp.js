function sum(...numbers) {
    return numbers.reduce(function (previous, current) {
        return previous + current;
        
    });
}
console.log(sum(1,4,8)); 

var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split("");
arr2.push(arr3);
console.log("array 2 : length = " + arr2.length + "last = " + arr2.slice(-1));