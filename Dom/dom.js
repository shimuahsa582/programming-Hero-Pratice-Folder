// top part

const topSection = document.getElementById("topPart");
topSection.style.backgroundColor = 'yellow';

const ulList = document.querySelectorAll('#listStyle');
console.log(ulList);

const hyperLink = document.getElementById('googleLink');
hyperLink.getAttribute('href');
hyperLink.setAttribute('href', 'https://www.youtube.com/');


// player section 
const newElement = document.createElement('li');
newElement.innerText = "Masrafi";
const player = document.getElementById('playerList');
player.appendChild(newElement);

// fruits section
const fruitsSection = document.getElementById('fruits');

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'Banana';
ul.appendChild(li1);
fruitsSection.appendChild(ul);

const li2 = document.createElement('li');
li2.innerText = 'Mango';
ul.appendChild(li2);
fruitsSection.appendChild(ul);

// easier html create
const newSection = document.createElement('div');

newSection.innerHTML = `
<h1> Hello </h1>
<ul>
<li> Jackfruits </li>
<li>painapple </li>
</ul>
`
fruitsSection.appendChild(newSection);

// create button
const button = document.createElement('button');
button.innerText = " Click Me ";
newSection.appendChild(button);


// 
const allTagName = document.getElementsByTagName('section');
console.log(allTagName);

const sectionItem = document.getElementsByClassName('section-item');
console.log(sectionItem);
sectionItem[2].style.backgroundColor = 'red';


const ul1 = document.getElementById('firstItemList');
const li = document.createElement('li');
li.innerText = 'Learaning code jurney';
ul1.appendChild(li);
