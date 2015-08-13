---
layout: post
title: "CoreJS: Closure Examples; IIFEs"
class: W Aug.12
date: 2015-08-12 00:00:01
---

## Practice: Using Closure for Private Variables

#### Loan Manager

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


#### Authenticator

Write a (toy) password-authentication system!
Start with a function `storePassword(passwd)`.
It should return a function which you can use
to check whether a submitted password
matches the stored one (passwd).

```
function storePassword(passwd) {
    //...code here...
}

// Use it like this:
var verifyPassword = storePassword("sekrit");

verifyPassword("password"); // false
verifyPassword("12345"); // false
verifyPassword("sekrit"); // true
```

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


## Practice: Counting Factory

Consider the following factory:

```
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
```

Modify the factory to eliminate the `_id` parameter.  Instead, the factory
should auto-increment a counter and give each thing a unique id.

```
// some code here...

	function makeThing() { //<-- no parameter
    	//...
    	return thing;
	}

// more code here...
```

You'll be able to use the factory like so:

```
var thing0 = makeThing(),
    thing1 = makeThing(),
    thing2 = makeThing();
thing0.id(); //0
thing1.id(); //1
thing2.id(); //2
```



## IIFEs

Wrap the following marble factory in an IIFE:

```
function marble(size,color) {
  return {
    size:size,
    color:color,
    isBigger:marble.isBigger
  }
}
marble.isBigger = function (other) {
  return this.size > other.size;
}
```

