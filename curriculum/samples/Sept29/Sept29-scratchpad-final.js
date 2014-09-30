// Consider the problem of controlling access to a variable:

var assets = 1000;
var debt = 1000;
function chargeInterest() {
    debt *= 1.1;
}
function makePayment(amount) {
    assets -= amount;
    debt -= amount;
}
// Variable is public; nothing to prevent this:
debt = 0;


//---
// Wrapping everything in manager object won't help:
var loanManager = {
    assets: 1000,
    debt: 1000,
    chargeInterest: function() {
        this.debt *= 1.1;
    },
    makePayment: function(amount) {
        this.assets -= amount;
        this.debt -= amount;
    }
}
// Can still do:
loanManager.debt = 0;

// ----

// To make data private, we need closures...


function makeGetter(arg) {
    // stash arg in closed space
    
    
    //var x = arg; // x is private, inaccessible to outside world

    
    // build a retriever
    function getter() {return arg};
    
    // give retriever to caller
    //return getter;
}
// stash 7 and get back retriever
var getX = makeGetter(7);

// use retriever to get 7
getX(); //7


var getX2 = makeGetter(8);
getX2();


//----
// Same principle with object delegate:

function makeGetterObj(arg) {
    var x = arg;
    return {getX: function {return x;}};
}

var obj = makeGetterObj(1);
obj.getX(); //1


//----
// Apply pattern to loan manager:

function borrowLoan(principal) {
    var assets = principal;
    var debt = principal;
    // return delegate object:
    var delegate = 
       {amountDue: function() {return debt;},

            chargeInterest: function() {debt*=1.1;},

            makePayment: function(payment) {
                console.log("Debiting your account by "+payment);
                // wire the money here...
                assets-=payment;
                debt-=payment;
            }
        };
    return delegate;
}
var loan = borrowLoan(1000);
loan
loan.chargeInterest();
loan.chargeInterest();
loan.chargeInterest();
loan.amountDue();

loan.makePayment(100);
loan.amountDue();

/*
1231
*/
//No way to modify debt without making payment!


//----
// More uses of access control:

// Dropbox: val is gettable but not resettable
function makeConstant(val) {
    function getter() { return val };
    return getter;
}
var getConstant = makeConstant('permanentValue');
getConstant();
// no way to reset stored val


//Alternatively: val can be settable but not gettable:
function hideValue(val) {

    function setter(newval) {
        val = newval;
        // do something secret with changed val...
    };
    return setter;
}
var resetVal = hideValue(7);
resetVal(8);

// EXERCISE:
// Write a password-protection system!
// Start with a function storePassword(passwd).
// It should return some kind of object which you can use
// to check a submitted password to see if it matches the stored one (passwd).
function storePassword(passwd) {
    //code here
    function check(attempt) {
        return (attempt===passwd);
    }
    return check;
}

// more code here...
var verifyPassword = storePassword("izSekrit");
storePassword("bubbles");

// you should be able to make a call like this:
verifyPassword('izSekrit'); // true or false
/*
true
*/

// =========================================================
// Another example:
function auction() {
    var highBid = 0;
    var bidder = '';
    function setter(price,name) {
        if (price>highBid) {
            highBid = price;
            if (bidder)
                console.log(bidder+' has been outbid!');
            bidder = name;
            return 'Your bid is highest!';
        }
        return "Another bid is higher";
    }
    return setter;
}
bid = auction();

var bid = auction();
bid(1,'Dan');
/*
Your bid is highest!
*/
bid(3,'Ben');
/*
Your bid is highest!
*/
bid(2,'Dan');

/*
Another bid is higher
*/


//----

function makeCountingGetter(val) {
    var x = val;
    var count = 0;
    function getXandCount(){
        count++;
        console.log(x+' has been viewed '+count+' times');
        return x;
    }
    function getCount(){
        return count;
    }
    return {getX:getXandCount,getCount:getCount};
}

(1+1)
((2*(6/2))+1)

var bundle = makeCountingGetter('secret');
bundle.getX();
bundle.getCount()

/*
3
*/
getXandCount();
/*
secret
*/

/*
secret
*/
//----

function makeWatcher(val) {
    var x = val;
    var watchers = [];
    function watchXFn(whoAmI) {
        watchers.push(whoAmI);
        return x;
    }
    function changeXFn(val) {
        x = val;
        console.log('Hey '+watchers.join()+': x is now '+x);
    }
    return {watchX:watchXFn, changeX:changeXFn};
}
var watcher = makeWatcher(7);
watcher.watchX('Dan');
watcher.watchX('Ben');
watcher.watchX('Clarissa');
watcher.changeX(9);

// --- Watcher with callbacks ---
function makeWatcher(val) {
    var x = val;
    var watchers = []; //list of callbacks do to when x changes
    function watchXFn(notifyMeFn) {
        watchers.push(notifyMeFn);
        return x;
    }
    function changeXFn(val) {
        x = val;
        watchers.forEach(function(theFn) {theFn(x)});
    }
    return {watchX:watchXFn, changeX:changeXFn};
}
var watcher = makeWatcher(7);
watcher.watchX(function(x) {console.log('Hey, Dan: x is now '+x)});
watcher.watchX(function(x) {alert('X has changed to '+x)});
var x2 = watcher.watchX(function(x) {x2 = x*x;});
x2 *= x2;
watcher.changeX(9);
x2;


// --- Counting factory
function makeFactory() {
    var totalWidgets = 0;
    // the factory:
    function factory(prongs) {
        totalWidgets++;
        // manufacture one widget:
        return {prongs : prongs,
                serialNum : totalWidgets,
                myMethod : makeWidget.sharedMethod};
    }
    factory.sharedMethod = function() {
        console.log( "This factory method is shared by widget ", this);
    }
    factory.widgetsMade = function() {
        return totalWidgets;
    }

    return factory;
};

var makeWidget = makeFactory();
var widget1 = makeWidget(1);
var widget2 = makeWidget(2);
makeWidget.widgetsMade() //2
widget1.myMethod();
makeWidget.sharedMethod(); //can be called from factory too!

// ---- Counting factory with protected shared method:
function makeFactory() {
    var totalWidgets = 0;

    function sharedMethod() {
        console.log("This method is shared by widget ", this);
    }

    function factory(prongs) {
        totalWidgets++;
        // manufacture one widget:
        return {prongs:prongs,
                serialNum:totalWidgets,
                method:sharedMethod};
    }

    factory.widgetsMade = function() {
        return totalWidgets;
    }

    return factory;
};

var makeWidget = makeFactory();
var widget1 = makeWidget(1);
var widget2 = makeWidget(2);
makeWidget.widgetsMade(); //2
widget1.myMethod(); //instance method
//makeWidget.sharedMethod();  //no such method; can't be called from factory!



// ======= Modules =======

function plus(x,y) {
    return x+y;
}
// equals:
var plus = function(x,y) {return x+y)};

// Therefore
var result = plus (1,2);
// has equivalent:
var result  = (function(x,y) {return x+y}) (1,2);




// Likewise:
var makeWidget = makeFactory();
// can be replaced with:

var makeWidget = (function() { //makeFactory function is now anonymous!
    //... as before
})();  //calls anonymous factory-making function


