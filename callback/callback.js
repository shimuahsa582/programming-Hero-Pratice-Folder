function multiply(a, b) {
    a = a + 9;
    b = b + 4;
    const mult = a * b;
    return mult;
}
const x = 9;
const y = 5;

const result = multiply(20, 45);
console.log(result);


// 
function multiply1(a, b) {
    a = a + 9;
    b = b + 5;
    console.log(a, b);
}
let p = 30;
let q = 15;
multiply1(p, q);
console.log(p, q);

// 
let c = 10;

function test(a) {
    a = 100;
    console.log("Inside:", a);
}

test(c);

console.log("Outside:", c);

// 
const person1 = { name: "shimu", salary: 50000 }
const person2 = { name: "sadia", salary: 6000 }
function moneyCount() {
    const price = person1.salary = 0;
    const price2 = person2.salary / 2;
    const totalMoney = person1.salary + person2.salary;
    return totalMoney;


}
moneyCount();

// arguments
function add(a, b) {
    console.log(arguments);
    const params = [...arguments];
    console.log(params);
}
add(25, 70, 60, 40, 10);

