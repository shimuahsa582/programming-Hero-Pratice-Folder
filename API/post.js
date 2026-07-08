// Load and Display Post title List in the UI
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

    // 1st step: access get div container
    const showData = document.getElementById("container");
    showData.innerHTML = " ";

    posts.forEach(post => {
        // console.log(post.email, post.username);

        // create li element 
        const li = document.createElement("li");
        li.innerText = post.name;
        // console.log(li);

        // 3rd step:li append in container div
        showData.appendChild(li);

    });
}
