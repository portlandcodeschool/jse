

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

/*
8
*/



// No intrinsic names
// The table above has no record of being called either 'myRoom' or 'yourRoom'



// Nesting means linking:
var duck = {feet:2, noise:'quack'};
var nest = {mama:duck};





// Circular linking is OK:
var ernie={}, bert={};
ernie.bff = bert; bert.bff = ernie;
ernie.bff.bff.bff.bff === ernie

/*
[object Object]
*/




// Deleting destroys links, not objects
delete ernie.bff;
bert;
bert.bff.bff 

/*
undefined
*/




// Passing by reference can have side-effects:
var myCar = {color:'red', wheels:4};

function paint(color) {
    //color='blue';
    console.log(color);
}
paint(myCar.color);//color is a primitive, no change

/*
undefined
*/


function paint(obj) {
    obj.color='blue'
}
paint(myCar);//myCar is an obj and changes!
paint(myCar);//myCar is an obj and changes!
paint(myCar);//myCar is an obj and changes!

myCar.color

/*
blue
*/





// --- PROPERTIES vs. VARIABLES ---

// Vars: live in a scope ("execution context")
// Props: live in an object


// Vars: must be declared with `var`
// Props: are created by assignment
var obj = {};
obj.prop = 1;


// Vars: need no prefix
// Props: must be prefixed with variable


// Vars: cause an error if not declared
// Props: return undefined if not declared


// Vars: have naming restrictions
// Props: can be named with any string


// Vars: last until their scope expires
// Props: may be deleted manually


new Object()
 {}

var obj = {a:1, b:2, g:6}
Object.keys(obj)
/*
a,b,g
*/

for (var key in obj) {
    var val = obj[key];
}

var objkeys = Object.keys(obj);
for (var i=0 ; i<objkeys.length ; ++i ) {
      console.log(obj[objkeys[i]]);
}
/*
Exception: Object.key is not a function
@Scratchpad/1:2:12
*/

//--- FUNCTIONS as OBJECTS ---


// definition:
function fun() {}

// use/call:
fun();  //<-- call operator ()

// mention:
fun;







// Function definition syntax alternatives:

// function declaration:
function echo(x) { return x; }; // implicitly creates var echo

// function expression:
var echo = function(x) { return x; };

// new Function:
var echo = new Function('x','return x;');  //rarely used
var obj = new Object();
var arr = new Array();


// use vs. mention:

echo();  //<-- call operator ()

echo;

// Mention allows aliasing:
var repeat = echo;
repeat('me');

var repeat = echo('');


// Functions can have properties!
function hello(name) {
    console.log("Hello, "+name);
}

hello.length;
/*
1
*/
hello.flavor = 'banana';





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
arr.flavor



// as objects, arrays are compared, copied, and passed as args by reference:
var a = [1];
var b = [1];
a != b;

//copy:
var a = [0,1,2];
var b = a; //alias
a[3]=3;
b; //also changed
/*
0,1,2,3
*/
a===b
a==b

// array arg:
function deleteFirst(array) {
	array[0] = undefined;
}
var arr = ['a','b','c'];
deleteFirst(arr);
arr; 
/*
,b,c
*///argument arr has been changed!




// Pseudo array:
var pseu = {0:'a', 1:'b', 2:'c'};
pseu.length = 3;
pseu[0];
pseu[1];
pseu[3]='d';
pseu.length;
/*
3
*/ //wrong; don't automatically track new elements


// Real Arrays:
var arr = ['a','b','c'];
arr.length;
arr[3] = 'd';
arr.length;
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
array.concat([8,9]);
/*
0,1,2,5,8,9
*/
array
/*
0,1,2,5
*/
var str = array.join(' ');
typeof str
str

/*
0 1 2 5
*//*
0 1 2 5
*/



// More familiar methods:
Math.round(1.1);
Math.sqrt(4);
Number.isNaN(12);
console.log();


// Objects can have objects as property values...
// Functions are objects!...
// Therefore objects can have functions as property values.

// A method is just property of an object which happens to be a function.
// I.e. a function which has an owner-object.


// Custom method:
var array = [0,1,2];
array.lastIndex = function() { // <-- function expression (no name)
	return array.length-1;
}
array.lastIndex()
/*
2
*/

// Better:
array.lastIndex = function() {
	return this.length-1;
}



// -- Keyword 'this'--
// Short definition: this method's owner.
var duck = {noise:'quack', feet:2};
duck.talk = function() {
    console.log(this.noise);
}
duck.talk(duck.feet);


/*
undefined
*/

// Better definition: the obj holding the reference we followed to get here.
var dog = {noise:'woof', feet:4};
dog.talk = duck.talk;
dog.talk();  // `this` means dog
/*
undefined
*/
duck.talk(); // `this` means duck

/*
undefined
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


//---- INSTANCE pattern ----
//The object represents one of a population of similar things,
//  groups together related data.
//Its properties are both nouns (data) and verbs (methods) which operate on its data.
//The property names are (usually) fixed, accessed with dot operator.
//All instances of the population typically have the same properties.



var spot = {species:'dog', noise:'woof', weight:100};

spot.talk = function() {
    console.log(this.noise);
}
spot.feed = function(amt) {
    this.weight += amt;
}


var fluffy = {species:'cat', noise:'purr', weight:50};
//shared methods:
fluffy.talk = spot.talk;
fluffy.feed = spot.feed;
fluffy.talk()
fluffy.feed(10)
fluffy.weight

//---
// EXERCISE:
// make a rectangle instance object!
// give it data properties of: left, right, top, bottom
var rect = {
    l: 0,
    r: 1,
    b: 0,
    t: 2
    //data ...
}
// give it four methods:
rect.width = function() {
    return this.r - this.l;
    //something ...
}
rect.height= function() {
    return this.t - this.b;
    //something ...
}
rect.area = function() {
    return this.width() * this.height();
    //something ...
}
rect.move = function(moveX, moveY) {
    this.l += moveX;
    this.r += moveX;
    this.t += moveY;
    this.b += moveY;
    // change its data properties...
    return; //no value needed
}





//---- INDEX pattern ----
//Object represents a population of things;
//Property keys ARE data: names/words which are not known in advance; require [] to access.
//Property values may be uniform/trivial, individual primitives, or individual objects.


//property vals are trivial:
var ourTAs = {Tom:true, Matt:true, Mike:true, Dallas:true};

//property vals are individual primitives:
var officeHoursDay = {Tom:'Thurs', Matt:'Tues', Mike:undefined, Dallas:'Sat'};
var whoHasHours = {Sun:'Dan', Tues:'Matt', Thurs:'Tom', Sat:'Dallas'};

//property values are objects:
var myPets = {"Spot": spot, "Fluffy": fluffy}; //property vals are objects

function feedCritters(pets) {
    for (var name in pets) {
        console.log("Feeding " + name);
        pets[name].feed(15); // <<-- need [], not .
    }
}
feedCritters(myPets)


// ---- TOOLKIT / NAMESPACE pattern ----
// Object serves as bundle of related services and shared resources.
// Only one of each toolset.
// Properties are mostly verbs/methods.
// Verbs are intended to manipulate *other* data, not toolbox itself

// Familiar examples:
Math.round;
Math.floor;
Math.ceil;
Math.log;
console.log

Number.isNaN;
Number.isFinite;

//In HW3:
card.rank;
card.suit;
card.name;


// Toolbox Example 1: Rectangle Calculator
var rect1 = {left:0, bottom:0, right:2, top:1}, // instance objects
    rect2 = {left:0, bottom:0, right:1, top:3}


var Rectangle = {

    width : function(rect) { //<-- needs object parameter
        //...
        return rect.right - rect.left;
    },

    height : function(rect) {
        //...
    },

    area : function(rect) {
        var h = this.height(rect),
            w = this.width(rect);
        //      ^^^^ 'this' is the toolkit, not the rect
        //  calls other tools in box through 'this'
        return (h*w);
    },

    move : function(rect, moveX, moveY) {
        //...
        rect.left += moveX;
        rect.right += moveX;
        rect.top += moveY;
        rect.bottom += moveY;
    }

}


Rectangle.area(rect1);
Rectangle.area(rect2);

// ---- Toolbox Example 2: Currency converter
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





