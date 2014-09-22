// Review of THIS

function myName() {return this.name; }
var a = {name:'a', myName:myName};
var b = {name:'b', myName:myName};
a.myName(); //'a'
b.myName(); //'b'












// The 'call' method:
//   "function, lend yourself to an object"

function paintThis(newcolor) {
   this.color = newcolor;
}
var car {color:'blue', paint:paintThis}
car.paintThis('red');
car.color //red

// another object may borrow it:
var fence = {color:'white'};
paintThis.call(fence,'red');
// OR
car.paintThis.call(fence,'red');
// either way:
fence.color //red

//equivalent to temporary attachment:
fence.paint = paintThis;
fence.paint('red');
delete fence.paint;







// Functions are objects!





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

















// Callbacks:

function doubleVal(val) {
  return val+val;
}


function callFunct(fn) {  //<--- fn is a callback!
  return fn();
}
callFunct(doubleVal);


function callFunctWithArg(fn,arg) {
  return fn(arg);
}
callFunctWithArg(doubleVal,1);
callFunctWithArg(doubleVal,"1");

// Callbacks with only side-effects

function printVal(val) {
  console.log(val);
  // no return value!
}

function callFunctWithSideEffect(fn,arg) {
  fn(arg);
}

callFunctWithSideEffect(printVal,'hello');


function callFunctLater(fn,arg) {
  for (var i = 0; i<100000000; i++) {
    // just wait
  }
  fn(arg); //do fn when ready (i.e. "call back")
}
callFunctLater(printVal,"done!");

// --- Exercise: Homebaked forEach ---

function callFnOnSomeArray(fn,arr) {



}

callFunctOnSomeArray(printVal,[1,2,3]);


// again as a method:

function callFnOnThisArray(fn) {
  // as before, but with 'this'


}


arr = ['one','two','three','four'];
arr.forEach = callFnOnThisArray;
arr.forEach(printVal);




// --- Built-in forEach ---
// Array method which acts like for loop


// Predefined callback:

function printDouble(val) {
    console.log(val+val);
    // no return value!
}
var arr = [1,2,3,4,5,6,7];
arr.forEach(printDouble);











// Inline anonymous callback:

arr.forEach(function (val) {
              console.log(val+val);
            });









// Map:
function doubleVal(val) {
  return val+val;
}

arr.map(doubleVal);

arr; //unchanged


// Exercise: write map method!

var arr = [1,2,3,4,5,6,7];
arr.map = function(cb) {



  // return something...
}







// --- Sorting --- 


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
arr.sort(compare);
arr // 
arr.sort(oppositeCompare);
arr //



