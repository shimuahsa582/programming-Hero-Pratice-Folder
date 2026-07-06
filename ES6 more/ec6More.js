const student = {
    name: "shimu",
    id: 1,
    address: {
        village: 'dhaka',
        code: 6740,
    },
    family: {
        mother: 'aklema',
        father: 'minto',
    }
}
console.log(student);
console.log(student.id);
console.log(student.address.village);
// console.log(student.address.family?.father);

// arrow function call korar process 
const numbers = [20, 30, 54, 90, 15, 40];
const dubbled = [];
for (const num of numbers) {
    const result = num * 3;
    dubbled.push(result);
}
console.log(dubbled);

//  arrow function call korar process 
const num = [30, 50, 90, 20, 10, 51, 33, 12, 87];
const dubbleIt = x => x * 2;
const dubble = num.map(dubbleIt);
console.log(dubble);

//  arrow function call korar process 
const n = [40, 20, 65, 90, 20, 10];
const dub = n.map(y => y * 2);
const squre = n.map(x => x * x);
const fiveTime = n.map(z => z * 5);

console.log(dub);
console.log(squre);
console.log(fiveTime);

// 
const friends = ["shimu", "ahsa", "rafiza", "sajjad"];
const friendsLength = friends.map(name => name.length);
console.log(friendsLength);
const firstLatter = friends.map(name => name[0]);
console.log(firstLatter);
const lowerLatter = friends.map(name => name.toUpperCase());
console.log(lowerLatter);

// filter kora 
const number2 = [12, 35, 90, 65, 70, 50];
const maxNumber = number2.filter(num => num < 35);
console.log(maxNumber);

const evenNumber = number2.filter(num => num % 2 === 0);
console.log(evenNumber);

// 
const products = [
    { name: "latop", price: 50000, degnation: "manager" },
    { name: "tv", price: 40000, degnation: "helper" },
    { name: "phone", price: 8000, degnation: "supervisor" },
    { name: "charger", price: 6000, degnation: "pion" },

]
const names = products.map(nm => nm.length);
console.log(names);

const bigPrice = products.filter(price => price.price < 40000);
console.log(bigPrice);

const findout = products.find(designtion => designtion.degnation.length > 8);
console.log(findout);
