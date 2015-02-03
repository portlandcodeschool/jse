// Consider the problem of maintaining self-consistent data across
// mutually-dependent variables:

var assets = 0;
var debt = 0;
var interestRate = 0;

function borrow(amount, rate) {
    debt += amount;
    assets += amount;
    interestRate = rate;
}

function compoundInterest() {
    debt *= (1 + interestRate);
}

function repay(amount) {
    assets -= amount;
    debt -= amount;
}


// Variables are public; nothing to prevent doing this:
//   debt -= 100;
// and forgetting this:
//  assets -= 100;


// To ensure valid relationships between variables,
// need to control access: individual variables can't be changed
// except by functions guaranteed to change both



//---
// Wrapping everything in manager object won't help:
var loanManager = {
    assets: 1000,
    debt: 1000,
    rate: 0,
    borrow: function(amount,rate) {
        this.assets += amount;
        this.debt += amount;
        this.rate = rate;
    }
    compoundInterest: function() {
        this.debt *= (1+this.rate);
    },
    repay: function(amount) {
        this.assets -= amount;
        this.debt -= amount;
    }
}
// Can still do:
loanManager.debt = 0;





// Another example of data inconsistency is pseudo-array:
var arr = {length:0;}
arr.push = function(val) {
    this[this.length] = val;
    return(++this.length);
}
// This is okay:
arr.push('a');
// But watch out for:
arr[0]='a';
arr[1]='b';
arr[2]='c';
// arr.length becomes invalid!





// Easiest workaround: mark certain properties as private
var loanManager = {
    _assets: 1000,  //_ means private; internal use only
    _debt: 1000,
    _rate: 0,

    // public "getter" functions:
    assets: function() {
        return this._assets;
    },
    debt: function() {
        return this._debt;
    },

    //public "setter" functions:
    spend: function(debit) {
        this._assets -= debit;
    },
    borrow: function(amount,rate) {
        this._assets += amount;
        this._debt += amount;
        this._rate = rate;
    },
    compoundInterest: function() {
        this._debt *= (1+this._rate);
    },
    repay: function(amount) {
        this._assets -= amount;
        this._debt -= amount;
    }
    //etc...

}




// BONUS Topic: "getter" and "setter" pseudo-properties

// Here's an equivalent variant of previous example:
var loanManager = {
    _assets: 1000,  //_ means private; internal use only
    _debt: 1000,
    _rate: 0,

    // "getter" pseudo-properties
    get assets() {
        return this._assets;
    },
    get debt() {
        return this._debt;
    },
    // If we allowed them, here are corresponding setters:
    /*
    set assets(val) {
        this._assets = val;
    },
    set debt(val) {
        this._debt = val;
    },
    */

    // etc...
}






// Marking properties as private is unenforceable; 
// to enforce access control, we need closures...


// Closures review:
// functions remember scope where they were born,
//  and look there for nonlocal variables

function outer() {
    var x=1;
    function inner() {
        return x;
    }
    return inner();
}
outer(); //--> 1
// But now scope is gone!


// Simple cases where function scopes expire:
function makePrimitive() {
    var x=1;
    return x;
}


function makeObject() {
    var obj = {};
    return obj;
}


function makeObject(id) {
    var obj = {id:id};  //copies id, but no persistent link
    return obj;
}


// But contrast:
function  makeFunction() {
    var fn = function() {}
    return fn;
}
// Scope of makeFunction persists!


// Proof:
function  makeGetter(arg) {
    var getArg = function() {
        return arg;
    }
    return getArg;
}
var getter = makeGetter(7);
// function is done; is scope gone?
getter();//--> 7


function makeSetter(arg) {
    var setArg = function(val) {
        console.log("arg was "+arg+"; setting to "+val);
        arg = val;
    }
    return setArg;
}
var setter = makeSetter(11);
setter(5);
setter(13);
// makeSetter's scope is still there!



// Combine getter and setter in wrapper obj:
function makeAccessor() {
    var privateVal;
    function getFn() {
        return privateVal;
    };
    function setFn(val) {
        privateVal = val;
    };
    return {
        get:getFn,
        set:setFn
    }
}
var cache = makeAccessor();
cache.set(3);
cache.get();
cache.set(7);
cache.get();

// EXERCISE: combine getter and setter into single function!
function makeAccessor() {
    var privateVal;
    function accessFn(val) {
        //...
    }
    return accessFn;
}
// Use:
var cache = makeAccessor();
cache(7);
cache(); //-->7
cache(9);
cache(); //-->9



//----
// Apply pattern to loan manager:

function borrowLoan(principal,rate) {
    var assets = principal;
    var debt = principal;
    // return accessor object:
    return {
        // getters:
        debt: function() {return debt},
        assets: function() {return assets},
        //setters:
        compoundInterest: function() {debt*=(1+rate);},
        repay: function(payment) {
            debt-=payment;
            assets-=payment;
        }
    };
}
var loan = borrowLoan(1000, .1);
loan.compoundInterest();
loan.compoundInterest();
loan.compoundInterest();
loan.debt();
loan.assets();
loan.repay(100);
loan.assets();
//No way to modify debt without making payment!




// EXERCISE:
// Write a (toy) password-authentication system!
// Start with a function storePassword(passwd).
// It should return a function which you can use
// to check whether a submitted password
// matches the stored one (passwd).
function storePassword(passwd) {
    //...code here...
}

// Use it like this:
var verifyPassword = storePassword("sekrit");

verifyPassword("password"); // false
verifyPassword("12345"); // false
verifyPassword("sekrit"); // true




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




// ALTERNATIVES:

// Export multiple resources:

var bundle = (function() {


    return {
        makeCard: makeCard,
        makeDeque: makeDeque,
        makeDuck: makeDuck
    }
})();






// Export to designated object:
(function(exports) {

    //...

    exports.makeCard = makeCard;
    exports.makeDeque = makeDeque;
    exports.makeDuck = makeDuck;

})(this.bundle = {});


