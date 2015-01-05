// ...continued from Sept29

// More closure examples

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




// EXERCISE! 
// --- Watcher with callbacks ---
function makeWatcher(val) {
    var x = val;
    var watchers = []; //list of callbacks do to when x changes
    function watchXFn(...) {
        ...
        return x;
    }
    function changeXFn(val) {
        x = val;
        ...
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


// Callback adapters
var arr = [0,1,2,3,4];
function plus(a,b) {
    return a+b;
}
// how can we add a number to everything?

function addNtoEach(n) {
    arr.map(function(val){return plus(val,n)})
}




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
        console.log("I'm widget #", this.serialNum);
    }

    function factoryMethod() {
        return totalWidgets;
    }

    function factory(prongs) {
        totalWidgets++;
        // manufacture one widget:
        return {prongs:prongs,
                serialNum:totalWidgets,
                talk:sharedMethod};
    }
    factory.widgetsMade = factoryMethod;

    return factory;
};

var makeWidget = makeFactory();
var widget1 = makeWidget(1);
var widget2 = makeWidget(2);
// Call factory method:
makeWidget.widgetsMade(); //2
// Call instance methods
widget1.talk();
widget2.talk();
//makeWidget.sharedMethod();  //no such method; can't be called from factory!



// ======= Modules =======

var plus = function(x,y) {return x+y};
// Can always substitute function expression for variable;


// Therefore
var result = plus (1,2);
// has equivalent:
var result  = (function(x,y) {return x+y}) (1,2);

// "Self-evaluating anonymous function" or
// "Immediately-invoked Function Expression" (IIFE)


// Likewise:
var makeWidget = makeFactory();
// can be replaced with:

var makeWidget = (function() { //makeFactory function is now anonymous!
    //... as before
})();  //calls anonymous factory-making function



// Toolbox module pattern:
var toolbox = (function() {
    var sharedPrivateData;
    function toolA() {};
    function toolB() {};

    var allTools = {
        toolA: toolA,
        toolB: toolB
    }
    return allTools;
});


// Factory module pattern:
var makeThing = (function() {
    // shared persistent resources...
    var sharedPrivateData;
    function sharedMethod() {}

    // module's product:
    function factory(personalPrivateData) {
        function personalMethod() {}
        var widget = {  actQuirky : personalMethod,
                        actNormal : sharedMethod };
        return widget;
    }
    return factory;
})();





//========= REVIEW =============
// Method patterns seen:

// Ungrouped/global functions:
function toolA(arg) {}
function toolB(arg) {
    // tool(A);
}
toolA("target");
// EX:
function rank(id) {}
function suit(id) {}
//...



// Grouped methods of toolbox:
var toolbox = {
    toolA: function (arg) {}
    toolB: function (arg) {
        // this.toolA()
    }
}
toolbox.toolA("target");
// EX:
var cardReader = {
    rank: function(id) {/*'this' means cardReader*/},
    suit: function(id) {}
    //...
}




// Manually-constructed instance:
var object = {
    data: "target";
    methodA: function() {}
    methodB: function() {
        // this.data
        // this.methodA();
    }
}
obj.methodA();
// EX:
var card = {
    id:0,
    rank: function() {/*'this' means card*/},
    suit: function() {}
    //...
}




// Factory with shared instance methods:
function makeThing(data) {
    var thing = {   data:data,
                    methodA:makeThing.methodA,
                    methodB:makeThing.methodB  };
    return thing;
}
makeThing.methodA = function() {}
makeThing.methodB = function() {}
var obj = makeThing("data");
obj.methodA();

// EX:
function makeCard(id) {
    var card = {id:id,
                rank:makeCard.rank,
                suit:makeCard.suit
            }
    return card;
}
makeCard.rank = function() {/*'this' means card*/}
makeCard.suit = function() {}




// Factory with personal instance methods:
// Version 1 (inline methods):
function makeThing(data) {
    var thing = {   data:data,
                    methodA: function() {},
                    methodB: function() {
                        // this.methodA()
                        // thing.methodA() //<-- uses closure!
                    };
    return thing;
}
var obj = makeThing("data");
obj.methodA();
// EX:
function makeCard(id) {
    var card = {id:id,
                rank:function() {/*'card' or this' mean card*/}
                suit:function() {}
            }
    return card;
}


// Version 2 (nested functions):
function makeThing(data) {
    function methodA() {}
    function methodB() {
        // methodA()
        // this.methodA();
        // thing.methodA();
    }
    var thing = {   data: data,
                    methodA: methodA,
                    methodB: methodB
                };
    return thing;
}
var obj = makeThing("data");
obj.methodA();
// EX:
function makeCard(id) {
    function rankFn() {/*'card' or 'this' mean card*/};
    function suitFn() {};
    var card = {id:id,
                rank:rankFn,
                suit:suitFn
            }
    return card;
}




// Factory inside module:
// Version 1 (shared methods)
var makeThing = (function(){
    function methodA() {};
    function methodB() {
        // methodA() vs this.methodA
    }
    var factory = function(data) {
        var thing = {   data:data,
                        methodA: methodA };
        return thing;
    }
    return factory;
})();
var obj = makeThing("data");
obj.methodA();

// EX:
var makeCard = (function(){
    function factory(id) {
        /* HW5-1 here*/
    }
    return factory;
})();



// Version 2 (personal methods)
var makeThing = (function(){
    var factory = function(data) {
        function methodA() {};
        function methodB() {
            //methodA() OR thing.methodA() OR this.methodA()
        }
        var thing = {   data:data,
                        methodA:methodA,
                        methodB:methodB };
        return thing;
    }
    return factory;
})();
var obj = makeThing("data");
obj.methodA();


// All factory variants behave the same way:
var obj = makeThing("data");
obj.methodA();
