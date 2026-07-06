function add(number) {
    console.log("This is my mumber", number);
}
add(34);
add(24);
add(90);

function dubble(num) {
    let dub = num * 6;
    console.log(num, "to continue the rule .............", dub);
}
dubble(14);


function difference(num3, num4) {
    let diff = num3 - num4;
    console.log(num3, num4, "difference is ----", diff);
}
const fatherAge = 40;
const myAge = 14;
difference(fatherAge, myAge);

// inch to feet 
function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}
const totalResult = inchToFeet(86);
console.log("The Result is.......", totalResult);

// inch to feet integer convert
function inchToFeets(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaing = inch % 12;
    const result = feetNumber + " ft " + inchRemaing + " inch .";
    return result;
}
const totalResults = inchToFeets(58);
console.log(totalResults);


// mile to kilometer
function mileToKilometer(mile) {
    const kilo = mile * 1.609344;
    return kilo.toFixed(2);
}
console.log(mileToKilometer(20));

// kilometer to mile
function kiloToMile(kilo) {
    const mile = kilo * 0.621371192;
    return mile.toFixed(2);
}
console.log(kiloToMile(65));

// simple leap year 
function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}
const leapYear = isLeapYear(2057);
console.log(leapYear);

// critial leap year 
function isLeapYear1(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    } else if (year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
const leapYear1 = isLeapYear1(2000);
console.log(leapYear1);


// array with avarage number
function oddAvargeNumber(numbers) {
    for (const number of numbers) {
        // console.log(number);
        if (number % 2 === 1) {
            console.log(number);
        }
    }

}
const numbers = [23, 45, 90, 67, 44, 87, 95, 100];
const avarge = oddAvargeNumber(numbers);
console.log("Avarge the odd number : ", avarge);

// remove duplicate item in array 
const biriyaniLover = ['abul', 'babul', 'kabul', 'sabul', 'abul', 'babul'];
const numbers1 = [12, 45, 64, 89, 3, 12, 90, 64];

function noDuplicate(array) {
    // console.log(array);
    const unique = [];
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}
const uniqueArray = noDuplicate(biriyaniLover);
const uniqueArray1 = noDuplicate(numbers1);
console.log(uniqueArray);
console.log(uniqueArray1);

//varities math funcion 
const min = Math.min(28, 58, 9, 2098, 30, 900);
console.log(min);
const max = Math.max(28, 58, 9, 2098, 30, 900);
console.log(max);
const pi = Math.PI;
console.log(pi);
const floor = Math.floor(22.9056);
console.log(floor);
const ceil = Math.ceil(5.903);
console.log(ceil);
const round = Math.round(43.65343);
console.log(round);
const random = Math.random(90.4567);
console.log(random);

// A Simple introduction to JS Date and time
const today = new Date();
console.log(today);
const date = new Date('2025 09 12');
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getMonth() + 1);

//  Swap variable, swap without temp, destructing

let a = 8;
let b = 25;
console.log(a, b);
a = b;
b = a;
console.log(a, b);

// ************   problem solving   ***********
// Task - 1:
// Write a function to convert temperature from Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius) {
    const fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
}
const fahrenheitTotalResult = celsiusToFahrenheit(29);
console.log(fahrenheitTotalResult);

// Write a function to convert temperature from Fahrenheit to  Celsius.
function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}
const celsiusTotalResult = fahrenheitToCelsius(15);
console.log(celsiusTotalResult);


// Task - 2:
// You are given an array of numbers.Count how many times the a number is repeated in the array.
//  sample - input: numbers = [5, 6, 11, 12, 98, 5]
// find: 5
// output: 2
// sample - input:
// numbers = [5, 6, 11, 12, 98, 5]
// find: 25
// output: 0
const numbers2 = [5, 6, 11, 12, 98, 5];
const find = 5;
let count = 0;
for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] === find) {
        count++;
    }
}
console.log(count);

// Task - 3:
// Write a function to count the number of vowels in a string.
function countNumber(str) {
    let count = 0;
    const vowels = "aeiou";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

console.log(countNumber("shimuahsa"));

// Task - 4:
// Write a function to find the longest word in a given string.
//  sample - input: I am learning Programming to become a programmer
// sample - output: Programming
function findLongestWord(sentence) {
    const words = sentence.split(" ");
    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

const result = findLongestWord(
    "I am learning Programming to become a programmer"
);

console.log(result);

// Task - 5:
// Generate a random number between 10 to 20.
const randomNumber = Math.floor(Math.random() * 11) + 10;
console.log(randomNumber);