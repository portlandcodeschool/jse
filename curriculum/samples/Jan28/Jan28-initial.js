

// REVIEW:

// A callback is an ordinary function whose action is deferred until later
//  by passing it as an argument to another function which eventually triggers the callback.


// Sometime the receiver function will trigger the callback multiple times,
// as with Array.forEach(cb).


// --- Previous Exercise Solution: forEach as a method: ---

function printDouble(val) {
  console.log(val+val);
  // no return value; side-effect only!
}

function callFnOnThisArray(fn) { //<-- arr is owner, not needed as parameter
  // as before, but with 'this'
  for (var i=0; i<this.length; i++) {
    fn(this[i]);
  }
}

var arr = [1,2,3,4];
arr.forEach = callFnOnThisArray; //attach as 'forEach' method
arr.forEach(printDouble);


// Built-in forEach:
var arr = [1,2,3,4,5,6,7];
arr.forEach(printDouble);

// Inline callback:
arr.forEach(function (val) {
  console.log(val+val);
});

// END REVIEW


// ---- Variant: Array.map -----
// collect return values from callback and
// build a new array with them...

function doubleVal(val) {
  return val+val;
}

var doubles = arr.map(doubleVal);
console.log(doubles);

//Inline version:

var triples = arr.map(function(val) {
  return val+val+val;
});
console.log(triples);
console.log(arr); //<--unchanged



// Do exercises in pairs or trios...

// EXERCISE 1: write map method!

var arr = [1,2,3,4,5,6,7];
arr.map = function(cb) {
  // loop over all elements of the array,
  //  and use cb to generate a corresponding output value

  //...

  // then return a new array of the output values
  //...

}

var doubles = arr.map(doubleVal);





// EXERCISE 2: use built-in array.map to rewrite
// the earlier spell-checker

// Here's the old code:
var dict = {dog:1, cat:1, the:1, run:1, fast:1};

function isWord(word) { //boolean
  return (word.toLowerCase() in dict);
}

function tagWord(word) {
  return '#'+word+'#'; 
}

function checkSpelling(str) {
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

// Rewrite checkSpelling() to use map instead of a loop...

function checkSpelling(str) {

  //...

}


// Optional: map() and forEach() with extra arguments

// If your callback accepts a second argument,
//   it will be the index within the array:

function printValueAndPosition(val,i) {
  console.log('The value at '+i+' is '+val);
}
var arr = ['a','b','c','d','e','f'];
arr.forEach(printValueAndPosition);

// If it accepts a third argument,
// it will be the array itself:

function doubleOriginal(val,i,arr) {
  arr[i] = val+val;
}
var arr = ['a','b','c','d','e','f'];
arr.forEach(doubleOriginal);

console.log(arr); //<-- changed!





// --- Array Sorting --- 

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

// sort() samples a bunch of pairs from the array,
// only as many as needed to completely determine ordering.



// Optional (but helpful for HW4 #2):
// array adapter object:


var stack = {
  array: [], // stack CONTAINS an array but is not one itself

  pop: function() {
    return this.array.pop();
  },

  push: function(val) {
    return this.array.push(val);
  },

  map: function(callback) {
    return this.array.map(callback);
  }
}

stack.push('a');
stack.push('b');
stack.push('c');
stack.map(doubleVal); //<-- returns doubled copy of stack.array
stack.pop();

// But can't shift/unshift at beginning:
stack.shift //undefined

// Result is object which has only certain powers of an array.
// HW4, problem 2 does something similar to create "deque" object


// EXERCISE: add a `sortDescending()` method to stack
stack.sortDescending = function() {// no argument!

  //...
}

