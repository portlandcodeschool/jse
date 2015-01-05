//--- OBJECT REFERENCES ---
// "The variable is not the object"
// Reference: an arrow from little box (variable or property) to big box.








// Implications of References:

// null is not {}
var a = {}; //allocates big box and reference to it
var b = null; //makes arrow to nowhere

!null; //null is falsish
if (a) 'object!';
if (b) 'object!'; //nada



// Object equality means identity:
var a = {};
var b = {};
a!=b;
a!==b;



// Object assignment means aliasing/sharing:
var myRoom = {where:'PCS', tables:8};
var yourRoom = myRoom;
myRoom.tables--;
yourRoom.tables;
myRoom.color = 'white';
yourRoom.color
yourRoom.tables = 10;
myRoom.tables

/*
10
*/
/*
7
*/



// No intrinsic names




// Nesting means linking:
var duck = {feet:2, noise:'quack'};
var nest = {mama:duck};
var nest2 = {mama:duck, papa:{}};

var futureObj = {};
futureObj.color = 'blue';

/*
blue
*/
/*
Exception: futureObj is null
@Scratchpad/1:1:1
*/

{mama:{feet:2, noise:'quack'}}



// Circular linking is OK:
var ernie={}, bert={};
ernie.bff = bert; bert.bff = ernie;
bert.bff.bff.bff.bff === bert

/*
true
*/






// Deleting destroys links, not objects
delete ernie.bff;
bert;
ernie.bff = bert;

/*
[object Object]
*/



// Passing by reference can have side-effects:
var myCar = {color:'red', wheels:4};

function paint(color) {
    color='blue';
}
paint(myCar.color);//color is a primitive, no change
myCar.color;

/*
red
*/

function paint(obj) {
      obj = {};
    obj.color='blue'
}
paint(myCar);//myCar is an obj and changes!
myCar.color;
var myTruck = {color:'green', wheels:4};
paint(myTruck);
myTruck.color;
/*
blue
*/

/*
blue
*/


// Exercise: how many objects remain?
var a={}; //new Object()
var b=a;
var c={a:a,b:b};
a.c = c;
var d=c.a;
delete c.a;
delete c.b;
a = null;
c = null;


//--- ARRAYS as OBJECTS ---
var arr = []; //empty array;

// Alternative array creation:
var arr = new Array(); // same as []
var arr = new Array(0,1,2); // same as [0,1,2]
var arr = new Array('a'); // same as ['a']
// But beware:
var arr = new Array(3);  // NOT [3]
arr[0]
arr.length

/*
3
*/
// as objects, arrays can have custom properties:
var arr = ['a','b','c'];
arr.flavor = 'banana';
arr;
arr.flavor;
for (var key in arr) {console.log(key)}

/*
banana
*/
// as objects, arrays are compared, copied, and passed as args by reference:
var a = [1];
var b = [1];
a != b;

//copy:
var a = [0,1,2];
var b = a;
a[3]=3;
b;

/*
0,1,2,3
*/
// array arg:
function deleteFirst(array) {
	array[0] = undefined;
}
var arr = ['a','b','c'];
deleteFirst(arr);
arr;

/*
,b,c
*/


// Pseudo array:
var pseu = {0:'a', 1:'b', 2:'c'};
pseu.length = 3;
pseu[0];
pseu[1];
pseu[3]='d';
/*
d
*/
pseu
pseu.length;
/*
3
*/ //wrong

// Real Arrays:
var arr = ['a','b','c'];
arr.length;
/*
3
*/
arr[3] = 'd';
arr.length;
/*
4
*/
arr.length = 10;
arr;
/*
a,b,c,d,,,,,,
*/
arr.length = 1;
arr;
/*
a
*/


// Real Arrays also have built-in...

//--- METHODS ---
// Built in examples:
var array = [0,1,2,3];
array.pop();
/*
3
*/
array
array.push(5);
/*
4
*/
array
/*
0,1,2,5
*/
var longer = array.concat([8,9]);
/*
0,1,2,5,8,9
*/
array
/*
0,1,2,5
*/
array.join();
/*
0,1,2,5
*/




Math.round(1.1);
/*
1
*/
Number.isNaN(12);
/*
false
*/

// Custom method:
var array = [0,1,2];
array.lastIndex = function() {
	return array.length-1;
}
array.lastIndex()

function plus(x,y) {return x+y}
var obj = {};
obj.add = plus;
obj.add(1,2);
obj.add2 = obj.add
obj.add2(1,3)

/*
4
*/
/*
3
*/
/*
2
*/

var array = [0,1,2];
array.lastIndex = function() {
	return array.length-1;
}
array.lastIndex();
// Better:
array.lastIndex = function() {
	return this.length-1;
}


// -- Keyword 'this'--
// Short def: this method's owner.
var duck = {noise:'quack', feet:2};
duck.talk = function(abc) {return this[abc];}
duck.talk('feet');

/*
2
*/
/*
undefined
*/
// Better def: the obj holding the reference we followed to get here.
var dog = {noise:'woof', feet:4};
dog.talk = duck.talk;
dog.talk('noise');
/*
woof
*/
/*
4
*/
/*
undefined
*/
/*
woof
*/
duck.talk();

/*
quack
*/




// Custom array function:
function everyOtherElement(array) {
    var result = [];
    for (var i=0; i<array.length; i+=2) {
      result.push(array[i]);
    }
    return result;
}
// Call:
everyOtherElement([0,1,2,3,4,5])//[0,2,4]

// Now as a method:
var array = [0,1,2,3,4,5];
array.everyOtherElement = function() {
    var result = [];
    for (var i=0; i<this.length; i+=2) {
      result.push(this[i]);
    }
    return result;
}
// Call:
array.everyOtherElement();



//--- OBJECT PATTERNS ---

// Instance: obj groups data related to single entity, plus methods to manipulate itself
var duck = {noise:'quack', feet:2, dampness:'dry'};
duck.swim = function() {this.dampness = 'wet';}
duck.talk = function() {console.log(this.noise);}

var arr = {length:2, 0:'item', 1:'thing'};
arr.push = function(value) {/*...this... */};


// Index: object's keys are data
var myFavoriteSnacks = {cereal:10, fruit:6, toast:5}
var ourTAs = {Matt:true, Tom:true, Erica:true, Lori:true, Chad:{}};


// Toolbox/Namespace: obj groups methods which manipulate other stuff
Math.round;
Math.floor;
Math.ceil;

Number.isNaN;
Number.isFinite;

card.rank;
card.suit;
card.name;


// ---- Toolbox pattern ------
var toolkit = {
    method: function() {
    },

    anotherMethod: function() {
    	//this.method...
    }
}

// ---- Toolbox Example: Currency converter
var exchange = {
    rate: 1.37, //dollars per euro

    toDollars: function(euros) {
		return euros * this.rate;
    },

    toEuros: function(dollars) {
		return dollars / this.rate;
    },

    convert: function(string) {
		if (string[0]==='$')
		    return 'E'+this.toEuros(string.slice(1));
		if (string[0]==='E')
		    return '$'+this.toDollars(string.slice(1));
		return this.toDollars(string);
    }
};
//call:
exchange.convert('$20.00');


// Incremental form:
var exchange = {};
exchange.rate = 1.37;
exchange.toDollars = function(euros) {//...
}
exchange.toEuros = function(dollars) {//...
}
exchange.convert = function(string)  {//...
}


