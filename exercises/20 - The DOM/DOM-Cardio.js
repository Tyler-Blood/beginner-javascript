// Make a div
const myWrapper = document.createElement('div');
// add a class of myWrapper to it
myWrapper.classList.add('wrapper');
// put it into the body
document.body.appendChild(myWrapper);
// make an unordered list
const myList = document.createElement('ul');
// add three list items with the words "one, two three" in them
// put that list into the above myWrapper
const myLi1 = document.createElement('li');
myLi1.textContent = 'one';
myList.appendChild(myLi1);

const myLi2 = document.createElement('li');
myLi2.innerText = 'one';
myList.appendChild(myLi2);

const myLi3 = document.createElement('li');
myLi3.innerHTML = 'three';
myList.insertAdjacentElement('beforeend', myLi3);

myWrapper.appendChild(myList);
// create an image
const myImg = document.createElement('img');
// set the source to an image
myImg.src = 'https://source.unsplash.com/random';
// set the width to 250
myImg.width = '250';
// add a class of cute
myImg.classList.add('cute');
// add an alt of Cute Puppy
myImg.alt = 'Cute Puppy';
// Append that image to the myWrapper
myWrapper.appendChild(myImg);

// with HTML string, make a div, with two paragraphs inside of it
const strDiv = document.createElement('div');
strDiv.innerHTML = `<p></p><p></p>`;
// put this div before the unordered list from above
myList.insertAdjacentElement('beforebegin', strDiv);

// add a class to the second paragraph called warning
strDiv.lastElementChild.classList.add('warning');
// remove the first paragraph
strDiv.firstElementChild.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  const ageInDogYears = age * 7;
  return `
  <div class="playerCard">
  <h2>${name} — ${age}</h2>
  <p>They are ${height} and ${age} years old. In Dog years this person would be ${ageInDogYears}. That would be a tall dog!</p>
  </div>
`;
}

// make a new div with a class of cards
const cardDiv = document.createElement('div');
cardDiv.classList.add('cards');
// Have that function make 4 cards
let cardsHTML = generatePlayerCard('tyler', 28, `5'10"`);
cardsHTML += generatePlayerCard('brian', 32, `5'5"`);
cardsHTML += generatePlayerCard('jeff', 49, `6'2"`);
cardsHTML += generatePlayerCard('red', 65, `6'1"`);

// append those cards to the div
// cards.forEach(card => {
//   cardDiv.appendChild(card);
// });
cardDiv.innerHTML(cardsHTML);
// put the div into the DOM just before the myWrapper element
myWrapper.insertAdjacentElement('beforebegin', cardDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const cards = document.querySelectorAll('.playerCard');
cards.addEventListener(onclick, this.remove());
// select all the buttons!
// make out delete function
// loop over them and attach a listener
