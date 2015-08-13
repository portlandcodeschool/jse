/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function makeLoanManager(debt, assets, rate) {
  

  
var loanManager = {

  assets: function() {
    return assets;
  },
    debt: function() {
    return debt;
  },
    borrow: function(amount,newrate) {
        assets += amount;
        debt += amount;
        rate = newrate;
    },
    compoundInterest: function() {
        debt *= (1+rate);
    },
    repay: function(amount) {
        assets -= amount;
        debt -= amount;
    }
}

return loanManager;
}

var loan = makeLoanManager(1000,3000,0.5);
var autoloan = makeLoanManager();


function makeCounter() {
  var count=0;
  function sequence() {
    return count++;
  }
  return sequence;
}

sequence = makeCounter();



function makeCounter(count) {
  function sequence() {
    return count++;
  }
  return sequence;
}


function makeCounter(init) {
  var count = init;
  return {
    next: function () {
     return count++;
    },
    reset: function() {
      count = init;
    }
  }
}

function makeCounter(init) {
  var count = init;
  function next() {
     return count++;
    }
   next.reset = function() {
      count = init;
    }
   return next;
}

(function() { console.log( "hello") })()




var marble = (function () {

function isBigger(other) {
  return this.size > other.size;
}
  
function marble(size,color) {
  return {
    size:size,
    color:color,
    isBigger:isBigger
  }
}

  
  var mystuff = 'secret';

  return marble;
})()

var makeThing = (function() {

var _nextid = 0;

function makeThing() {
   var _id = _nextid++;
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

return makeThing;
})()