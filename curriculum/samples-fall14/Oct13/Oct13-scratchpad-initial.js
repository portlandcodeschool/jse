// HTMLElement

var body, span, blerg, hello;

// ===== DOM Traversal ======
//  Demo : hello-world.html

body = document.body
body.children // elements only
body.childNodes //elements & text

body.children[0] //same as..
span = body.firstElementChild

// versus:
hello = body.firstChild

//versus:
body.textContent
span.textContent


// What are they?
typeof (anything) // object
// check classes:
body.constructor
hello.constructor //Text
hello.textContent.constructor // String

body.constructor //HTMLBodyElement
span.constructor //HTMLSpanElement
body instanceof HTMLElement //true
span instanceof HTMLElement //true
blerg instanceof HTMLElement //true
blerg.constructor

// Everything is JS object:
blerg.flavor = 'honeydew';

// Not arrays:
document.body.children.constructor
document.body.childNodes.constructor

// More Traversal links:
span.lastChild
span.lastElementChild
span.nextSibling
span.nextElementSibling
span.prevSibling
//...
span.parentElement


//========= Retrieval =========

document.getElementById('beau');

document.getElementsByName
document.getElementsByTagName
document.getElementsByClass

// Local retrieval:
span.getElementsByTagName

// result is HTMLCollection:
document.getElementsByTagName.constructor

// ======= Restructuring ======

var div,text;
div = document.createElement('div');
// still an orphan:
div.parentElement //null

// make text:
text= document.createTextNode('you');
// put text inside div:
div.appendChild(text);
div.textContent
text.parentElement // div

// Now place into DOM:
body.appendChild(div);
// move to earlier position:
body.insertBefore(div,span);

// Replacement
body.replaceChild(text,div);
// Replace text only:
text.nodeValue = 

// Restore it:
body.insertBefore(div,text);
div.appendChild.text();

// Raw HTML
div.innerHTML;
div.innerHTML = "<span>moar stuff</span>";

div.insertAdjacentHTML('beforeend',' here');


// ======= Manipulation/Decoration ======

div.setAttribute('something','value');

div.setAttribute('id','foo');
div.id('foo');
div.id();


// -- Class manipulation --
div.className
div.className = 'red';
div.className += ' big';
div.classList
div.classList.add('drop');
div.classList.remove('big');
div.classList.toggle('red');
div.classList.toggle('red');

//BTW:
div.classList.constructor

// ======= Events ========

function eventCallback(evt) {
	console.log(evt);
}
div.addEventListener('click',eventCallback);
div.addEventListener('mouseover',eventCallback);


// Document loading:

window.addEventListener('load',eventCallback);

