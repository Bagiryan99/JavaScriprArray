let user = {};
user.name = "Luiza";
user.age = 20;
// console.log(user.name);
// console.log(user.age);

let obj = {
    firstName: "Rouben",
    lastName: "Avagyan",
    age: 25
};
//console.log(obj);

let person ={
    name: "David",
    age: 20,
    adress: {
        city: "Yerevan",
        street: "Bagramyan",
        aprtNum: 44
    },
    friends: [
        {
        name: "Sara",
        age: 24
    },
    {
        name: "Meri",
        age: 26

    }
]
}

//console.log(person)

let firstPart = "likes";
let userInfo = {
    name: "Seda",
    age: 30,
    [firstPart + "javascript"]: true,
}
//console.log(userInfo);

let f = "likes";
let u = {
    name: "Seda",
    age: 30,
    [f]: true,
}
//console.log(u[f]);

let userr = {
    name: "Sara",
}
//console.log(userr);

userr.age = 30;
//console.log(userr);

userr.adresses ={
    city: "Canada",
    aprtNum: 44,
}
//console.log(userr);


// delete
let personn ={
    name: "Mariam",
    age: 55,
}
//console.log(personn);
delete personn.age;
//console.log(personn);

let lesson ={
    name: "JavaScript",
    lecturer: "Zoya",
    age: 20
}
let lesson1 = Object.assign({}, lesson);
lesson.age = 25;

//console.log(lesson);
//console.log(lesson1);

let myCar = new Object();
myCar.model = "Toyota";
myCar.year = 2018;

myCar["model"] = "Toyota";
myCar["year"] = 2018;
console.log(myCar);