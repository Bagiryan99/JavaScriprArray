function sum(...numbers) {
    return numbers.reduce(function (previous, current) {
        return previous + current;
        
    });
}
console.log(sum(1,4,8)); 