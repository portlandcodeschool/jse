
// New pattern: Constructors...

// Constructors ('Ctors'):
//   --are like factories: functions which mass-produce instances
//   --represent JS "classes" with 'official' instance membership
//   --have form of 'borrowed initializer method':
//       -- Use 'this' to refer to instance being intialized
//       -- Have no return value
//   --are named with upper-case (e.g. 'PointyThing'), reflect what they build
//      (by convention only, not enforced)

// Object subclasses:

var obj = {};
var arr = [];
var fun = function() {};

// Equivalents using explicit built-in Ctors:
var obj = new Object();
var arr = new Array();
var fun = new Function();
var str = new String('apple'); //wrapper obj
var num = new Number(9); //wrapper obj
var now = new Date();
// Ctors are the only way of making objects!




typeof obj; //'object'
typeof arr; //'object'
typeof fun; //'function'

// All true:
obj.constructor === Object;
arr.constructor === Array;
fun.constructor === Function;
now.constructor === Date;

// All true:
obj instanceof Object;
arr instanceof Array;
fun instanceof Function;
arr instanceof Object;
fun instanceof Object;


//All built-in objects have formal membership, unlike factory products:

function makeThing(val) {
	return {key:val};
}
var thing = makeThing("boo");
thing.constructor; //undef
thing instanceof makeThing; //false



// -------------------
// Custom constructors
// -------------------

// CTOR pattern:
function Constructor(arg) {
	this.prop = arg;
	//...
}

// Compare factory and corresponding constructor:

// --- Example 1 ---
// Factory with personal instance methods:
function makeCard(id) {
	var instance = {};
	instance.id = id;
	instance.rank = function() {
		//...
	}
	instance.suit = function() {
		//...
	}
	return instance;
}
// Factory call:
var ace0 = makeCard(0);


// Constructor with personal instance methods:
function Card(id) {
	this.id = id; //this means the new instance
	this.rank = function() {
		//...
	}
	this.suit = function() {
		//...
	}
	// NO RETURN VAL!
}
// Constructor call:
var ace1 = new Card(1);



// --- Example 2 ---
// Factory with shared instance methods:
function makeCard(id) {
	var instance = {};
	instance.id = id; //this means the new instance
	instance.rank = makeCard.rank;
	instance.suit = makeCard.suit;
	return instance;
}
makeCard.rank = function() {
	//...
}
makeCard.suit = function() {
	//...
}

// Factory call:
var ace0 = makeCard(0);


// Constructor with shared instance methods:
function Card(id) {
	this.id = id; //this means the new instance
	this.rank = Card.rank;
	this.suit = Card.suit;
	//NO RETURN VAL!
};
Card.rank = function() {
	return "Some rank";
};
Card.suit = function() {
	return "Some suit"
};

// Constructor call:
var ace1 = new Card(1);



// EXERCISE:  write Rect as a constructor (in an IIFE):
var Rect = (function() {


function Rect(l,b,r,t) { // ctor
	//...
}

function width() {
	//...
}
function height() {
	//...
}
function area() {
	//...
}
function move(dx,dy) {
	//...
}


//...

})();

// Call it here!
var rect = //...




// ----------
// Constructor can be used as initializer on pre-made object:

// normal ctor use:
var card7a = new Card(7);

// borrowing ctor as initializer method:
var card7b = {};
Card.call(card7b,7);


// They seem equivalent:
card7a;
card7b;
// But:
card7a instanceof Card;
card7b instanceof Card; //false; no magic stamp


// Summary of ctor: "Borrowed initializer";
// constructor is "lent" to new object as a temporary method


// ----------
// 'new' operator...
// new _(_)   <-- parens are part of syntax, not call operator


// new does boilerplate work of creating and returning new object,
// lets Ctor just initialize

// EXERCISE: Let's (approximately) simulate it...
// instead of calling
var obj = new Ctor(arg);
// We'll do
var obj = fakeNew(Ctor,arg);



// "new" emulator, simple version:
function fakeNew1(ctor,arg) {

	// your simulation here

}


// Demonstrate initialized object:
var ace2 = fakeNew1(Card,2);
ace2.rank();
ace2.suit();

// But ace2 is still isolated object, not official Card:
ace2.constructor;
ace2 instanceof Card;










function fakeNew2(ctor,arg) {
	var instance = {};
	// Magic step; ignore for now:
	instance.__proto__ = ctor.prototype;
	// as before:
	ctor.call(instance,arg);  //does initialization
	return instance;
};
var ace2 = fakeNew2(Card,2);  //make with constructor + synthetic new

// Compare:
var ace0 = makeCard(0);  //make with factory
ace0.constructor; // Object


var ace1 = new Card(1);  //make with constructor + new 
ace1.constructor; // Card
ace2.constructor; // Card

ace0 instanceof makeCard;  //false
ace1 instanceof Card; //true
ace2 instanceof Card; //true
// ace1,ace2 have formal class membership; ace0 does not












// Constructor is not special kind of function, just an ordinary method
// expected to be used in a certain way (i.e. with _new_)



// Prove that construction depends on new:


// Try new with non-constructor:
function plus(x,y) {return x+y};
var z = new plus(x,y);
// What is z?





// Try constructor without new:
var ace3 = Card(3);
// What is ace3?  Other effects?







// Constructors vs Converters
//Always use new with constructors, except for special built-in Ctors:
var str5 = String(5);     // converter: makes primitive
var obj5 = new String(5); // constructor: makes wrapper obj

var num6 = Number('6');
var obj6 = new Number('6');

// Object as converter:
var obj7 = Object(7);    // number object
var obj8 = Object('8');  // string object

// Object as constructor:
var obj9 = new Object(9); // number object
//Explains why slang form works: converter IS constructor!



//------------ 
// Prototypes
//------------

// 3 relations:
// CTOR <-> INST

// CTOR <-> PROTO

//  PROTO <-> INST


var CTOR = Card;
var INST = new Card(0);
var PROTO = Card.prototype;

// 4 ways of getting from Instance to proto:
CTOR.prototype;
INST.constructor.prototype;
Object.getPrototypeOf(INST);
INST.__proto__;



// Getting vs. Setting props:
// Setting always acts locally on instance;
// Getting searches chain of prototypes





// Prototypes never take credit; instance gets to pretend it did work:
function CTOR() {
    this.name = 'Instance';
}
CTOR.prototype.name = 'Proto';
CTOR.prototype.getName = function() {
    return this.name;
}

var INST = new CTOR();
INST.getName();



// Own properties vs. inherited properties:
INST.hasOwnProperty('name'); 
INST.hasOwnProperty('getName');
INST.hasOwnProperty('hasOwnProperty');

CTOR.prototype.hasOwnProperty('name');
CTOR.prototype.hasOwnProperty('getName');
CTOR.prototype.hasOwnProperty('hasOwnProperty');


Object.prototype.hasOwnProperty('hasOwnProperty');



// Familiar example:
var arr = [0,1,2];
arr.length;
arr.join();

arr.hasOwnProperty('length');

// But look closer:
arr.hasOwnProperty('join');
arr.join === Array.prototype.join; 
arr.join !== Array.join; 

// Prototype properties are shared among instances:
arr2 = ['a','b','c'];
arr2.join === arr.join; 




// In includes inherited props:
//('getName' in INST) 


//-------- Class vs Instance--------
// JS has no classes; role of "class" is shared between CTOR and PROTO

// PROTO != CTOR
// Instance methods vs Class methods

// EX:
Array.join !== Array.prototype.join

Array.join([1,2,3],' ');
[1,2,3].join(' ');

// Both types of methods are "shared", non-duplicated, but:

//1) Addressee is different:
//  class methods are called via CTOR;
//  instance methods are called via INST

//2) CTOR substitutes for _no INST_; PROTO subs for _any INST_

//3) CTORs do not inherit from superclass


//--- Subclassing ----



var proto = new Super();
// OR
var proto = Object.Create(Super.prototype);

proto.constructor = Sub;
Sub.prototype = proto;







// Can be done within IIFE:
var Sub = (function (SuperCtor){

	function SubCtor() {
		//...
	}

	var proto = new SuperCtor();
	proto.constructor = SubCtor;
	SubCtor.prototype = proto;

	return SubCtor;

})(Super)






// Subclassing example:

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


// Subclass: stack
var Stack = (function (Super) {
	function Stack (vals) {
		Super.call(this,vals);
	}
	var proto = new Super([]);
	Stack.prototype = proto;
	proto.constructor = Stack;

	proto.unshift = undefined;
	proto.shift = undefined;
	proto.bottom = undefined;

	return Stack;
})(Deque);

// EXERCISE: write subclass: queue

