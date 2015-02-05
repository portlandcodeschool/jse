

//---- Factory with closure -----

function makeThing(_id) {

    // thing needs no id propery; instead has personal getter:
    var thing = {
        // personal method
        id: function() {
            return _id;
        },
        // shared method:
        color: makeThing.color
    };
    return thing;
}
makeThing.color = function() {
    return (this.id()%2) ? 'red': 'blue';
}






//---- Counting Factory 1-----

// EXERCISE:
// Modify factory to eliminate id parameter.  Instead, factory
// should auto-increment a counter and gives each thing a unique id.

function makeThing() { //<-- no parameter
    //...
    return thing;
}

var thing0 = makeThing(),
    thing1 = makeThing(),
    thing2 = makeThing();
thing0.id(); //0
thing1.id(); //1
thing2.id(); //2











//---- Counting Factory 2-----
function makeFactory() {
    var count = 0; // persists through all calls to factory()
    function factory() {
        var id = count++,
            thing = {
                id: function() {
                    return id;
                }
            };
        return thing;
    }
    return factory;
}
var makeThing = makeFactory();
var thing0 = makeThing(),
    thing1 = makeThing(),
    thing2 = makeThing();
thing0.id() //0
thing1.id() //1
thing2.id() //2




// RULE:
// If a function needs to have data persist between calls,
//  it must be stored outside the function.

// Possibilities include:
// 1) global variable
// 2) property of itself
// 3) variable of enclosing function (i.e. closure)

// But enclosing function has two potential problems:
// 1) creates an extra global variable,
// 2) hard to remember when/how to call it


// Solution: Immediately-Invoked Function Expression (IIFE)
// (aka Self-Executing Anonymous Function)



// Start with pile of resources/functions


function makeCard() {//factory
    //...
}
makeCard.method = function() {}
makeCard.resource = [];







// Then wrap it all in anonymous function which returns a single export object
function() {

    function makeCard() {//factory
        //...
    }
    makeCard.method = function() {}
    makeCard.resource = [];

    return makeCard;
}






// Then trigger it and capture export:
var makeCard = (function() {

    function makeCard() {//factory
        //...
    }
    makeCard.method = function() {}
    makeCard.resource = [];

    return makeCard;
})();



// Short form:
(function(){/**/})()
//or
(function(){/**/}())





// ALTERNATIVES:

// Export multiple resources:

var bundle = //<-- name decided here
(function() {

    function makeCard() {return  'card'};
    function makeDeque() {return 'deck'};
    function makeDuck() {return  'quack'};    

    return {
        makeCard: makeCard,
        makeDeque: makeDeque,
        makeDuck: makeDuck
    }
})();


bundle.makeDuck();



// Export to designated object:
(function(exports) {

    function makeCard() {return  'card'};
    function makeDeque() {return 'deck'};
    function makeDuck() {return  'quack'};    

    exports.makeCard = makeCard;
    exports.makeDeque = makeDeque;
    exports.makeDuck = makeDuck;

})(this.bundle = {});//<-- name decided here


bundle.makeDuck();


//--- NPM-style require (from E-JS:Chap.10) ----


// Set up infrastructure:
var files = { //imagine these are various files:
bundle:"\
    function makeCard() {return  'card'};     \
    function makeDeque() {return 'deck'};    \
    function makeDuck() {return  'quack'};     \
                                \
    exports.makeCard = makeCard;\
    exports.makeDeque = makeDeque;\
    exports.makeDuck = makeDuck;\
",
card:"\
    function makeCard() {}; \
"
}

function readFile(name) { //simulates file loading
    return files[name];
}

function require(name) {
  var anonymous = new Function("exports", readFile(name));
  var _exports = {};
  anonymous(_exports); //<-- obj passed by reference, can be changed
  return _exports;
}

//  In a file far away:
var myThreeThings = require('bundle');//<-- name decided here
myThreeThings.makeDuck();


// In another file:
var gadgets = require('bundle');
gadgets.makeDeque();
gadgets.makeDuck();


// In another file:
var makeCard = require('bundle');





// ========= Basic DOM Manipulation =========


// Find:
var elem = document.getElementById('someID');



// Raw HTML getting/setting
elem.innerHTML;

elem.innerHTML += "<div>new element</div>";



// CSS class getting/setting:
elem.className

elem.className = 'redThing';


elem.classList.add('bold');





// Element generation and linking:
var child = document.createElement('span');
child.innerHTML = ' (blue)';
child.className = 'blueThing';



elem.appendChild(child);



elem.firstChild.appendChild(child);




// Images:
var img = document.createElement('img');
img.src = 'ace_of_spades.svg';


document.body.appendChild(img);
