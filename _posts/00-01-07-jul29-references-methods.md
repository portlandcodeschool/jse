---
layout: post
title: "CoreJS: References, Methods, and 'this'"
class: W July 29
date: 2015-07-29 00:00:01
---

### Review: Properties vs. Variables

Discuss with your team the difference between variables and properties in each of the following behaviors:

* Where they're stored

* How they're created

* What happens if they're used before being created

* When and how they're destroyed

* How they appear in expressions

* Constraints on what they may be named


### References

1. How many objects remain after the following code runs?

```
var a={};
var b=a;
var c={a:a,b:b};
a.c = c;
var d=c.a;
delete c.a;
delete c.b;
a = null;
c = null;
```

### Circularity

1. Draw the data structure built by the following code:

```
	var loop1;
	var loop2;
	loop1 = {link : loop2};
	loop2 = {link : loop1};
	loop1.link.link
```

2. Now fix the code to produce two mutually-linked objects.



### Toolkit Object Example

Here is a simple example of a Toolkit object, a currency converter:

```
var exchange = {
    rate: 1.10, //dollars per euro

    toDollars: function(euros) {
		return euros * this.rate;
    },

    toEuros: function(dollars) {
		return dollars / this.rate;
    },

    convert: function(string) {
		if (string[0]==='$')
		    return 'E'+this.toEuros(string.slice(1));
		if (string[0]==='E')
			return '$'+this.toDollars(string.slice(1));
		return this.toDollars(string);
    }
};

exchange.convert('$20.00');
```


### Index/dictionary Object Example

```
var dollarsPer = {
	dollar: 1,
	euro: 1.10,
	pound: 1.56,
	yen: 0.01, //NOT 123.98,
	yuan: 0.16 //NOT 6.21
}
```


### Toolkit Exercise

Modify the exchange toolkit to have one data property, a dictionary object listing all exchange rates, and two methods:

* `convertTo(amount,toUnit)`: convert `amount` of dollars into the equivalent in `toCurrency`;

* `convertFrom(amount,fromUnit)`: convert 'amount' of foreign currency in `fromUnit`s to the 
equivalent in dollars.

It might be used as follows:

```
exchange.convertTo(20,"yen");
exchange.convertFrom(5,"euro");
```

## Samples

[exchange-solution]({{ site.baseurl }}/curriculum/samples/Jul29/exchange.js)

[scratchpad]({{ site.baseurl }}/curriculum/samples/Jul29/Jul29-scratchpad.js)

[console]({{ site.baseurl }}/curriculum/samples/Jul29/Jul29-console.js)

##Diagrams

![properties-vs-vars]({{ site.baseurl }}/curriculum/samples/Jul29/2015-07-29_0001.jpg)

![references1]({{ site.baseurl }}/curriculum/samples/Jul29/2015-07-29_0002.jpg)

![references2]({{ site.baseurl }}/curriculum/samples/Jul29/2015-07-29_0003.jpg)

![toolkit-example]({{ site.baseurl }}/curriculum/samples/Jul29/2015-07-29_0004.jpg)
