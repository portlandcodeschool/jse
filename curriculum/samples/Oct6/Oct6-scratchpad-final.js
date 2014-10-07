
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
/*
true
*/
arr.constructor === Array;
/*
true
*/
fun.constructor === Function;
/*
true
*/
now.constructor === Date;

// All true:
obj instanceof Object;
arr instanceof Array;
fun instanceof Function;
arr instanceof Object;
fun instanceof Object;
/*
true
*/


//All built-in objects have formal membership, unlike factory products:

function makeThing(val) {
	return {key:val};
}
var thing = makeThing("boo");
thing.constructor; //undef
/*
function Object() {
    [native code]
}
*/
thing instanceof makeThing; //false
/*
false
*/



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





// Constructor can be used as initializer on pre-made object:

// normal ctor use:
var card7a = new Card(7);
card7a.rank()
/*
Some rank
*/

// apparent equivalent:
var card7b = {flavor:'banana'};
Card.call(card7b,7);
Card(card7b,7)
card7b;

card7a;
card7b;


// "Borrowed initializer": constructor is "lent" to new object as a temporary method



// 'new' operator...
// _+_
// new _(_)   <-- parens are part of syntax, not call operator


// new does boilerplate work of creating and returning new object,
// lets Ctor just initialize

// EXERCISE: Let's (approximately) simulate it...

// New emulator, simple version:
function fakeNew1(ctor,arg) {
	var instance = {};
	ctor.call(instance,arg);
	// your simulation here
	return instance;
}


// Demonstrate initialized object:
var ace2 = fakeNew1(Card,2);
ace2.rank();
ace2.suit();

// But ace2 is still isolated object, not official Card:
ace2.constructor;
ace2 instanceof Card;
/*
false
*/










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
var x=1,y=2;

function plus(x,y) {return x+y};
function sum(x,y) {this.sum = x+y;}
var z = new plus(x,y);
var z2 = new sum(x,y);
// What is z?
z
z2


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
var obj8b= new String('8');
var obj = Object();
var obj = new Object();


// Object as constructor:
var obj9 = new Object(9); // number object
//Explains why slang form works: converter IS constructor!



//------------ 
// Prototypes
//------------

function Donkey() {
	this.coat = "grey";
}
var donk = new Donkey();

Donkey.prototype.noise = "heehaw!";


var CTOR = Card;
var INST = new Card(0);

// 4 ways of getting from Instance to proto:
CTOR.prototype;
/*
[object Object]
*/
INST.constructor.prototype;
Object.getPrototypeOf(INST);
INST.__proto__;




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
/*
Instance
*/
delete INST.name;
INST.getName();

/*
Proto
*/


// Own properties vs. inherited properties:
INST.hasOwnProperty('name'); 
/*
false
*/
INST.hasOwnProperty('getName');
/*
false
*/
INST.hasOwnProperty('hasOwnProperty');
/*
false
*/
CTOR.prototype.hasOwnProperty('name');
/*
true
*/

CTOR.prototype.hasOwnProperty('name');
CTOR.prototype.hasOwnProperty('getName');
CTOR.prototype.hasOwnProperty('hasOwnProperty');


Object.prototype.hasOwnProperty('hasOwnProperty');



// Familiar example:
var arr = [0,1,2];
arr.length;
/*
3
*/
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
arr.join !== Array.join; 

// Prototype properties are shared among instances:
arr2 = ['a','b','c'];
arr2.join === arr.join; 




// In includes inherited props:
//('getName' in INST) 

