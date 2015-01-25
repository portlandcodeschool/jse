// Challenge:
// Write a spell-checker!
// Write a function checkSpelling(str) which returns a string equal to str
// except that any unknown word is marked with #'s.


// As a group: before you code anything, discuss the general strategy,
// then outline the propsal in pseudo code (i.e. ordinary language).
/*

Obtain dictionary/word list
  Array of words
   Multiples arrays, by initial letter?
  Magic
   API MW...
  *Object whose keys are words (values?)

Break up string into words: (F?)
  string.split(delim)

Loop: with each word...
  Given some word, is it valid? (F!)
    Break word into letters
  
  If a word fails, mark(?) it
   Replace with alternative?
  I.e. if word ok, then use same
  else replace with #+word+# (F?)
  
Reassemble string (F)

Return result
*/
// The dog #rhn# #fust#.

var dict = {dog:1, cat:1, the:1, run:1, fast:1};

function isWord(word) { //boolean
  //defense here
  //assert(typeof word === 'string')
  return (word.toLowerCase() in dict);
  //return dict[word]? true : false;
}

function tagWord(word) {
  return '#'+word+'#'; 
}

function checkSpelling(str) {
  //str = str.toLowerCase();
  var words = str.split(' ');
  
  for (var i=0; i<words.length; ++i) {
    var word = words[i];
    if (!isWord(word)) {
      words[i] = tagWord(word);
    }
  }
  
  return words.join(' ');
}


checkSpelling("The doG rhan vwEry fast");

/*
The doG #rhan# #vwEry# fast
*/
/*
the dog #rhan# #vwery# fast
*/
/*
the dog #rhan# #vwery# fast
*/
/*
the dog #rhan# #vwery# fast
*/








// Functions are objects!



// Alternative creation syntax:

// Function declaration:
function plus(x,y) { return x+y;}


// Function expression:
var plus = function(x,y) { return x+y;}


// Function expression with "constructor"
var plus = new Function('x','y','return x+y;');






f(obj) // What does it mean?








f(f)  // What about this?










//EXERCISE: predict the outcome of:
var Z = function (verb) {
  return verb(verb);
  return id;
} 
var id = function (x) {
  return x;
}
Z(id)(3); // <<equals what?
id(3)

Z(id) === id
/*
true
*/
/*
3
*/








f(f)

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
  return boo;
}
//[Fig0]
someFn; //OK
typeof someFn; //OK
var alias = someFn; //ok

alias



someFn()



// Scope generation:

function plus(x,y) { return x+y; } //[FIG 1a]
// call it, creating scope:
var sum = plus(1,2); //[FIG 1b]
// call again, creating another scope:
sum = plus(3,4); //[FIG 1c]



// Closure/ Lexical Context:
//   Scope where function was born (defined)
// [Fig 2]








// Resolving non-local variables via closure:


var x=0;
function plusX(y) { // y is local
    return x+y; // x is not
} //[FIG3a]
x = plusX(1); //[FIG3b]
x = plusX(5); //[FIG3c]
x















// Variable Shadowing:

var x = 1;
function outerA() {
  var x=2;  // local x shadows global
  return x;
} //[FIG4a]
outerA() //2 [FIG4b]













// Nested calls don't change closure:


var x = 1;
function outerA() {
  var x = 2;
  return outerB();
}

//[FIG5a]
outerB() //1 [FIG5b]
outerA() //1 [FIG5c]













// Defining a nested function:

function outer() {
  function inner() {sdfgklgdfsjk}
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


function inner() {
  return x;
}


var x = 1;
function outer() {
  //
  var x = 2;
  function inner() {
    return x;
  }
  return inner();
}  // [Fig8a]
var y = outer() //2 [Fig8b]

















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




