// Review of THIS

//function myName() {return this.name; }
//var a = {name:'Albert', myName:myName};
//var a = new Object();

var a = {name:'Albert',
         myName: function() {return this.name}
        };
//a.myName = myName;

var b = {name:'b', myName:a.myName};
a.b = b;

a.b.myName();

a.myName(); //'a'
b.myName(); //'b'



fn
fn()








// The 'call' method:
//   "function, lend yourself to an object"

function paintThis(newcolor) {
   this.color = newcolor;
}
var car = {color:'blue', paint:paintThis};
car.paint('red');
car.color //red
/*
red
*/

// another object may borrow it:
var fence = {name:'fence'};
paintThis.call(fence,'red');
// OR
car.paint.call(fence,'red');
// either way:
fence.color //red
Object.keys(fence)
/*
name,color
*/

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
callFunct(doubleVal(1));
/*
NaN
*/


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

/*
undefined
*/

function callFunctLater(fn,arg) {
  for (var i = 0; i<100000000; i++) {
    // just wait
  }
  fn(arg); //do fn when ready (i.e. "call back")
}
callFunctLater(printVal,"done!");

// --- Exercise: Homebaked forEach ---

function callFnOnSomeArray(fn,arr) {
  for (var i = 0; i < arr.length; i++) {
        fn(arr[i]);
  }
}

callFnOnSomeArray(printVal,[1,2,3]);


// again as a method:

function callFnOnThisArray(fn) {
  // as before, but with 'this'
  for (var i =0; i<this.length; i++) {
    fn(this[i]);
  }
}


arr = ['one','two','three','four'];
arr.forEach = callFnOnThisArray;
arr.forEach(printVal);
arr.callFnOnThisArray(printVal);

callFnOnThisArray(printVal)

/*
undefined
*/

// --- Built-in forEach ---
// Array method which acts like for loop


// Predefined callback:

function printDouble(val) {
    console.log(val+val);
    // no return value!
}
var arr = [1,2,3,4,5,6,7];
arr.forEach(printDouble);

/*
undefined
*/










// Inline anonymous callback:

arr.forEach(function (val) {
              console.log(val+val);
            });









// Map:
function doubleVal(val) {
  return val+val;
}
var arr = [1,2,3,4,5,6,7];
var result = arr.map(doubleVal);
result
/*
2,4,6,8,10,12,14
*/
/*
2,4,6,8,10,12,14
*/

arr
/*
1,2,3,4,5,6,7
*/; //unchanged


// Exercise: write map method!

var arr = [1,2,3,4,5,6,7];
arr.map = function(cb) {



  // return something...
}







// --- Sorting --- 


function compare(x,y) {
  //return x-y;
  // More general:
  console.log('x='+x+' y='+y);
  return (x>y)? 1 : -1;
}
function oppositeCompare(x,y) {
  return y-x;
  // More general:
  //return (x>y)? -1: 1;
}
var arr = [5,8,2,4,9,0,11];
var arr = ['one','two','Three','four'];
arr.sort(compare);
/*
0,2,4,5,8,9,11
*/
/*
Three,four,one,two
*/
/*
Three,four,one,two
*/
/*
0,2,4,5,8,9,11
*/
/*
0,2,4,5,8,9,11
*/
/*
0,11,2,4,5,8,9
*/
arr

arr.sort(compare);
arr // 
arr.sort(oppositeCompare);
arr //



