/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

1.

    var x=1, y=1;
    function fun() {
        x=3;
        console.log('x='+x, 'y='+y);
    }
    fun();
    console.log('x='+x, 'y='+y);
2.

    var x=1, y=1;
    function fun(x) {
        x=3;
        console.log('x='+x, 'y='+y);
    }
    fun(2);
    console.log('x='+x, 'y='+y);
3.

    var x=1, y=1;
    function fun(z) {
        x=3;
        console.log('x='+x, 'y='+y);
    }
    fun(2);
    console.log('x='+x, 'y='+y);
4.

    var x=1, y=1;
    function fun(x) {
        x=3, y=3;
        if (x) {
            var y=4;
            console.log('x='+x, 'y='+y);
        }
        console.log('x='+x, 'y='+y);
    }
    fun(2);
    console.log('x='+x, 'y='+y);
5.

    var x=1, y=1;
    function showXY(x,y) {
        console.log('x='+x, 'y='+y);
    }
    function fun(x) {
        x=3;
        showXY(x,y);
    }
    fun(2);
    showXY(x,y);
6.

    var x=1, y=1;
    function showXY() {
        console.log('x='+x, 'y='+y);
    }
    function fun(x) {
        x=3;
        showXY();
    }
    fun(2);
    showXY();
7.

    var x=1, y=1;
    function fun(x) {
        function showXY() {
            console.log('x='+x, 'y='+y);
        }
        x=3;
        showXY();
    }
    fun(2);
    showXY();



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

function  makeFunction() {
    var fn = function() {}
    return fn;
}
var theFn = makeFunction();
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
getter();
/*
7
*///--> 7



function makeSetter(arg) {
    var setArg = function(val) {
        console.log("arg was "+arg+"; setting to "+val);
        arg = val;
    }
    return setArg;
}
var setter = makeSetter(11);
setter(5);
/*
undefined
*/
setter(13);
//makeSetter's scope is still there!


function factory(id) {
    var instance = {};
    //instance.id = id;
    instance.getID = function() {
        return id;
    }
    return instance;
}

var thing1 = factory(1);
console.log(thing1.getID());



function factory(id) {
    var instance = {};
    instance.id = id;
    instance.getID = factory.getID;
    return instance;
}
factory.getID = function() {
        return this.id;
    }

var thing1 =  factory(1);