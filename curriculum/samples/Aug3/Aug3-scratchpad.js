/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function plus(a,b) {
  return a+b;
}
plus = 5;


function someFn() { 
	blahblahblah;
	yap+yiddle+fiddle+faddle;
	oogity(boogity);
}
/*
function paint(obj) {
    obj.color = 'red';
}
var recolor = paint;
*/

function paint() {
    this.color = 'red'
}
var recolor = paint;

var obj = {};
obj.paint = paint;

obj.paint();
paint();



function paint(obj) {
    obj.color = 'red';
}
var paint = function(obj) {
     obj.color = 'red';
}


var objs = [{name:'fence'},{name:'car'},{name:'bicycle'}];
objs.forEach(paint)
objs

objs.forEach(function(element){
  element.color = 'blue'
})

//var obj = {color:'blue'}
var paint = function(obj) {
     obj.color = paint.color;
}
paint.color = 'mauve';
paint(objs[0]);


var paint = function(obj) {
     obj.color = paint.color;
}
paint.useColor = function(color) {
  paint.color = color;
}
paint.useColor('turquoise')
paint(objs[2])




var dog = {
	noise:'woof'
}
function talk(who) { //needs target object as argument
	console.log(who.noise);
}
talk(dog);


var dog = {
  noise:'woof',
  talk: function() {
    console.log(this.noise);
  }
}
dog.talk()

var dog = {
	noise:'woof',
	talk: function() { //no target arg needed
		console.log(dog.noise);
	}
};


var dog = {
	noise:'arf',
	talk: function() {
		console.log(this.noise);
	}
};
dog.talk();

var talk = function(a,b,c,d,e,f) {
	console.log(this.noise)
}
var dog = {
	noise:'arf',
	talk: talk
};
dog.talk();

var duck = {
	noise:'quack',
	talk: dog.talk // share dog's method
}
duck.talk();
/*
Exception: SyntaxError: missing } after property list
@Scratchpad/1:4
*/
var duck = {
	noise:'quack'
}
duck.talk = dog.talk;
duck.talk();
delete duck.talk;

dog.talk.call(duck);
dog.talk.apply(null,['more','stuff']);

var nums = [9,5,8,2,4,11,8,2,7,1,0,99,25,3,6,42];
Math.max([2,3,4])
Math.max.apply(null,nums)
/*
99
*/

talk

function talk() {
   console.log(this.noise);
}

function animal(name,sound) {
  return {
    name:name,
    noise:sound,
    talk:talk
  }
}

function animal(name,sound) {
  var critter = {};
  critter.name = name;
  critter.noise = sound;
  critter.talk = function() {
        console.log(this.noise);
    }
  return critter;
}

function animal(name,sound,custom,value) {
  var critter = {};
  critter.name = name;
  critter.noise = sound;
  critter[custom] = value;
  critter.talk = function() {
        console.log(this.noise);
    }
    window[name]= critter;

  return critter;
}
animal('dog','woof','costume','collar');
animal('duck','quack','wingspan',2);


function animal(name,sound) {
  var critter = {};
  critter.name = name;
  critter.noise = sound;
  critter.talk = animal.talk;
  return critter;
}
animal.talk = function() {
    console.log(this.noise);
}