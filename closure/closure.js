//  Explore about Closure
function counter() {

    let count = 0;
    function innerFunction() {
        console.log("call the inner function form the outside");
    }
    return innerFunction;
}
const output = counter();
console.log(output);


//  Explore about Closure
function joinUs() {
    let counts = 10;
    return function () {
        counts = counts + 1;
        console.log("inner function call the function", counts);
    }
}
const outputFunction = joinUs();
outputFunction();
outputFunction();
outputFunction();
console.log("************************************");

//  Explore about Closure
function userFunction(user) {
    let count = 30;
    return function () {
        count = count + 1;
        console.log("inner function call the user", user, count);
    }
}
const outputUser = userFunction("habib");
outputUser();
outputUser();
outputUser();
console.log("===============================");

const userRahim = userFunction("rahim");
userRahim("rahim");
userRahim("rahim");
userRahim("rahim")
console.log("-----------------------------");

const userKarim = userFunction("karim");
userKarim();
userKarim();
userRahim();

//  Explore about Closure
function bankAccount() {
    let balance = 500;

    return {
        deposit(amount) {
            balance += amount;
            console.log(balance);
        },

        withdraw(amount) {
            balance -= amount;
            console.log(balance);
        }
    };
}

const account = bankAccount();

account.deposit(100);
account.withdraw(50); 
