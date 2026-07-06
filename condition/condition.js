const humanWeight = 600;

if (humanWeight > 900) {
    console.log("That is not right to compare with their both");
} else {
    console.log("control your habit ");
}
//
const salary = 3000;
const height = 43;
const isCar = false;

if (salary > 3001 && height == 40) {
    console.log("cholo gurte jai");
} else {
    console.log("jaor vara nai");
}
// nested if else program
const money = 100;
if (money > 300) {
    console.log("tui moira ja");
} else {
    if (money > 150) {
        console.log("vikkha korba naki");
    } else {
        if (money > 10) {
            console.log("abar kina dao");
        } else {
            console.log("chole jaoooooooooooo");
        }
    }
}
// ternary program
// normal program
const age = 15;
if (age >= 18) {
    console.log("chole vote dite jai");
} else {
    console.log("akhono boyos hoy ni");
}
// syntex : condition? do something when true : do something when flase
age >= 11 ? console.log("vote diba?") : console.log("tomar boyos hoy ni");

//
let price = 20;
const isLeader = false;
if (isLeader === true) {
    price = 0;
} else {
    price = price + 200;
}
console.log(price);

//
let isBCS = true;
if (isBCS) {
    console.log("Or sathe jor kore hole o beay deay dao");
} else {
    console.log("tumi abar try koro");
}

let mango = true;
//  ! thakle bujay vaiable ar man ta flase kore dibe
if (!mango) {
    console.log("am ta vision moja");
} else {
    console.log("arekto pakle khaite paro");
}

let orange = false;
//  !! thakle bujay vaiable ar man ta true kore dibe
if (!!orange) {
    console.log("orange ta vision moja");
} else {
    console.log("orange pakle khaite paro");
}

/***
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
const burger = 501;
if (burger > 500) {
    console.log("you will get a free coke");
} else {
    console.log("you will get 30 taka's coke");
}

/*** 
BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

/***
Grade Calculator
Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
const grade = 70;
if (grade >= 90 && grade <= 100) {
    console.log("A");
} else if (grade >= 80 && grade <= 89) {
    console.log("B");
} else if (grade >= 70 && grade <= 79) {
    console.log("C");
} else if (grade >= 60 && grade <= 69) {
    console.log("D");
} else if (grade >= 0 && grade <= 59) {
    console.log("F");
}

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
const myGrade = 80;
const myFriendsNumber = 70;
if (myFriendsNumber > 80) {
    console.log(" go for a lunch");
} else {
    if (myFriendsNumber < 80 || myFriendsNumber >= 60) {
        console.log('good luck next time');
    } else if (myFriendsNumber < 60 || myFriendsNumber >= 40) {
        console.log(' keep your friend s message unseen.');
    }
    else if (myFriendsNumber < 40) {
        console.log("block your friend");
    }
}






/***
you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
