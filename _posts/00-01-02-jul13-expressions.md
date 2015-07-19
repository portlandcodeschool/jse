---
layout: post
title: "CoreJS: Expressions, Variables, and Types"
class: M July 13
date: 2015-07-13 00:00:02
---

##Exercises

####Invent a new Operator

Imagine and describe an operator of your own design.  Decide the number, type, and pattern of its operands (inputs) and how the output is decided.  Draw a custom symbol for it!


####Evaluating Nested Expressions

Draw a parse tree for and trace the evaluation of the complex expression below:

```
var x;
((4+(-1))*(x=(5-1))/(7%x) == x)
```

####Experimenting with arithmetic

Experiment with the various arithmetic operations in Javascript. Try testing out the various arithmetic operations in Javascript. Make sure you calculate for yourself what you think the result of these expressions should be.

-   `10 + 30 / 2 / 5`
-   `30/0 + 0`
-   `30/0 * 0`
-   `10 + undefined`
-   `10 + "string"*0`

Did any of these suprise you? Did you see things you weren't expecting? 

What can you explain about the rules for the symbols `NaN` and `Infinity`? Can you predict the value of these?

-   `typeof Infinity`
-   `typeof NaN`
-   `Infinity + Infinity`
-   `NaN * Infinity`

Before you try any of these, discuss them and see if you can come to consensus on what should happen.

####Fun with Strings and Coercions

1. 

Experiment with string concatenation and how coercions convert between strings and numbers. Try the following expressions in your console only after discussing them and seeing if you can come to a consensus on what happens.

```
"3" + 4
"this" + "is" + "a" + "string"
+"30" + 5
+"stuff"
```

Do coercions like this seem useful or dangerous? Discuss and share your consensus with your group.

2.

Explain how this is possible:

```
var y;
y=x+1-1;  //10
typeof y; //number
y=x-1+1;  //1
typeof y; //number
```

3.

Now explain this:

```
var small=9;
var big=10
small < big;     //true
x+small < x+big; //false!
```

####Be the Interpreter!

Execute these programs by hand, on paper, keeping track of the variables and the current statement being evaluated.  When you're confident about the code's behavior, verify your prediction using the console, Scratchpad, or node.

1.

```
var x;
var y;
x = 10;
y = x;
y = y + 5;
console.log(x);
console.log(y);
```
Does modifying y thus modify x?

2.

```
var x = 20;
x = x + 5;
console.log(typeof x);
x = "a string";
console.log(typeof x);
console.log(typeof (x + undefined));
```

3.

```
var x = 10;
var y = x;
var z = y;
y = z + z;
x = 2*y;
z = "" + x;
console.log(z + z);
```

4.

```
var a=81, b=108;
while (b>0) {
	var t = b;
	b = a % b;
	a = t;
}
var g = a;
```
Setting aside the particular initial values of a and b, how might you summarize the purpose of this calculation?


5.

```
var a=60, b=84;
while (a!==b) {
	if (a>b)
		a-=b;
	else
		b-=a;
}
var g = b;
```
How might you summarize the purpose of this calculation?


####Summary

Write down, individually, your own summary of the following ideas:

-   what pieces go into making a webpage
-   server vs. client code
-   what a programming language does
-	what an operator does
-   expressions vs. statements
-   what a "type" is in programming
-   what variables are
-   type coercions

Then share them with the rest of your group and discuss your answers.

##Samples

[console]({{ site.baseurl }}/curriculum/samples/Jul13/Jul13-console.md)

##Diagrams

![big picture]({{ site.baseurl }}/curriculum/samples/Jul13/2015-07-13_0001.jpg)
![operator merging]({{ site.baseurl }}/curriculum/samples/Jul13/2015-07-13_0002.jpg)
![parse tree]({{ site.baseurl }}/curriculum/samples/Jul13/2015-07-13_0003.jpg)

