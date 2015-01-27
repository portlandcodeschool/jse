// Review of THIS

function myName() {
  return this.name;
}
var a = {name:'a', myName:myName};
var b = {name:'b', myName:myName};
a.myName(); //'a'
b.myName(); //'b'












// The 'call' method:
//   "function, lend yourself to an object"

// General-purpose paint-myself method:
function paintThis(newcolor) {
   this.color = newcolor;
}

var car {color:'blue', paint:paintThis}
car.paintThis('red');
car.color //red


// another object may borrow it in one-time use:
var fence = {color:'white'};

paintThis.call(fence,'red');
// OR
car.paintThis.call(fence,'red');
// either way:
fence.color //red



//equivalent to temporary attachment:
fence.paint = paintThis; //attach
fence.paint('red');  //use
delete fence.paint;  //detach






// ---- The Global object -----

this

// All global variables are really just properties of global obj:

var one='one',
    two='two',
    three='three';

this.one;
this['two'];


// Therefore they can be deleted:
delete this.one;
one

// Global object also called `window`:

this === window
this === this.window
this === this.window.window.window

// Global object is both an object and a scope;
// its properties are both properties and vars!




//========== FACTORY PATTERN ============




// Review: single instance object...

var rect = {
    l: 0,
    r: 1,
    b: 0,
    t: 2
}
//instance methods:
rect.width = function() {
    return this.r - this.l;
}
rect.height= function() {
    return this.t - this.b;
}
rect.area = function() {
    return this.width() * this.height();
}
rect.move = function(moveX, moveY) {
    this.l += moveX;
    this.r += moveX;
    this.t += moveY;
    this.b += moveY;
    return;
}







// EXERCISE: Make a Rectangle factory:
function makeRect(l,r,b,t) {

  // make a new object (a rectangle instance) whose properties store data
  // ...

  // define and attach any instance methods it needs
  // ...


  return //rectangle object with instance methods already installed
}

// Usage:
var rect1 = makeRect(0,0,1,2);
var rect2 = makeRect(1,1,4,3);

rect1.area(); //--> 2
rect2.move(-1,-1); // -->  0,0,3,2









// Summary: Factory Pattern with Personal Methods:
function factory(inits) {
  var instance = { /* properties needing inits */ };
  instance.method = function() { /*...*/ }
  //...
  return instance;
}

var instance = factory(/*details*/);
instance.method();








// ---- Alternative: Have instances share methods! ------


// Factory Pattern with Shared Methods:
function factory(inits) {
  var instance = {};
  instance.method = factory.method;
  //...
  return instance;
}

factory.method = function() {
  // this means instance
}

var instance = factory(/*details*/);
instance.method();









// EXERCISE: Rewrite makeRect so that rect instances share methods

function makeRect(l,r,b,t) {

  // make a new object (a rectangle instance) whose properties store data
  // ...

  // assume methods are already defined and attached to factory;
  // just link them to the instance as instance properties
  // ...


  return //rectangle object with instance methods already installed
}

// Satisfy expectations by writing shared methods:
makeRect.height = function() {
  //...
}

makeRect.width = function() {
  //...
}

makeRect.area = function() {
  //...
}

makeRect.move = function() {
  //...
}

// Usage:
var rect1 = makeRect(0,0,1,2);
var rect2 = makeRect(1,1,4,3);

rect1.area(); //--> 2
rect2.move(-1,-1); // -->  0,0,3,2





// ============ Callbacks ============

// Since functions are just objects, they can be passed as arguments...


// define some action:
function doubleVal(val) {
  return val+val;
}

// trigger action directly:
doubleVal(7);


// trigger action indirectly:
function callFn(fn) {  //<--- fn is a callback!
  //... maybe do something first...
  return fn();
}
callFn(doubleVal); //<--- supply a fn argument


function callFnWithArg(fn,arg) {//<-- expects callback parameter fn plus another arg
  return fn(arg);//<-- call fn, give it arg
}
callFnWithArg(doubleVal,1);
callFnWithArg(doubleVal,"1");



// Callbacks with only side-effects

function printDouble(val) {
  console.log(val+val);
  // no return value!
}

function callFnWithSideEffect(fn,arg) {
  fn(arg);
}
callFnWithSideEffect(printDouble,'hello');//<-- fn supplied as callback


function callFnLater(fn,arg) {
  for (var i = 0; i<100000000; i++) {
    // just wait
  }
  fn(arg); //do fn when ready (i.e. "call back")
}
callFnLater(printDouble,"done!");











// --- EXERCISE: Homebaked forEach ---

function callFnOnSomeArray(fn,arr) {
  // call fn on every element of arr...

  //  ...
}

var arr = [1,2,3,4];
callFnOnSomeArray(printDouble,arr);










// --- EXERCISE: forEach as a method: ---

function callFnOnThisArray(fn) { //<-- arr is owner, not needed as parameter
  // as before, but with 'this'

  //...
}


var arr = [1,2,3,4];
arr.forEach = callFnOnThisArray; //attach as 'forEach' method
arr.forEach(printVal);








// --- Built-in Array.forEach() ---
// Array method which acts like for loop


// Predefined callback:
function printDouble(val) {
    console.log(val+val);
    // no return value!
}
var arr = [1,2,3,4,5,6,7];
arr.forEach(printDouble);









// Inline anonymous callback:
arr = [1,2,3,4,5,6,7];
arr.forEach(function (val) {   //<-- callback is anonymous function defn
              console.log(val+val);
            });











// --- Built-in Array.Map() ----
function doubleVal(val) {
  return val+val;
}

arr.map(doubleVal);

arr; //<--unchanged









// EXERCISE: write map method!

var arr = [1,2,3,4,5,6,7];
arr.map = function(cb) {
  // loop over all elements of the array,
  //  and use cb to generate a corresponding output value

  //...

  // then return a new array of the output values
  //...

}







// --- Sorting --- 

// Needs callback function which, given pair of vals (x,y),
//  returns a number showing which is "bigger"
//  (i.e. which comes later in the sequence)

// positive --> x follows y
// negative --> y follows x
// zero --> order doesn't matter

function compare(x,y) {
  return x-y;
  // More general:
  //return (x>y)? 1 : -1;
}
function oppositeCompare(x,y) {
  return y-x;
  // More general:
  //return (x>y)? -1: 1;
}
var arr = [5,8,2,4,9,0,1];
arr.sort(compare); //<--- changes arr
arr // 
arr.sort(oppositeCompare);
arr //







// To see what's going on...

function verboseCompare(x,y) {
  console.log('Comparing '+x+' and '+y+'...');
  return x-y;
}

var arr = [5,8,2,4,9,0,1];
arr.sort(verboseCompare);
arr







