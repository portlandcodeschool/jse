---
layout: post
title: "CoreJS: Closure"
class: M Aug.10
date: 2015-08-10 00:00:01
---

## Review of Scope

Predict and explain the output of each program below:

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

### Combined accessor function

Combine the getter and setter functions into a single function which can do both.  The accessor function `accessFn` should be the only way of modifying or retrieving the variable `privateVal`.

```
function makeAccessor() {
    var privateVal;
    function accessFn(val) {
        //...
    }
    return accessFn;
}
// Example of use:
var cache = makeAccessor();
cache(7);
cache(); //-->7
cache(9);
cache(); //-->9
```


### Practice: Factory with personal instance methods

```
function factory(id) {
	var instance = {};
	instance.id = id;
	instance.getID = function() {
		return this.id;
	}
	return instance;
}

var thing1 = factory(1);
console.log(thing1.getID());
```

Rewrite the factory above to use closure to persist and retrieve the value of `id` instead of putting an `id` property on the instance.


### Practice: Using Closure for Private Variables

```
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
```

Rewrite the code above using a closure, so that the values for `assets`, `debt`, and `rate` can only be changed by the methods `borrow`, `compoundInterest`, and `repay`.  You'll need to group the methods together within an object and build that object in a factory.

### Practice: Using Closure for Persistence


1. Write a function that generates the next number each time it's called:

```
sequence(); //=> 0
sequence(); //=> 1
sequence(); //=> 2
```

2. Write a function `counter` that returns your sequence generator:

```
var sequence1 = counter();
var sequence2 = counter();
sequence1(); //=> 0
sequence1(); //=> 1
sequence2(); //=> 0
sequence1(); //=> 2
sequence2(); //=> 1
```

3. Allow your counter to start at any number, for instance, `counter(5)`.

4. Allow your counter to be reset:

```
var sequence1 = counter();
var sequence2 = counter();
sequence1.next(); //=> 0
sequence1.next(); //=> 1
sequence2.next(); //=> 0
sequence1.next(); //=> 2
sequence1.reset(); //=> void
sequence1.next(); //=> 0
sequence2.next(); //=> 1
sequence1.reset(5); //=> void
sequence1.next(); //=> 5
```


