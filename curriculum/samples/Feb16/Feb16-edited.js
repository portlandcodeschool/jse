// === Write a browser "application" from scratch! ===


// EXERCISE 0:
// Create a basic browser application template comprising three files:
// 1) something.html, which references
// 2) something.css, and
// 3) something.js

// Your JS file should end with the following:
function doStuff() {
	
}
// Then either
window.onload = doStuff;
// OR
window.addEventListener('load',doStuff);





//==========
// Lesson: Element Retrieval (Review)
document.getElementById('test');

document.getElementsByName
document.getElementsByTagName
document.getElementsByClass

// Local retrieval:
var elem = document.getElementById('whatevs');
elem.getElementsByTagName

// result is HTMLCollection:
var elems = document.getElementsByTagName('div').constructor
// but not an actual Array:
elems instanceof Array; //false



//==========

// EXERCISE 1:
// In your JS file, create a constructor `Checkerboard(container)`
// which creates a checkerboard instance object.
// `container` should be either an HTMLElement or
// a string with the id of an element.
// The checkerboard instance should remember the element
// indicated by `container` (finding it if necessary).
// The instance should have one method `el()`
// which returns its container element (or null if none exists).


// Test it by making an instance:
var board = new Checkerboard(document.body);
board.el() === document.body ; //true


// EXERCISE 1a:
// In your HTML file, add an empty div element to the body
// with id 'checkerboard'.  Then build a checkerboard instance
// in that div instead of in document.body.
// Put the creation of your checkerboard instance inside `doStuff`
// so that the 'checkerboard' div is built first.

// Test the following:
board.el().id === 'checkerboard'; //true


//==========
// Lesson: Manipulating Structure (Review)

var span = document.createElement('span');

// Attachment:
var body = document.body;
var div = document.getElementById('checkerboard');
body.appendChild(span); //attach after div
div.appendChild(span);  //attach within div
body.insertBefore(span,div);//attach before div

// Replacement:
var par = document.createElement('p');
body.replaceChild(par,span);





//==========

// EXERCISE 2:
// Give your Checkerboard instances a method `render()`,
// which will replace any contents of its el()
// with a table containing 8 empty rows.
// Generate the table and row elements using
// document.createElement(TAG),
// and attach then using PARENT.appendChild(CHILD).


elem.innerHTML = '';

//==========
// Lesson: Element Traversal
// (moving from one element to another)

var div, txt, body = document.body;
body.children // elements only
body.childNodes //elements & text

div = body.children[0] //same as..
div = body.firstElementChild

//versus:
txt = body.firstChild
//versus:
txt = body.textContent


var table = div.firstElementChild;
var trs = table.children;
// Not an actual Array:
trs instanceof Array //false


// More Traversal links:
.lastChild
.lastElementChild
.nextSibling
.nextElementSibling
.prevSibling
//...
.parentElement


//==========
// Lesson: Attribute manipulation

var div = document.getElementById('checkerboard');
div.setAttribute('something','value');

div.attributes;
div.getAttribute('something');


div.setAttribute('id','myID');
// or get/set special property:
div.id;
div.id = 123;
div.id; //'123', always string

div.id = 'checkerboard'; //restore


//==========
// EXERCISE 3:
// Modify `render()` to generate 8 cells within each table row;
// give each cell a unique id attribute from 0-63.





//==========
// Lesson: Class manipulation
var div = document.getElementById('checkerboard');
div.className
div.className = 'red';
div.className += ' big';
div.classList
div.classList.add('red');
div.classList.remove('big');
div.classList.toggle('red');
div.classList.toggle('red');

//BTW:
div.classList.constructor
// Also not an array:
div.classList instanceof Array




//==========
// EXERCISE 4:
// In your CSS file, create a CSS class for cells
// and give it rules which will make your cells visible.
// Then apply the class to all table cells when they're created.





//==========
// EXERCISE 5:
// Create two more CSS classes 'even' and 'odd',
// which color their respective elements red and black;
// apply them to table cells in a checkerboard pattern.
// (Hint: see Homework 1, #4)



//==========
// LESSON: inserting text nodes
elem.innerHTML = 'whatevs';

var txt = document.createTextNode('whatevs');
elem.appendChild(txt);



var txt = document.createTextNode('');
txt.nodeValue = 'whatevs';
elem.appendChild(txt);



//==========
// EXERCISE 6:
// Create a CSS class 'checker' which styles some text
// representing a checker.
// Add a new Checkerboard instance method `populate()` which
// adds 8 'X' checkers to the top two rows (in the correct cells)
// and 8 'O' checkers to the bottom two rows.




//==========
// Lesson: Event handling

// already seen:
window.addEventListener('load',doStuff);

// create event handlers (i.e. callback functions):
function hello() {
	console.log('hello!')
}
function goodbye() {
	console.log('goodbye!')
}
function booyah() {
	console.log('booYAH!')
}

// pick some element:
var elem = document.getElementById('0'); //first table cell

// Exclusive bindings:
elem.onclick = hello;
elem.onclick = booyah; //replaces previous handler

elem.onmouseover = hello;
elem.onmouseout = goodbye;

elem.onmouseover = booyah;

// Multiple bindings:
elem.addEventListener('click',hello);
elem.addEventListener('click',booyah); //coexists
elem.addEventListener('mouseover',hello);
elem.addEventListener('mouseout',goodbye);

// Getting listeners:
// DOM3 has no standard way!
// But in some browsers:
getEventListeners(elem);

// Removal:
elem.removeEventListener('click',hello);


// For now: use ELEM.onclick, etc, which are easier to disable and debug



//==========
// EXERCISE 7:
// attach an event handler to each cell which will
// console.log() the id of that cell when it's clicked.




//==========
// Lesson: Using the event parameter

// Define a new event handler:
function reportClick(evt) { //<-- receives event obj
	console.log(evt);
	window.lastEvent = evt;
}


elem.onclick = reportClick;


//==========
// EXERCISE 8:
// Change the click event handler to console.log
// the coordinates of the click!





//==========
// Lesson: Using object methods as event handlers

var obj = {
	data: 123,
	get: function () {
		console.log(this.data);
	}};


elem.ondblclick = obj.get; //not gonna work.  Why not?



// Alternative:
function wrapperFn() {
	obj.get();
}
// OR
var wrapperFn = obj.get.bind(obj); //forces 'this' to refer to obj


elem.ondblclick = wrapperFn;



//==========
// EXERCISE 9:
// Change the click event handler to console.log, in addition to the cell's id,
// the letter for the checker in that cell, if any.




//==========
// EXERCISE 10:
// Change the click handler to "highlight" any checker in the clicked cell.
// Highlighting can be any change in appearance
// (e.g. set to boldface, change text color)




//==========
// BONUS EXERCISE:
// Change the click handler to slide any checker in the clicked square
// one row forward and diagonally:
// if the click event is toward the left of the square, the checker moves
// diagonally leftward, otherwise diagonally rightward.
//(Hint: you'll need to calculate the coordinates of the click event relative to the
//   target's origin.)

