---
layout: post
title: "CoreJS: Functions"
class: W July 22
date: 2015-07-22 00:00:01
---



## Fun with Functions

1. Write a function which receives a number parameter and returns the square of that number.

2. Write a function which receives one parameter, an array of numbers, and returns the mean of those numbers.  (Hint: you'll need a loop.)

3. Write a function which receives an integer up to 10 and returns the corresponding word (i.e. 'one', 'two', 'three', etc).  (Hint: you'll need an array.)

4.  Use your three functions together to print the word for the square of the mean of these numbers: [2,4,7,-1]

## More fun: emulating array functions

1. Write a function called `myPush` which receives an array and a value, and then behaves just like ordinary `push`: it should append the value to the array and return its new length.  Avoid using the built-in `push` method in your implementation.

2. Write a function called `muyPush` which receives two arrays, pushes all the elements of the second array onto the end of the first, and returns the new length of the first.

3. Write a function called `myConcat` which receives two arrays and returns a new array comprising a copy of the first with a copy of the second appended to the end.  Neither of the input arrays should change.  Avoid using built-in `concat` in your implementation.



## assert

Write a function called `assert` which will receive parameters `claim` and `warning`.
`claim` is the result of a Boolean expression, and if `claim` is not truthy, `assert` should `console.log` the string stored in parameter `warning`.


## Scope and Shadowing 
Predict what will happen in each of the following programs:

1.

```
	var x=1, y=1;
	function fun() {
		x=3;
		console.log('x='+x, 'y='+y);
	}
	fun();
	console.log('x='+x, 'y='+y);
```

2.

```
	var x=1, y=1;
	function fun(x) {
		x=3;
		console.log('x='+x, 'y='+y);
	}
	fun(2);
	console.log('x='+x, 'y='+y);
```

3.

```
	var x=1, y=1;
	function fun(z) {
		x=3;
		console.log('x='+x, 'y='+y);
	}
	fun(2);
	console.log('x='+x, 'y='+y);
```

4.

```
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
```

5.

```
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
```

6.

```
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
```

7.

```
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
```
