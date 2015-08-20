/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */
/*
CTOR <-> INST
CTOR makes INST, working with new to make starter obj
CTOR is shared initializer method



CTOR <-> PROTO


PROTO <-> INST



*/

function Test(val) {
  var secret;
  this.test = val;
  this.getSecret = function() {
    return secret;
  }
  this.show = function(val) {
   return this.test;
    secret;
  }
}


function Test(val) {
  this.test = val;
}
Test.prototype.show = function() {
  return this.test;
  this.getSecret()
}

var it = new Test(7);



var Rect = (function() {
    function Ctor(l,b,r,t) {
        this.l = l;
        this.b = b;
        this.r = r;
        this.t = t;
    }
    Ctor.prototype.width = function() {
        return this.r - this.l;
    }
    Ctor.prototype.height = function() {
        return this.t - this.b;
    }
    Ctor.prototype.area = function() {
        return (this.width() * this.height());
    }
    Ctor.prototype.move = function(dx,dy) {
        this.l += dx;
        this.r += dx;
        this.b += dy;
        this.t += dy;
    }

    return Ctor;
})()

var rect1 = new Rect(0,0,1,2)
rect1.area()

function Super() {}
Super.prototype.a = 'a';

function Sub() {}
var adoptee = new Super();
Sub.prototype = adoptee;
adoptee.constructor = Sub;
// OR
Sub.prototype = new Super();
Sub.prototype.constructor = Sub;
Sub.prototype.b = 'b';


var sub = new Sub();
sub.a
/*
a
*/
sub.b

/*
b
*/
sub.hasOwnProperty('b')
'b' in sub
sub instanceof Super

var Rect = (function() {
    function Ctor(l,b,r,t) {
        this.l = l;
        this.b = b;
        this.r = r;
        this.t = t;
    }
    Ctor.prototype.width = function() {
        return this.r - this.l;
    }
    Ctor.prototype.height = function() {
        return this.t - this.b;
    }
    Ctor.prototype.area = function() {
        return (this.width() * this.height());
    }
    Ctor.prototype.move = function(dx,dy) {
        this.l += dx;
        this.r += dx;
        this.b += dy;
        this.t += dy;
    }

    return Ctor;
})()

var Square = (function(){
  function Sub(l,b,size) {
    this.l = l;
    this.b = b;
    this.r = l+size;
    this.t = b+size;
  }
  Sub.prototype = new Rect();
  Sub.prototype.constructor = Sub;
  
  return Sub;
})()


function Super() {}
Super.prototype.a = 'a';

function Sub() {}
Sub.prototype = new Super();
Sub.prototype.constructor = Sub;
// BETTER:
Sub.prototype = Object.create(Super.prototype);
Sub.prototype.constructor = Sub;


function myNew(Ctor) {
    var instance = {};
    instance.__proto__ = Ctor.prototype;
    //Ctor.call(instance);
    return instance;
}




var Rect = (function() {
    var allMyStuff = [];
    function Ctor(l,b,r,t) {
        this.l = l;
        this.b = b;
        this.r = r;
        this.t = t;
        allMyStuff.push(this);
    }
    Ctor.every = function() {
        return allMyStuff;
    }
    
    Ctor.prototype.width = function() {
        return this.r - this.l;
    }
    Ctor.prototype.height = function() {
        return this.t - this.b;
    }
    Ctor.prototype.area = function() {
        return (this.width() * this.height());
    }
    Ctor.prototype.move = function(dx,dy) {
        this.l += dx;
        this.r += dx;
        this.b += dy;
        this.t += dy;
    }

    return Ctor;
})()


var Square = (function(){
  function Sub(l,b,size) {
    this.l = l;
    this.b = b;
    this.r = l+size;
    this.t = b+size;
  }
  Sub.prototype = Object.create(Rect.prototype);
  Sub.prototype.constructor = Sub;
  
  Sub.prototype.move = undefined;
    
  return Sub;
})()

