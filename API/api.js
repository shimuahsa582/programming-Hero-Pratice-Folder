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


// get data in API and show all data UI 
const loadPost = () => {
    const postUrl = "https://jsonplaceholder.typicode.com/users"
    fetch(postUrl)
        .then(response =>
            response.json()
        )
        .then(json => {
            console.log(json)
            display(json)
        })
}

const display = (titles) => {
    const showPostUi = document.getElementById("postContainer")
    showPostUi.innerHTML = "";
    titles.forEach(title => {
        const createDivContainer = document.createElement("div");

        createDivContainer.innerHTML = `
        <div class="postCard">
               <h2>${title.name}</h2>
            <p>${title.username}</p>
        </div>
        `
            ;
        showPostUi.appendChild(createDivContainer);
    });
}
loadPost()

