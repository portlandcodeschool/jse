// Review constructors...


// 3 relations:
// CTOR <-> INST

// CTOR <-> PROTO

// PROTO <-> INST

// Using Protos...
// 		1st rule of Prototypes
// 		Getting vs. Setting instance props


// Familiar example:
var arr = [0,1,2];
arr.length;
arr.join();

/*
0,1,2
*/
arr.hasOwnProperty('length');
/*
true
*/

// But look closer:
arr.hasOwnProperty('join');
/*
false
*/
arr.join === Array.prototype.join; 
/*
true
*/
arr.join !== Array.join; 
/*
true
*/

// Prototype properties are shared among instances:
arr2 = ['a','b','c'];
arr2.join === arr.join; 
/*
true
*/



// operator 'in' includes inherited properties:
var arr = [1,2,3];
'push' in arr; //true
/*
true
*/
arr.hasOwnProperty('push'); //false

/*
false
*/


//-------- Class vs Instance--------
// PROTO != CTOR;
// Instance methods vs Class methods

// EX:
Array.prototype.join !== Array.join


// Class method:
Array.join([1,2,3],' ');
// Instance (prototype) method:
[1,2,3].join(' ');

// Both types of methods are "shared", non-duplicated, but:

//1) Addressee is different:
//  - class methods are called via CTOR;
//  - instance methods are called via INST

//2) CTOR substitutes for _no INST_; PROTO subs for _any INST_

//3) CTORs do not inherit from superclass



// ------- Explore Built-in taxonomy --------

// Diagram ctors+prototype of:
/*
		Object
		/	\
 Function	Array
*/


//----- Trace Subclassing process------

// 1) Create two independent ctors:
function Super() {}
Super.prototype.a = 'a';

function Sub() {}

// 2) Make Sub a subclass of Super...

// Diagram...
// subclass prototype is "adopted" instance of superclass
Sub.prototype = new Super();
Sub.prototype.constructor = Sub;

// Now set Sub prototype props:
Sub.prototype.b = 'b';

// Make an instance of subclass:
var sub = new Sub();
sub.a;
/*
a
*/
sub.b;
/*
b
*/
sub instanceof Sub;
/*
true
*/
/*
true
*/
sub instanceof Super;
/*
true
*/
sub.constructor;
/*
function Super() {}
*/
/*
true
*/


// ---- Subclassing example: Rect vs. Square! ------


// Ctor without prototype:
var Rect = (function() {
	function Ctor(l,b,r,t) {
		this.l = l;
		this.b = b;
		this.r = r;
		this.t = t;
		//this.width = width;
		//this.height= height;
		//this.area  = area;
		//this.move  = move;
	}
	
	Ctor.prototype.width = function() {
		return this.r - this.l;
	}
	Ctor.prototype.height = function() {
		return this.t - this.b;
	}
	Ctor.prototype.area = function() {
		return (this.width() * this.height());
	}
	Ctor.prototype.move = function(dx,dy) {
		this.l += dx;
		this.r += dx;
		this.b += dy;
		this.t += dy;
	}

	return Ctor;
})()


// EXERCISE: modify to use Rect.prototype




// EXERCISE: now write a Square subclass
var Square = (function(){
	function Ctor(l,b,size) { //size == width == height
		this.l = l;
		this.b = b;
		this.r = l+size;
		this.t = b+size;
	}
	
	function Ctor(l,b,size) {
		Rect.call(this,l,b,l+size,b+size);
	}
	
	var proto = new Rect();
	var proto = Object.create(Rect.prototype);
	Ctor.prototype = proto;
	proto.constructor = Ctor;
	//OR
	//Ctor.prototype = new Rect();
	//Ctor.prototype.constructor = Ctor;

	Ctor.prototype.size = function(newSize) {
		if (newSize === undefined) {
			return this.width(); //getter
		}
		//else act as setter:
		this.r = this.l+ newSize;
		this.t = this.b+ newSize;
		// Could also do:
		// Ctor.call(this, this.l, this.b, newSize)
	}

	return Ctor;
})()

var sq = new Square(0,0,1);
sq.size(2);
sq.area();
/*
4
*/ //4


// EXERCISE: in IIFE above, add an instance method _size_ for all Squares:
// size() acts as a getter (returning width/height)
// size(newSize) acts as a setter (setting width = height = newSize)









// Begin factory-ctor detour...
// EXERCISE: write a factory makeQuad(l,b,r,t) which returns
// either a Rect or a Square or null, depending on arguments
// (fewer than 3 arguments is failure, returning null)

function makeQuad(l,b,r,t) {

}

var s1 = makeQuad(0,0,1);  //--> a new Square
var s2 = makeQuad(0,0,2,2);//--> a new Square
var r1 = makeQuad(0,0,1,2);//--> a new Rect
var oops = makeQuad(0,0); //failure: --> null


// Can also write as Ctor:
function Quad(l,b,r,t) {

}

var q = new Quad(0,0,1);

// But be wary:
q instanceof Quad;// false

// Furthermore, ctor cannot return non-objects:

var q = new Quad(0,0); // not null!
q instanceof Quad;// true

// end factory-ctor detour



// EXERCISE: Retrofit: add a class method to Rect:

//Rect.every()  // --> return array of every Rect instance ever made

var Rect = (function() {
	function Ctor(l,b,r,t) {
		this.l = l;
		this.b = b;
		this.r = r;
		this.t = t;
		allRects.push(this);
		//this.width = width;
		//this.height= height;
		//this.area  = area;
		//this.move  = move;
	}
	
	var allRects = [];
	Ctor.every = function() {
		return allRects.slice();
	}
	
	Ctor.prototype.width = function() {
		return this.r - this.l;
	}
	Ctor.prototype.height = function() {
		return this.t - this.b;
	}
	Ctor.prototype.area = function() {
		return (this.width() * this.height());
	}
	Ctor.prototype.move = function(dx,dy) {
		this.l += dx;
		this.r += dx;
		this.b += dy;
		this.t += dy;
	}

	return Ctor;
})()

var r1 = new Rect(0,0,1,2);
var r2 = new Rect(0,0,2,1);
Rect.every(); //--> [r1, r2]



// Notice:
//1) Class methods are not inherited:
// Square would need to re-implement Square.every()

// EXERCISE: do it!
var Square = (function(){

})();




//2) Problem: making Square prototype calls Rect ctor:
Square.prototype = new Rect(); //<-- includes in Rect.every()

// We need a better way:
// bypass Superclass ctor when making subclass prototype...

// Solution:  Object.create(PROTO)

// Object.create(PROTO) makes an empty object
// whose proto is PROTO, not Object.prototype.

// {} means Object.create(Object.prototype);




// Revisit fakeNew()...
function fakeNew2(ctor,arg) {
	var instance = {};
	instance.__proto__ = ctor.prototype;
	ctor.call(instance,arg);  //does initialization
	return instance;
};

// The first 2 lines can be combined into single step:
function fakeNew3(ctor,arg) {
	var instance = Object.create(ctor.prototype);
	ctor.call(instance,arg);
	return instance;
};

// Example:
function Duck() {
	this.noise = 'quack';
}
Duck.prototype.wings = 2;

var duck = new Duck();
duck instanceof Duck; //true
duck.constructor; // Duck
duck.wings; //2
duck.noise; //quack

var mockduck = Object.create(Duck.prototype);
mockduck instanceof Duck; //true
mockduck.constructor; //Duck
mockduck.wings; //2
mockduck.noise; //undefined; Duck() never runs!



// EXERCISE: fix Square IIFE to use Object.create()
// when subclassing Rect

var Square = (function(){

})();







// ------ More Examples: Deque, Stack, and Queue -------
// Superclass: Deque

var Deque = (function () {
	function Deque (vals) {
		// unprotected version
		this.array = vals.slice();
	}
	Deque.prototype.top = function () {
		if (this.array.length)
			return this.array[this.array.length-1];
	}
	Deque.prototype.bottom = function () {
		if (this.array.length)
			return this.array[0];
	}

	Deque.prototype.push = function(val) {
		return this.array.push(val);
	}
	Deque.prototype.pop = function() {
		return this.array.pop();
	}

	Deque.prototype.unshift = function(val) {
		return this.array.unshift(val);
	}
	Deque.prototype.shift = function() {
		return this.array.shift();
	}

	return Deque;
})();




// Subclass: Stack is a top-access-only Deque
//  which affords Last-In-First-Out (LIFO) storage
var Stack = (function (Super) {
	function Ctor (vals) {
		Super.call(this,vals);
	}
	var proto = Object.create(Super.prototype);
	Ctor.prototype = proto;
	proto.constructor = Ctor;

	// Disable some methods:
	proto.unshift = undefined;
	proto.shift = undefined;
	proto.bottom = undefined;

	return Ctor;
})(Deque);

// EXERCISE:
// Subclass: Queue is a top-in bottom-out Deque
//  which affords First-In-First-Out (FIFO) storage

// Do it!


var Queue = (function (Super) {


})(Deque);



// ======= BONUS TOPIC:  Automated Subclassing (e.g. in frameworks)
// For example:
// Backbone.SOMETHING.extend(OBJ) makes a subclass of Backbone.SOMETHING
//  and copies any properties of OBJ into its prototype

// Approximate implementation:
Function.prototype.extend = function(protoProps) { // method of any function...
	var Super = this; //the function to be subclassed
	function Ctor() { // the subclass ctor
		Super.call(this);
	}

	// Make Ctor a subclass of Super:
	var proto = Object.create(Super.prototype); //the subclass prototype
	Ctor.prototype = proto;
	proto.constructor = Ctor;

	// Copy protoProps into subclass prototype:
	//_.extend(proto,protoProps);
	// OR
	for (var prop in protoProps) {
		proto[prop] = protoProps[prop];
	}

	return Ctor;
}

// Use example:
function Duck() {}
Duck.prototype.feet = 2;
Duck.prototype.noise = 'quack';

var MutantDuck = Duck.extend({feet:3});
var duck = new MutantDuck();
duck instanceof MutantDuck; //true
duck instanceof Duck; //true
// Inherited from MutantDuck:
duck.feet;
duck.hasOwnProperty('feet'); //false
// Inherited from Duck:
duck.noise;
duck.hasOwnProperty('noise'); //false
