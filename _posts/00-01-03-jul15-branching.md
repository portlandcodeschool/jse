---
layout: post
title: "CoreJS: Booleans, Truthiness, and Conditionals"
class: W July 15
date: 2015-07-15 00:00:00
---

### Boolean operators Part 1: Boolean Logic


Consider the following pieces of code and calculate by hand what value they should calculate, then check your results by entering them into the console.

1.  true || false
2.  ((true || false) && false) || true
3.  var x;
    (x < 10) || (x > 10);
4.  !!false
5.  !((x >= 0) && (x <= 10)) === (!(x >= 0) || !(x <= 10))
6.  !((x >= 0) && (x <= 10)) ===   ((x < 0) || (x > 10))
7.  var x=1, y=1;
    x === y === 1;
8.  var x = 0;
    -1 < x < 1

### Boolean Operators Part 2: Non-Boolean values and Truthiness


1.	'coffee' || 'tea'
2.	'coffee' && 'tea'
3.	2 && 1 && 0
4.	2*Infinity && 'beyond'
5.	undefined || false
6.	undefined || undefined
7.	'banana'/2 || 'false'
8.	var x, y=1;
	x || y;
9.	var x = 0;
	(x === 1 || 2)


### Conditionals


Consider the following fragments of code: execute them by hand, as shown in class, and then compare your answers to what you get from running the examples in scratchpad.

1.

```
var x;
if (x || (x=10)) {
	console.log(x);
} else {
	if (x && (+"totes a string")){
		console.log("one thing");
	} else {
		console.log("another thing");
	}
}
```

2.

```
if (x || !x) {
	console.log("We've excluded the middle");
} else {
	console.log("The middle is not excluded");
}
```


### Boolean Operators Part 3: Short-circuting

Consider the following fragments of code and try to follow the logic of their execution and their outcome:

1.  true || arglebarg
2.	if (doJShomework() || runMarathon()) deserveCookie();
3.	if (doJShomework() && runMarathon()) deserveCookie();
4.  (backup = '') && deleteAllFiles()
5.  treat() || trick()
6.  practice() && win() && celebrate()



### Summary


Summarize the following ideas in your own words:

-	if-statements
-	branching
-   booleans
-	truthiness
-   short-circuiting

After you're done, share your answers within your group and discuss them.

##Samples

[console]({{ site.baseurl }}/curriculum/samples/Jul15/Jul15-console.md)


