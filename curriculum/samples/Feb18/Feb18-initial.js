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
// BONUS TAKE-HOME EXERCISE:
// Change the click handler to slide any checker in the clicked square
// one row forward and diagonally:
// if the click event is toward the left of the square, the checker moves
// diagonally leftward, otherwise diagonally rightward.
//(Hint: you'll need to calculate the coordinates of the click event relative to the
//   target's origin.)






// =============== JQuery Prelude ================



//Overloading
function useThing(thing) {
	if (isEdible(thing))
		spreadOnToast(thing);
	else if (isAutomotiveTool(thing))
		fixWith(car,thing);
	//...
}



// Overloading by varying number of params...

//Counting arguments
function checkArg(arg) {
	if (arg===undefined)
			console.log("Arg is undefined");
	else
			console.log("Arg is defined");
}

checkArg();
checkArg(undefined); // can't distinguish

// Better way:
function checkArg(arg) {
	if (arguments.length) {
		console.log("You passed in one argument with value "+arg);
	} else {
		console.log("You passed no arguments")
	}
}

checkArg();
checkArg(undefined);


function acceptUnlimitedArgs() {
	for (var i = 0; i< arguments.length; i++) {
		console.log(arguments[i]);
	}
}

acceptUnlimitedArgs(1);
acceptUnlimitedArgs(9,8,7,6,5,4,3,2,1);


//Overloaded Getters/Setter (i.e. Accessor)

function prop() {
	if (arguments.length>0) { //act as setter
		this._prop = arguments[];
		return;
	} else { //act as getter
		return this._prop;
	}
}

var obj = {prop:prop};
obj.prop('value');
obj.prop();



//Chaining
function prop() {
	if (arguments.length>0) { //act as setter
		this._prop = arguments[0];
		return this; //<<----- ONLY DIFFERENCE: return same obj
	} else { //act as getter
		return this._prop;
	}
}

var obj = {prop:prop};
obj.prop('red').prop('blue').prop('one').prop('two').prop()

//Use Example:
// obj.name('Barney').species('dinosaur').color('purple').name();


//=== Wrapper Object ===

function magicBag(selector) {
	var matchingThings;

	if (selector[0]==='#') {
		matchingThings = [document.getElementById(selector)]
	} else if (selector[0]==='.') {
		matchingThings = document.getElementsByClass(selector);
	} else {
		matchingThings = document.getElementsByTagName(selector);
	}

	return {
		things: matchingThings,
		// setter methods:
		magic: function () {
			console.log('magic');
			return this;
		}
		shazam: function() {
			console.log('shazam');
			return this;
		},
		kaboom: function() {
			console.log('kaboom');
			return this;
		}
	}
}

// possible use:
var tds = magicBag('td');
tds.magic().kaboom().shazam();

// more informative name:
var $tds = magicBag('td');
$tds.magic().kaboom().shazam();

// Give factory matching name:
/*
var $ = magicBag;
$tds = $('td');
$tds.magic().kaboom().shazam();
*/






//==== Overloading in jQuery =====

// (see http://api.jquery.com)

// ---- Retrieval: ----

//$(selector)
//	#id
//	.class
//	tag

//$(DOMnode)
//$(array)
//$([node0,node1, ...])
//$(selector,contextNode)
//$(selector,contextJQ)

//  all these return --> $stuff

var $stuff = $('tr'); //--> builds set

// ---- Traversal: ----

//$stuff.children() // elements only
//$stuff.contents() // elements and text
//$stuff.parent()
//$stuff.prev()
//$stuff.next()
//$stuff.siblings()


// ---- Set Reduction/Filtering: ----

// Singletons:
//$stuff.first();
//$stuff.last();

//$stuff[n] // --> nth item as DOM element
//$stuff.eq(n) //--> nth item as jq singleton

var $stuff = $('td');
var stuff0 = $stuff[0];
var $stuff0 = $stuff.eq(0);
stuff0 instanceof HTMLElement // true
$stuff0 instanceof $ //true


// Plurals:
//$stuff.slice(from,to)
//$stuff.filter(booleanFn)
//$stuff.map(convertFn)
//$stuff.has(selector | element)
//$stuff.is(selector | Fn) --> boolean
//$stuff.not(selector | Fn | stuff)

// ---- Set Addition: ----

//$stuff.add(selector)
//$stuff.add($morestuff)

// ---- Element Creation: ----

//$("<TAG>...</TAG>")
//$("<TAG>")
var $div = $('<div>');

//$("<TAG>",descriptorObj)

var $img = $('<img>',{id:'id', href:'url'})


// ---- Element Attachment/Detachment ----

//$child.appendTo($parent)
//$parent.append($child)
//$child.appendTo($parent)
//$parent.append($child)

// ---- Content Replacement ----

//$stuff.html(newHTML);



// ---- Classes: ----

//$stuff.addClass()
//$stuff.removeClass()
//$stuff.toggleClass()

// ---- Loading: ----

//$('document').ready(whenReadyFn)
//$(whenReadyFn)



// EXERCISE:
// Write a constructor CheckerboardJQ which is just like
// Checkerboard but substitutes JQuery whenever possible





// Example: generating checkers

var $XRows = $('tr').slice(0,2);
var $XStart = $('td.odd',$XRows);
$XStart.html('X').addClass('textChecker');


var $ORows = $('tr').slice(6,8);
var $OStart = $('td.odd',$ORows);
$OStart.html('O').addClass('textChecker');


// One pass:
var $allrows = $('tr'),
	$middle = $allrows.slice(2,6),
	$allcells = $allrows.not($middle)
					.children('.odd')
					.addClass('textChecker')
					.html(function(n){ //<--implicit iteration
						return (n<8?'X':'O')
					});

// CSS-generated content:
var $allrows = $('tr'),
	$middle = $allrows.slice(2,6),
	$allcells = $allrows.not($middle)
					.children('.odd')
					.addClass(function(n){
						return 'cssTextChecker'+
								(n<8?'X':'O')
					});


// ----Iteration: each vs. forEach ------

// array.forEach(fn) --> calls fn(item,n)

// $stuff.each(fn)   --> calls fn(n,item)
//	with item as 'this'

// Example:
// Report ids of occupied cells:
$allcells.each(function(num,it) {
	console.log(it.id);
})


// Turn all checkers into numbers:
$allcells.each(function(num,it) {
	$(it).html(num)
})

// OR:
$allcells.each(function(num) {
	$(this).html(num)
})


// Implicit Iteration:
$allcells.html(function(num) {
	return num;
})