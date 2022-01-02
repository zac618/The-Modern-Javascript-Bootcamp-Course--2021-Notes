// DISPLAYING COLORS AND USING EVENTS LIKE HOVER AND CLICK

// const colors = [
// 	'red',
// 	'orange',
// 	'yellow',
// 	'green',
// 	'blue',
// 	'purple',
// 	'indigo',
// 	'violet'
// ];

// const changeColor = function() {
// 	const h1 = document.querySelector('h1');
// 	h1.style.color = this.style.backgroundColor;
// };
// const container = document.querySelector('#boxes');

// for (let color of colors) {
// 	const box = document.createElement('div');
// 	box.style.backgroundColor = color;
// 	box.classList.add('box');
// 	container.appendChild(box);
// 	box.addEventListener('click', changeColor);
// }

// SHOPPING LIST EXAMPLE USING KEYPRESS AND THIS

const input = document.querySelector('#username');

input.addEventListener('keydown', function(e) {
	console.log('KEY DOWN');
});

input.addEventListener('keyup', function(e) {
	console.log('KEY UP');
});

input.addEventListener('keypress', function(e) {
	console.log('KEY PRESS');
});

const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e) {
	if (e.key === 'Enter') {
		if (!this.value) return;
		//add a new item to list
		const newItemText = this.value;
		const newItem = document.createElement('li');
		newItem.innerText = newItemText;
		itemsUL.appendChild(newItem);
		this.value = '';
	}
});
