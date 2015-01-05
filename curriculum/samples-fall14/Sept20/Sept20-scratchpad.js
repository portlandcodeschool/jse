// Functions are objects!



// Alternative creation syntax:

// Function declaration:
function plus(x,y) { return x+y;}


// Function expression:
var plus = function(x,y) { return x+y;}


// Function expression with "constructor"
obj = new Object();
arr = new Array();
var plus2 = new Function('x','y','return x+y;');

plus2(1,2)















f(obj) // What does it mean?






f(f)  // What about this?






function f(obj) {  // f --> paintObjBlue
  obj.color = 'blue';
}

function f(obj) {  // f --> wrapObj
  return {inner:obj};
}

function f(obj) {  // f --> getKeysOf
  return Object.keys(obj);
}

function f(obj) { // f --> isFunction
  return (typeof obj === 'function');
}








//--------------------
// Time course of functions...


// Deferred evaluation:
function someFn() { 
	blahblahblah;
	yap+yiddle+fiddle+faddle;
	oogity(boogity);
}
//[Fig0]
someFn; //OK
typeof someFn; //OK
var alias = someFn; //ok
someFn();

/*
Exception: blahblahblah is not defined
someFn@Scratchpad/1:2:1
@Scratchpad/1:1:1
*/







// Scope generation:

function plus(x,y) { return x+y; } //[FIG 1a]
// call it, creating scope:
var sum = plus(1,2); //[FIG 1b]
// call again, creating another scope:
sum = plus(3,4); //[FIG 1c]



// Closure/ Lexical Context:
//   Scope where function was born
// [Fig 2]








// Resolving non-local variables via closure:


var x=0;
function plusX(y) { // y is local
    return x+y; // x is not
} //[FIG3a]
x = plusX(1); //[FIG3b]
x = plusX(5); //[FIG3c]
















// Variable Shadowing:

var x = 1;
function outerA() {
  var x=2; // local x shadows global
  return x;
} //[FIG4a]
outerA() //2 [FIG4b]
x

/*
2
*/












// Nested calls don't change closure:


var x = 1;
function outerA() {
  var x = 2;
  return outerB();
}
function outerB() {
  return x;
}  //[FIG5a]
outerA() //1 [FIG5c]

outerB() //1 [FIG5b]













// Defining a nested function:

function outer() {
  function inner() {akdgsklasjkbagrkbafgs}
} //[Fig6a]
// So far, only outer is built
outer(); //[Fig6b]
// Now: both built, only outer has scope










// Calling a nested function:


function outer() {
  function inner() {}
  return inner();
}  //[Fig7a]
outer(); // [Fig7b]







// Nested function with shadowing:


var x = 1;
function outer() {
  var x = 2;
  function inner() {
    return x;
  }
  return inner();
}  // [Fig8a]
var y = outer() //2 [Fig8b]


// Returning a function:

var x = 1;
function outer() {
  var x = 2;
  function inner() {
    return x;
  }
  return inner;
}  // [Fig9a]

var y = outer() //2 [Fig9b]

y()

/*
2
*/












// Meaning of THIS

function myName() {return this.name; }
var a = {name:'a', myName:myName};
var b = {name:'b', myName:myName};
a.myName(); //'a'
b.myName(); //'b'















// The 'call' method:


function paintThis(newcolor) {
   this.color = newcolor;
}
var car {color:'blue', paint:paintThis}
car.paintThis('red');
car.color //

// another object may borrow it:
var fence = {color:'white'};
paintThis.call(fence,'red');
// OR
car.paintThis.call(fence,'red');
// either way:
fence.color //red

//equivalent to:
fence.paint = paintThis;
fence.paint('red');
delete fence.paint;



















// Callbacks:

function callFunct(fn) {
  return fn();
}
function callFunctWithArg(fn,arg) {
  return fn(arg);
}














var result = {};
function addPair(key) {
    result[key] = key;
}
var keys = ['one','two','three','four'];
keys.forEach(addPair);













result={};
keys.forEach(function (key) {
              result[key]=key;
            });













function addPairToObj(key,obj) {
    obj[key] = key;
}
var obj = {};
keys.forEach(function (key) {
              addPairToObj(key,obj);
            });












function compareNums(x,y) {
  return x-y;
}
var arr = [5,8,2,4,9,0,1];
arr.sort(compareNums);
arr // 




