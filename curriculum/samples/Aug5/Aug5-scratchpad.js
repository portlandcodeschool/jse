/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */
/*
function hello(name1,name2) {
  console.log(name1,name2);
}

function talk(more) {
    console.log(this.noise,more);
}

var dog = {noise:'woof'};
var cat = {noise:'ack!'};
var canary= {noise:'tweet'};

var animals = [dog, cat, canary];
animals.allTalk = function() {
    //this.forEach(talk);
   this.forEach(function(who){
     talk.call(who,'more!')
     //who.talk()
   })
}
animals.allTalk(); // failure!


var names = ['a','b']
hello.apply(null,names)
*/

function marble(size,color) {
  var obj = {};
  obj.color = color;
  obj.size = size;
  return obj;
}
function marble(size,color) {
  var obj = {
    size:size,
    color:color
  };
  return obj;
}



function marble(size,color) {
  return {
    size:size,
    color:color,
    isBigger:marble.isBigger
  }
}
marble.isBigger = function (other) {
  return this.size > other.size;
}

var marble1 = marble(4,'green')
var marble2 = marble(2,'red')
marble1.isBigger()

function myFunction(item) {
  //do sth with item
}


array.forEach(myFunction)

function myFilterFn(item) {
  return item%3 === 0
}
var divisibles = array.filter(myFilterFn)

array = [0,1,2,3,4,'z',5,6,7,8,9];
array.slice().sort()
array.slice()

var words = ['a','b','c']
words.slice(-2)
words.splice(1,0,'d')
words
/*
a,d,b,c
*/

words.splice(1,1)
/*
d
*/
array = [0,1,2,3,4,'z',5,6,7,8,9];

function hiToLo(a,b) {
  return a-b;
}
array.sort(hiToLo)
/*
0,1,2,3,4,z,5,6,7,8,9
*/
/*
9,8,7,6,5,z,4,3,2,1,0
*/

Math.floor(Math.random()*100)
/*
72
*/
/*
27
*/
/*
91.2683507370236
*/
/*
50.53554913593833
*/
/*
0.432531501317888
*/


function makeBag(initialStuff) {
  return {
    stuff : initialStuff || [],
    put : function(thing) {
      this.stuff.push(thing)
    },
    draw : function() {
      var which = Math.floor(Math.random()*this.stuff.length);
      return this.stuff.splice(which,1);
   }
  }
}
function makeBag(initialStuff) {
  var bag = {};
  bag.stuff = initialStuff || [];
  bag.put = function(thing) {
    this.stuff.push(thing)
  }
  bag.draw = function() {
    var which = Math.floor(Math.random()*this.stuff.length);
    return this.stuff.splice(which,1)[0];
  }
  return bag;
}
