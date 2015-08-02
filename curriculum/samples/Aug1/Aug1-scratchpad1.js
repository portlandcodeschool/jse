/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function shout(str) {
    var output = str.toUpperCase()+'!';
    console.log(output);
    return output;
}

function spell(str) {
    var output = str.split('').join('...');
    console.log(output);
    return output;
}

function withThird(array,callback) {
    for (var i=0; i<2; ++i)
        console.log(array[i]);
    callback(array[i]);
}

function withThirdFromEnd(array,callback) {
    for (var i=array.length-1; i>array.length-3; --i) {
        console.log(array[i]);
    }
    callback(array[i]);
}


var fruits = ['apple','banana','cranberry','plum'];

withThird(fruits,shout);
withThird(fruits,spell);

withThirdFromEnd(fruits,shout);
withThirdFromEnd(fruits,spell);

fruits.forEach(shout)
fruits.forEach(spell)



function forEach(callback) {
  for (var i=0; i<this.length; ++i) {
    callback(this[i])
  }
}
forEach(fruits,shout)

fruits.forEach = forEach;


fruits.forEach(shout);


function strLen(str) {
   return str.length;
}

var lens  = fruits.map(strLen);

var nums = [4,5,7,2,9];
function double(num) {
  return num+num;
}

var doubles = fruits.map(double)


function map(array,callback) {
  var newArray = [];
  for (var i=0; i<array.length; ++i) {
    newArray.push(callback(array[i]))
  }
  return newArray;
}

map(fruits,double)
/*
appleapple,bananabanana,cranberrycranberry,plumplum
*/


