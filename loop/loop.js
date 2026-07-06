const numbers = [45, 59, 90, 40, 39, 12, 60, 50];
// console.log(numbers);
for (const num of numbers) {
    console.log("this is number of :", num);
}


const fruits = ["mango", "orange", "apple", "guava", "painapple", "bitrut"];
for (const fruit of fruits) {
    console.log("fruits name is :", fruit);
}

const numbers1 = 9;
if (numbers1 > 8) {
    console.log("logic mile geca");
}

// while loop
let numb = 1;
while (numb < 12) {
    console.log(numb);
    numb++;
}

let n = 1;
let sum = 0;
while (n <= 15) {
    // console.log(n);
    sum = sum + n;
    console.log("sum:", n);
    n++;
}

/***
"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
 */
let day = 1;
while (day <= 60) {
    console.log("Day", day + ":", "I will invest 6 hours everyday.");
    day++;
}


/***
Subtask-1:
Find all the odd numbers from 61 to 100.
 */
let oddNumber = 61;
while (oddNumber <= 100) {
    if (oddNumber % 2 === 1) {
        console.log("odd:", oddNumber);
    }
    oddNumber++;
}

/*
Subtask-2:
Find all the even numbers from 78 to 98.
 */
let evenNumber = 78;
while (evenNumber <= 98) {
    if (evenNumber % 2 === 0) {
        console.log("even number:", evenNumber);
    }
    evenNumber++;
}
/***
Subtask-1:
Display sum of all the odd numbers from 81 to 131.
 */
let odd = 81;
let sum1 = 0;
while (odd <= 131) {
    if (odd % 2 === 1) {
        sum1 = sum1 + odd;
        console.log("sum odd number:", sum1);
    }
    odd++;
}
/***
Subtask-2:
Display sum of all the even numbers from 206 to 311.
 */
let even = 206;
let sum2 = 0;
while (even <= 311) {
    if (even % 2 === 0) {
        sum2 = sum2 + even;
        console.log("sum of the even number:", sum2)
    }
    even++;
}


/***
As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5
 */
let number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}

/***
Implement a countdown timer that counts down from 21 to 15.
 */
let countdown = 21;

while (countdown >= 15) {
    console.log(countdown);
    countdown--;
}



// for loop program 
// for (i = 1; i < 30; i++) {
//     console.log(i);
// }
// 
// for (j = 2; j < 20; j++) {
//     if (j % 2 === 0) {
//         console.log("it's even number:", j);
//     }
// }
// for (k = 1; k < 50; k++) {
//     if (k % 2 === 1) {
//         console.log("it's odd number:", k);
//     }
// }
// 
// for (z = 1; z < 50; z++) {
//     if (z % 3 === 0 || z % 5) {
//         console.log(z);
//     }
// }

// for (l = 1; l < 12; l++) {
//     if (l % 2 === 1) {
//         break;
//     }
//     console.log("odd", l);
// }

// for (m = 0; m < 10; m++) {
//     if (m % 2 === 0) {
//         continue;
//     }
//     console.log("even", m);
// }

//
/***
"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
 */
for (i = 1; i <= 60; i++) {
    console.log("I will invest 6 hours in everyday", i);
}

/***
Subtask-1:
Find all the odd numbers from 61 to 100.
 */
for (i = 61; i < 100; i++) {
    if (i % 2 === 1) {
        console.log("Odd number is : ", i);
    }
}
/***
Subtask-2:
Find all the even numbers from 78 to 98.
 */
for (i = 78; i < 98; i++) {
    if (i % 2 === 0) {
        console.log("Even number is:", i);
    }
}
/***
Subtask-1:
Display sum of all the odd numbers from 91 to 129.
 */
let oddSum = 0;
for (i = 91; i < 129; i++) {
    if (i % 2 === 1) {
        oddSum = oddSum + i;
    }
    console.log("odd sum number is :", oddSum);
}
/***
Subtask-2:
Display sum of all the even numbers from 51 to 85.
 */
let evenSum = 0;
for (i = 51; i < 85; i++) {
    if (i % 2 === 0) {
        evenSum = evenSum + i;
    }
    console.log("even sum number is :", evenSum)
}
/***
Generate a multiplication table for number 9
 */
let multiNumber = 9;
for (i = 1; i < 11; i++) {
    console.log(multiNumber + " x " + i + " = " + (multiNumber * i));
}
/***
Implement a countdown timer that counts down from 81 to 65.
 */
for (i = 81; i >= 65; i--) {
    console.log(i);
}
// let countDownTimer = 81;
// for (countDownTimer = 81; countDownTimer >= 65; countDownTimer--) {
//     console.log(countDownTimer);
// }
/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/
for (i = 1; i < 40; i++) {
    if (i % 2 === 1) {
        continue;
    }
    console.log("use to continue keyword", i);
}

/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/


/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/

/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/