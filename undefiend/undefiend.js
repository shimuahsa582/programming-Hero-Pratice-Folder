// undefiend value

let money;
console.log(money);

const person = {
    name: "shimu",
    age: 56,
}
console.log(person.email);

const fruit = [19, 90, 22, 65];
console.log(fruit[6]);

function add(num1, num2) {
    const sum = num1 + num2;
}
const result = add(20, 90);
console.log(result);


function greet(name) {
    console.log(name)
}
greet();

// Different Truthy and Falsy Values in JavaScript
let data;
data = 0;
data = true;
data = false;
data = {};
data = [];
data = '';
data = " ";
data = undefined;
data = null;
if (data) {
    console.log("the data is truthy ");
} else {
    console.log(data, "is false");
}

//  double equal (==) vs triple equal (===), implicit conversion
console.log(2 == 2);
console.log(1 === 2);
console.log(2 === '2');
console.log(1 == 2);
console.log(false === 0);
console.log(true === 1);
console.log(['']);
console.log({});
console.log(undefined === null);

let age = "10";
if (age === 10) {
    console.log("Adult");
} else {
    console.log("No Adult");
}

let price = 100;
if (price === 100) {
    console.log("This price is valid");
}
let price1 = "100";
if (price1 === 100) {
    console.log("This price is valid");
} else {
    console.log("This price is not valid");
}

//  Block scope global scope, simple understanding of Hoisting
if (true) {
    let data = 50;
    console.log("this number is block scope", data);
}
console.log(data);