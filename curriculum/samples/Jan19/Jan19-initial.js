// Objects!


// Incremental creation:

var duck = new Object(); //make empty object

// fill it with properties:
duck.noise = 'quack';
duck.feet = 2;
duck.canSwim = true;
duck.canWalk = true;
duck.canFly = true;

// what is it?
typeof duck;



// Empty-object creation alternatives:
// Preferred:
var duck = {};
var duck = new Object();
// Slang (avoid):
var duck = new Object;
var duck = Object();



// Object-literal notation
var duck = {noise:'quack', feet:2, canSwim:true, canWalk:true, canFly:true}

// With embedded expressions
var duck = {noise:'qu'+'ack', feet:(1+1)}

// Literal plus incremental:
duck.canWalk = true;
duck.canSwim = true;


//-------
// Nested objects:
var nest = {mama:{noise:'quack',feet:2,canSwim:true}}

// equivalent to:
var duck = {noise:'quack',feet:2,canSwim:true};
var nest = {mama:duck};

//equivalent to:
var duck = new Object();
duck.noise='quack';
//etc...
var nest = new Object();
nest.mama = duck;






//Accessing object members...
//via dot notation: obj.key
var duck ={noise:'quack', feet:2};
duck.noise //'quack'
duck.feet //2
duck.feet = 1;
// It's just an operator...
duck.feet++; //two funnelled operators!

//via index notation: obj[keyExpr]
duck['noise'] //'quack'
duck['feet'] //2
duck['feet']=3;
duck['feet']--;  //two funneled operators!



// Membership chains:
nest.mama.noise
nest['mama']['noise']
nest['mama'].feet


//--- Member/property deletion:
delete duck.noise;


//--- Listing properties: for...in

var duck={noise:'quack',feet:2};
for (var key in duck) {
    console.log('key='+key+' val='+duck[key]);
}


// Exercise: Objectify thyself!
// 1) Create an object representing yourself, with three properties of your choice.
//      Share your object with your group/table.
// 2) Create a wrapper object for your entire table.  Its keys will be the names of all people
//      and the values will be the objects for each person.
// 3) Using the table name, print one property of each person.  Use the dot operator (.) to access properties.
// 4) Print a different property of each person using the index operator ([]).










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
// These look the same, but...
a==b;  //nope
a===b; //nope



// Object assignment means aliasing/sharing:
var myRoom = {where:'PCS', tables:9};
var yourRoom = myRoom;
myRoom.tables--;
yourRoom.tables;




// No intrinsic names
// The table above has no record of being called either 'myRoom' or 'yourRoom'



// Nesting means linking:
var duck = {feet:2, noise:'quack'};
var nest = {mama:duck};





// Circular linking is OK:
var ernie={}, bert={};
ernie.bff = bert; bert.bff = ernie;






// Deleting destroys links, not objects
delete ernie.bff;
bert;




// Passing by reference can have side-effects:
var myCar = {color:'red', wheels:4};

function paint(color) {
    color='blue';
}
paint(myCar.color);//color is a primitive, no change



function paint(obj) {
    obj.color='blue'
}
paint(myCar);//myCar is an obj and changes!












// Exercise:
var a={};
var b=a;
var c={a:a,b:b};
a.c = c;
var d=c.a;
delete c.a;
delete c.b;
a = null;
c = null;
// How many objects now remain?






//--- ARRAYS as OBJECTS ---

var arr = []; //empty array;

// Alternative array creation:
var arr = new Array(); // same as []
var arr = new Array(0,1,2); // same as [0,1,2]
var arr = new Array('a'); // same as ['a']
// But beware:
var arr = new Array(3);  // NOT [3]


// as objects, arrays can have custom properties:
var arr = ['a','b','c'];
arr.flavor = 'banana';
arr;



// as objects, arrays are compared, copied, and passed as args by reference:
var a = [1];
var b = [1];
a != b;

//copy:
var a = [0,1,2];
var b = a; //alias
a[3]=3;
b; //also changed

// array arg:
function deleteFirst(array) {
	array[0] = undefined;
}
var arr = ['a','b','c'];
deleteFirst(arr);
arr; //argument arr has been changed!




// Pseudo array:
var pseu = {0:'a', 1:'b', 2:'c'};
pseu.length = 3;
pseu[0];
pseu[1];
pseu[3]='d';
pseu.length; //wrong; don't automatically track new elements


// Real Arrays:
var arr = ['a','b','c'];
arr.length;
arr[3] = 'd';
arr.length;
arr.length = 10;
arr;
arr.length = 1;
arr;



// Real Arrays also have built-in...

//--- METHODS ---
// Built in examples:
var array = [0,1,2,3];
array.pop();
array.push(5);
array.concat([8,9]);
array.join(' ');



// More familiar methods:
Math.round(1.1);
Math.sqrt(4);
Number.isNaN(12);
console.log();





// Custom method:
var array = [0,1,2];
array.lastIndex = function() {
	return array.length-1;
}

// Better:
array.lastIndex = function() {
	return this.length-1;
}



// -- Keyword 'this'--
// Short def: this method's owner.
var duck = {noise:'quack', feet:2};
duck.talk = function() {
    console.log(this.noise);
}
duck.talk();

// Better def: the obj holding the reference we followed to get here.
var dog = {noise:'woof', feet:4};
dog.talk = duck.talk;
dog.talk();  // `this` means dog
duck.talk(); // `this` means duck





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
var ourTAs = {Matt:true, Tom:true, Erica:true, Lori:true, Chad:true};


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


