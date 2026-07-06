
// class method 
class Player {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.location = "Bangladesh";
        // console.log("this is contructor method", name);
    }
    goal() {
        console.log("score a goal");
    }
    getTeamName() {
        // console.log("My team member");
        return "My team member";
    }
}

const player1 = new Player("Messi", 30);
player1.goal();
player1.getTeamName();
console.log(player1);

class Fruits {
    constructor(name, test) {
        this.name = name;
        this.test = test;
    }
    sweetFruits() {
        console.log("Mango is a sweeet fruit");
    }
}

const fruits1 = new Fruits("Lichu", "tok and misty");
fruits1.sweetFruits();
console.log(fruits1);

// inheritence  program
// class Dog {
//     constructor(name, breed) {
//         this.name = name;
//         this.breed = breed;
//     }
//     eat() {
//         console.log(`${this.name} is eating`);
//     }
//     braking() {
//         console.log(`${this.breed} is braking`);
//     }
// }
// class Brid {
//     constructor(name, breed, age) {
//         this.name = name;
//         this.breed = breed;
//         this.age = age;
//     }
//     eat() {
//         console.log(`${this.name} is eating`);
//     }
//     fly() {
//         console.log(`${this.breed} is braking`);
//     }
// }
// class Fish {
//     constructor(name, breed, color) {
//         this.name = name;
//         this.breed = breed;
//         this.color = color;
//     }
//     eat() {
//         console.log(`${this.name} is eating`);
//     }
//     skinTone() {
//         console.log(`${this.breed} is bright`);
//     }
// }
// const dog1 = new Dog("coffe", "deshi");
// const brid = new Brid("grass", "tuntuni");
// const fish = new Fish("kochuripana", "fair");

// dog1.eat();
// dog1.braking();
// brid.eat();
// brid.fly();
// fish.eat();
// fish.skinTone();
// console.log(dog1);
// console.log(brid);
// console.log(fish);

// 
class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
    braking() {
        console.log(`${this.breed} is braking`);
    }
}
class Brid extends Dog {
    constructor(name, breed, age) {
        super(name, breed);
        this.age = age;
    }
    fly() {
        console.log(`${this.age} is 1`);
    }
}
class Fish extends Brid {
    constructor(name, breed, color) {
        super(name, breed);
        this.color = color;
    }
    skinTone() {
        console.log(`${this.color} is bright`);
    }
}
const dog1 = new Dog("coffe", "deshi");
const brid = new Brid("grass", "tuntuni", 1);
const fish = new Fish("kochuripana", "fair", 1, "yellow");

dog1.eat();
dog1.braking();
brid.eat();
brid.fly();
fish.eat();
fish.skinTone();
console.log(dog1);
console.log(brid);
console.log(fish);