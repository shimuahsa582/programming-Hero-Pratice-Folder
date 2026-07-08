
// toto section start
// create todo api function
const loadTodo = () => {
    const todoUrl = "https://jsonplaceholder.typicode.com/todos";
    fetch(todoUrl)
        .then(response => response.json())
        .then(data => {
            displayTodo(data)
        })
}

// create arrow function in todo data show in ui 
const displayTodo = (todos) => {
    // 1st step: get id in todo container
    const todoContainer = document.getElementById("todoContainer")
    todoContainer.innerHTML = "";

    // get 10 data just
    const firstTenTodos = todos.slice(0, 10);

    // 2nd step:run loop get each element 
    firstTenTodos.forEach(todo => {
        const createTodoContainer = document.createElement("div");
        createTodoContainer.innerHTML = `

        <div class = "todo-card">
            <div class = "todo-pera">
             <p>${todo.completed == true ? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i>`}</p>
            </div>
            
             <h1>${todo.title}</h1>
        </div>
        `
        // 3rd step: append the new container in todo main container
        todoContainer.appendChild(createTodoContainer)

    });
}
loadTodo()
// toto section end

// todo comment section start
const loadComment = () => {
    const url = "https://jsonplaceholder.typicode.com/comments";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayComment(data)
        })
}

const displayComment = (comments) => {
    const commentContainer = document.getElementById("todoComment");
    commentContainer.innerHTML = "";
    const fiveComments = comments.slice(0, 5);

    fiveComments.forEach(comment => {
        console.log(comment);

        const createNewComment = document.createElement("div");
        createNewComment.innerHTML = `

         <div class="comment-card">
        <h1>${comment.name}</h1>
        <p>${comment.body}</p>
     </div>
        `

        commentContainer.appendChild(createNewComment)
    })
}
loadComment();
// todo comment section end

// todo user section start
const loadUsers = () => {
    const userUrl = "https://jsonplaceholder.typicode.com/users";
    fetch(userUrl)
        .then(response => response.json())
        .then(data => {
            displayUsers(data)
        })
}

// create arrow function in user data show in ui 
const displayUsers = (users) => {
    // 1st step: get id in todo container
    const userContainer = document.getElementById("todoUser")
    userContainer.innerHTML = "";

    // get 10 data just
    const firstTenUsers = users.slice(0, 10);

    // 2nd step:run loop get each element 
    firstTenUsers.forEach(user => {
        const newUserContainer = document.createElement("div");

        newUserContainer.innerHTML = `
        <div class = "user-card">
             <h1>${user.name}</h1>
             <p>${user.address.street}</p>
        </div>
        `
        // 3rd step: append the new container in todo main container
        userContainer.appendChild(newUserContainer)

    });
}
loadUsers();
// user section end
