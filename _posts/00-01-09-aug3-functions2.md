---
layout: post
title: "CoreJS: Functions as Objects"
class: M Aug.3
date: 2015-08-03 00:00:01
---

## Functions are Objects too!
Begin with this function definition in the exercises below:

```
function paint(obj) {
	obj.color = 'red';
}
```

All functions are also objects, which has the following implications:

1) _Functions can have aliases._ 

* Make an alias for `paint` and call that alias as a function.


2) _Functions can be methods of objects._

* Convert `paint` into a method, so that it always paints its owner.


3) _Functions can be arguments_.

* Use `paint` as a callback with `forEach` on some array of objects.

* Use an anonymous function which paints things 'blue' as a callback to `forEach`.


4) _Functions can have properties of their own_.

* Use the `length` property to determine how many arguments function `paint` requires.

* Rewrite paint to use, instead of 'red', a property of itself called `color`.  Then set that property to 'green'.  Then paint something green.


5) _Functions can have methods of their own_.

* Give function _paint_ a method which sets the color it uses to paint things.
You should be able to use it like this:

```
paint.useColor('turquoise');
paint(obj); // --> sets obj's color to 'turquoise'
```

### _call_ and _apply_

* Use this `paint` function to change of color of both `car` and `fence`:

```
function paint(color) {
	this.color = color;
}
var car = {wheels:4}, fence = {length:20};
```

* Use `Math.max` to find the largest number in this array:

```
var nums = [9,5,8,2,4,11,8,2,7,1,0,99,25,3,6,42];
```

### `this` pitfalls

There's a problem in the code below:

```
function talk() {
	console.log(this.noise);
}

var animals = [dog, cat, canary];
animals.allTalk = function() {
	this.forEach(talk);
}
animals.allTalk(); // failure!
```

Identify the problem and fix it!  Rewrite the `allTalk` method of array `animals` to  
make each animal talk.  You must use function `talk` without changing its definition, and `forEach(something)`.
`something` should be a function which is not `talk` but instead somehow calls `talk`.

## Instances and Factory functions

We know how to make animal instances by hand:

```
var dog = {
	name:'dog',
	noise:'woof',
	talk:function() {
		console.log(this.noise);
	}
}
var sheep = {
	name:'sheep',
	noise:'baaa',
	talk:function() {
		console.log(this.noise);
	}
}
```

Write a function to create any number of animals like those above.

### Sharing Instance Methods

Write two versions of a factory which makes animal instances which all share a single copy of their `talk` method.

1. First implement `talk` as a global function.

2. Instead of using a global function, attach `talk` as a property of the factory itself, but expect it to be called through individual animals.

## Samples

[scratchpad]({{ site.baseurl }}/curriculum/samples/Aug3/Aug3-scratchpad.js)

[console]({{ site.baseurl }}/curriculum/samples/Aug3/Aug3-console.js)

##Diagrams

![paint method]({{ site.baseurl }}/curriculum/samples/Aug3/2015-08-03_0001.jpg)

![shared talk method]({{ site.baseurl }}/curriculum/samples/Aug3/2015-08-03_0002.jpg)

![animal factory]({{ site.baseurl }}/curriculum/samples/Aug3/2015-08-03_0003.jpg)
