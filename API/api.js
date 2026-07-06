const persons = {
    name: "shimu",
    fruit: "dalim",
    age: 30,
    salary: 20000,
    friends: ["ahsik", "robin", "sajjad"],
    address: "savar",
}
console.log(persons);
// convert to object in string /notaion
const personJson = JSON.stringify(persons);
console.log(personJson);

// convert to string in object
const parseJson = JSON.parse(personJson);
console.log(parseJson);


// call the api with fetch function
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => { console.log(data) })

const resut = fetch("https://jsonplaceholder.typicode.com/users")
console.log(resut);

// call the api fetch function eith clickable button
const userInformation = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => { console.log(data) })
}


// 
const loadDataPost = () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            displayPost(json)
        })
}

const displayPost = (posts) => {
    // console.log(posts)
    posts.forEach(post => {
        console.log(post)
    });
}

