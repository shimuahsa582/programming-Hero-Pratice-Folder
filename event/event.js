function changeBodyColor() {
    const body = document.body.style.backgroundColor = "purple";
    console.log(body);
}

// login button 
// set event listner
const loginButton = document.getElementById('user-button').addEventListener('click', function () {
    // set input button 
    const inputName = document.getElementById('name-input');
    const name = inputName.value;
    console.log(name);

    // set peragraph 
    const userDetails = document.getElementById('user-details');
    userDetails.innerText = name;
})

// update button
const updateButton = document.getElementById('update-button').addEventListener('click', function () {
    const inputEmail = document.getElementById('email');
    const email = inputEmail.value;
    const updatePeragraph = document.getElementById('user-pera');
    updatePeragraph.innerText = email;
})

// 1st step: add event handler 
const commentButtton = document.getElementById('comment-button').addEventListener('click', function () {

    // 2nd step:comment text box
    const commentTextBox = document.getElementById('comment-text-box');
    const newComment = commentTextBox.value;

    // 3rd step:comment container div access
    const commentContainer = document.getElementById('comment-container');

    //   4th step:create new paragraph and give in the style 
    const newCommentElement = document.createElement('p');
    newCommentElement.innerText = newComment;
    newCommentElement.style.border = '5px solid red';
    newCommentElement.style.padding = '10px';

    // 5th step: set new peragraph in comment container box 
    commentContainer.appendChild(newCommentElement);

    // 6th step: clean the text box in text automatic 
    commentTextBox.value = '';
})

// delete github button 
const githubInput = document.getElementById('github-input').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const githubDeleteButton = document.getElementById('github-delete-btn');

    if (text === 'delete') {
        githubDeleteButton.removeAttribute('disabled');
        const githubPeragraph = document.getElementById('github-pera');
        githubPeragraph.style.display = 'none';
    }
    else {
        githubDeleteButton.setAttribute('disabled', true);
    }
})

// user delete button
document.getElementById('user-delete-input').addEventListener('keyup', function (e) {
    const userDeleteButton = document.getElementById('user-delete');
    const inputText = e.target.value;
    if (inputText === 'delete') {
        userDeleteButton.disabled = false;
        const userPera = document.getElementById('user-hidden');
        userPera.style.display = 'none';
    }
    else {
        userDeleteButton.disabled = true;
    }


})

// 
const listItems = document.getElementsByClassName('items');
for (const item of listItems) {
    item.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    })
}

const addNewButton = document.getElementById('add-new-btn').addEventListener('click', function (event) {
    const ol = document.getElementById('ol-list-item');
    const li = document.createElement('li');
    li.classList.add('items');
    li.innerText = 'added a new item';
    ol.appendChild(li);
})

