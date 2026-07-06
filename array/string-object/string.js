let country = "my conuntry is bangladesh";
let river = "podma is our national river";


console.log(country.toUpperCase());
console.log(river.toLowerCase());

// slice 
const fullName = "shimuakterahsa";
const post = fullName.slice(3, 7);
console.log(post);

// split
let sentence = " i am a student of university south asia";
console.log(sentence.split(" "));
console.log(sentence.split(" a "));

let friendsName = 'rahim , karim, hakim, jobbar , rabbi';
let friends = friendsName.split(" , ");
console.log(friends);

// join
let studentCollection = ["suma", "rafiza", "sajjad", "shimu", "sujon"];
console.log(studentCollection.join(" | "));

// concat 
let firstName = "Shimu";
let lastName = "Akter";
// const fullNames = firstName + lastName;
// const fullNames = firstName + " " + lastName;
const fullNames = firstName.concat(" ").concat(lastName);

console.log(fullNames);