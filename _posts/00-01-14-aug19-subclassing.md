---
layout: post
title: "CoreJS: Inheritance and Subclassing"
class: W Aug.19
date: 2015-08-19 00:00:01
---

## Review: Constructors and Prototypes

With your team, describe the three roles objects can play in a Javascript "class" and summarize the relationship between each pair:

* Constructor vs. Instance

* Constructor vs. Prototype

* Prototype vs. Instance


## Built-in Subclasses

Use the expressions below to infer the inheritance relationships between various Javascript classes:

```
Object instanceof Object
Object instanceof Function
Array instanceof Array
[] instanceof Array
[] instanceof Object
{} instanceof Object
{} instanceof Function
null instanceof Object
Function instanceof Function
Function instanceof Object
new Number instanceof Object
new String instanceof String
new String instanceof Object
```

Formulate a hypothesis about how operator `instanceof` works.

## Implementing Inheritance

Here is a module (IIFE) which provides a constructor `Rect` which builds rectangle instances.  The instance methods are shared but linked directly to each instance. 

```
var Rect = (function() {
	function Ctor(l,b,r,t) {
		this.l = l;
		this.b = b;
		this.r = r;
		this.t = t;
		this.width = width;
		this.height= height;
		this.area  = area;
		this.move  = move;
	}
	var width = function() {
		return this.r - this.l;
	}
	var height = function() {
		return this.t - this.b;
	}
	var area = function() {
		return (this.width() * this.height());
	}
	var move = function(dx,dy) {
		this.l += dx;
		this.r += dx;
		this.b += dy;
		this.t += dy;
	}

	return Ctor;
})()
```

1. Modify the Rect module so that all instance methods are inherited from a prototype.

2. In a new IIFE, implement a subclass of `Rect` called `Square`.  The `Square` constructor needs only three parameters: `Square(left,bottom,size)`, and it should call the parent class constructor (`Rect(left,bottom,right,top)`) to set the new instance's properties.
A Square instance should inherit the `width`, `height`, `area	`, and `move` methods of Rectangles without needing any changes.

3. Within the Square module, add an instance method `size` which acts as both a getter and setter for a square's size.  That is, `square.size()` should return the current size of _square_, and `square.size(num)` should set the size to _num_.

4. For the moment, disable your Square module (by commenting it out or disabling the call operator () which triggers the IIFE).
Now Modify the Rect module so that the `Rect` constructor maintains a list of every instance it ever creates.  Attach a _class_ method `every` to constructor `Rect` which returns that list.
<p>
When finished, you should be able run the following sequence:
<pre>
	var r1 = new Rect(0,0,1,1),
		r2 = new Rect(0,0,2,2),
		r3 = new Rect(0,0,3,3),
		all = Rect.every(); //list of r1,r2,r3
	all[0] === r1; //true
</pre>

5.  Now reactivate your Square module and then re-run the sequence above.  What is the value of `all[0]===r1`?  What happened?

6. Notice that constructor `Square` does not inherit the class method from its parent class `Rect`!  Implement the class method `every` for `Square` as well, so that `Square.every()` will return all squares ever built.



### Object.create

7. Modify constructor `Square` to use `Object.create` instead of `new Rect` when making Square's prototype.  Does that fix the problem in #5 above?


8.  Return to your earlier simulation of the _new_ operator, which we approximated like this:
<pre>
function fakeNew(ctor,arg) {
	var instance = {};
	instance.\_\_proto\_\_ = ctor.prototype;
	ctor.call(instance,arg);  //does initialization
	return instance;
};
</pre>

	Simplify `fakeNew` by using `Object.create`.

## Overriding Inheritance

Consider the module below which implements a simplified Deque class:

```
var Deque = (function () {
	function Deque (vals) {
		// unprotected version
		this.array = vals.slice();
	}
	Deque.prototype.top = function () {
		if (this.array.length)
			return this.array[this.array.length-1];
	}
	Deque.prototype.bottom = function () {
		if (this.array.length)
			return this.array[0];
	}

	Deque.prototype.push = function(val) {
		return this.array.push(val);
	}
	Deque.prototype.pop = function() {
		return this.array.pop();
	}

	Deque.prototype.unshift = function(val) {
		return this.array.unshift(val);
	}
	Deque.prototype.shift = function() {
		return this.array.shift();
	}

	return Deque;
})();
```

1. In a new IIFE, implement a subclass of `Deque` called `Stack`.  A Stack is a kind of Deque which is top-access only, affording Last-In-First-Out (LIFO) storage.  A Stack instance will inherit all the method of Deque, but you'll need to disable the three methods which allow access to the bottom of the Stack.


2. In a similar way, implement another subclass of `Deque` called `Queue`.  A Queue is a kind of Deque which affords First-In-First-Out storage, where items are _push_ed onto the top and _shift_ed from the bottom.   Only the _bottom_ of a queue is visible.

## Automated Inheritance through _extend_

The process of generating a subclass can be automated by giving every function a method to _extend_ it with a subclass.  We'll use a variant of that pattern later with _Backbone_, but here is a rough approximation of how it works:

```
Function.prototype.extend = function(protoProps) { // method of any function...
	var Super = this; //the function to be subclassed
	function Ctor() { // the subclass ctor
		Super.call(this);
	}

	// Make Ctor a subclass of Super:
	var proto = Object.create(Super.prototype); //the subclass prototype
	Ctor.prototype = proto;
	proto.constructor = Ctor;

	// Copy protoProps into subclass prototype:
	//_.extend(proto,protoProps);
	// OR
	for (var prop in protoProps) {
		proto[prop] = protoProps[prop];
	}

	return Ctor;
}
```

Here is an example of it in use:

```
function Duck() {}
Duck.prototype.feet = 2;
Duck.prototype.noise = 'quack';

var MutantDuck = Duck.extend({feet:3});
var duck = new MutantDuck();
duck instanceof MutantDuck; //true
duck instanceof Duck; //true
// Inherited from MutantDuck:
duck.feet; // 3
duck.hasOwnProperty('feet'); //false
// Inherited from Duck:
duck.noise; // 'quack'
duck.hasOwnProperty('noise'); //false
```

## Samples

[scratchpad]({{ site.baseurl }}/curriculum/samples/Aug19/scratchpad1.js)

[console]({{ site.baseurl }}/curriculum/samples/Aug19/console1.js)

## Diagrams

![Object, Array, and Function Ctors]({{ site.baseurl }}/curriculum/samples/Aug19/2015-08-19_0001.jpg)

![Rect IIFE; subclassing]({{ site.baseurl }}/curriculum/samples/Aug19/2015-08-19_0002.jpg)

![Rect and Square]({{ site.baseurl }}/curriculum/samples/Aug19/2015-08-19_0003.jpg)

