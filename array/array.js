let numbers = [34, 89, 99, 28, 46, 90];
console.log(numbers);

// length keyword cheek how much element store in array 
let numbers1 = [34, 89, 99, 28, 46, 90];
console.log(numbers1.length);

// koto number index a kon upadan aca seita bahir kore 
let num = ["shimu", "sadia", "sajjad", "rafiza", "abdul"];
console.log(num[2]);

// array te notun kore man set kore / update kore arrayr man
numbers[4] = "kobita";
console.log(numbers);

// push keyword add a new value in array and is also set the value in last side 
let name = [" megna", "jomuna", "shetolokkha"];
console.log(name);
name.push("kornofuli", "burigongga");
console.log(name);

// pop keyword delete value in last side
let fruits = ["banana", "mango", "papaya", "guava", "lichu"];
console.log(fruits);
fruits.pop();
console.log(fruits);

// includes keyword
let place = ["savar", "dhaka", "nobinogor", "kalampur"];
console.log(place);
console.log(place.includes("savar"));
console.log(place.includes("ahsulia"));

if (place.includes("dhaka")) {
    console.log("cholo jai");
} else {
    console.log("ami jabo na ");
}
// locate of the value in array
console.log(place.indexOf("nobinogor"));
console.log(place.indexOf("tongi"));

// **************** problem solving *********************
// 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array

let fruitss = ["banana", "anggur", "orange", "lotkon", "boroi"];
console.log(fruitss[3]);
fruitss[2] = "jambura";
console.log(fruitss);


// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

let touristDestination = ["bandorban", "khulna", "cox-bazar"];
touristDestination.push("rajsahi");
// console.log(touristDestination);
touristDestination.push("rongpur", "dinajpur");
// console.log(touristDestination);
touristDestination.pop();
console.log(touristDestination);


// 3. Checking Array Membership with ‘includes’
// Instructions:
// Create an array of books containing different book.
// Use the includes method to check if the array contains a javascript book.
// Print a message to the console indicating whether the element is present in the array or not.

let book = ["bangla", "math", "javascript", "python"];
if (book.includes("javascript")) {
    console.log("yes it's here");
} else {
    console.log("no here is nothing");
}


// 4. Checking if it's an Array
// Instructions:
// Create different variables, each containing either an array or a non - array value.
// Now use isArray to check if each variable is an array.
// Print a message to the console indicating whether each variable is an array or not.
let toy = ["football", "racket", "aroplan"];
let nothing = "[]";
let whether = [56, 90, 59];
let icecream = "ice  cr e a m";
console.log(Array.isArray(toy));
console.log(Array.isArray(nothing));
console.log(Array.isArray(whether));
console.log(Array.isArray(icecream));



// array with for loop and while loop
const frut = ["kola", "benana", "lichu", "pepe", "komola"];
for (let i = 0; i < frut.length; i++) {
    console.log(i);
    console.log(frut[i]);
}

let k = 0;
while (k < frut.length) {
    console.log(frut[k]);
    k++;
}

// reverse
const num1 = [29, 50, 18, 90, 100];
const reversed = [];
for (let j = 0; j < num1.length; j++) {
    // console.log(num1[j]);
    reversed.unshift(num1[j]);
}
console.log(reversed);

for (const n of num1) {
    reversed.unshift(n);

}
console.log(num1);






















