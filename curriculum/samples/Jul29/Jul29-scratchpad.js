/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

var fruits = {
  banana:'yellow',
  apple:'red'
}
fruits.orange = 'orange'
fruits.pear + 1

pear


var table = {
  david: { hobby:'chess'},
  matt: {shirt:'black'}
}

function whoHasKey(table,key) {
  var name;
  for (name in table) {
    if (key in table[name])
       return name;
  }
  return '';
}
       
whoHasKey(table,'shirt');
/*
matt
*/


var a = {};
var b = {};

a==b
/*
false
*/
a===b


var duck = {feet:2, noise:'quack'};

   var nest = {mama: {feet:2, noise:'quack'}}
   
   
   
   
var myCar = {color:'red', wheels:4};

function paint(color) {
    color='blue';
}
paint(myCar.color);//color is a primitive, no change



function paint(obj) {
    obj.color='blue'
}
paint(myCar);//myCar is an obj and changes!



var rect = {
	width:2,
	height:1
}
function area(rect) { //needs target object as argument
	return rect.width * rect.height;
}
var answer = area(rect);


var rect2 = {
	width:1,
	height:2,
	area: function() { //no target arg needed
		return this.width * this.height;
	}
};
answer = rect1.area();