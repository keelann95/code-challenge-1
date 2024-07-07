

const header2 = document.getElementById('header2')
const inputBtn = document.getElementById('inputBtn')



const inputElement = document.createElement("input");
inputElement.type = "text";
inputElement.className = 'userInput';
inputElement.placeholder = "enter items";
inputBtn.appendChild(inputElement);

const button = document.createElement('button')
button.className = 'enter'
button.textContent = 'Add!'
inputBtn.appendChild(button)


const unOrderedList = document.createElement('ul')
unOrderedList.className = 'ul'
header2.appendChild(unOrderedList)




