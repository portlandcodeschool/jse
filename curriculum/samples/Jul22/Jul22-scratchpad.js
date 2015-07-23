/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */
var n;
function double(n) {
  return n+n;  
}

var double = function(n) {
  var quad = n*4%1;
  return n+n; 
  //more code...
}

function double2(n) {
  return [n,n+n];
}

var total = double2('banana');
console.log(total)


function doArrayThing(array) {
  return array[0]+array[array.length-1];
}



doArrayThing([1,2,4,6,9])
/*
10
*/



function square(number){
  return number*number;
  //return Math.pow(number,2)
}

function mean(nums) {
  var sum=0;
  for (var i=0; i<nums.length; i++) {
    sum+=nums[i];
  } 
  return sum/nums.length
}



var wordNum = function(int) {
  var words = ['one','two','three'];
  for (var i=0; i<11; i++) {
    if (int === i) {
      return words[i-1];
    }
  }
}

var wordNum = function(int) {
  var words = ['one','two','three'];
  return words[int-1];
}
 
var wordNum = function(int) {
  var words = ['zero','one','two','three'];
  if (int<11) {
    return words[int];
  } else {
    return "Error!"
  }
  return words[int];
}

var avg = mean([2,4,7,-1]);
//var avg = 3;
var sqr = square(avg)
var word= wordNum(sqr)
console.log(word)


console.log(wordNum(square(mean([2,4,7,-1])))) 
console.log('nine') 
(1+(2+3))
(1+5)


function myPush(array,value) {
  array[array.length]= value;
  return array.length;
}

function muyPush(array,values) {
  
}

