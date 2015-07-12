Experimenting with arithmetic
=============================

Experiment with the various arithmetic operations in Javascript. Try testing out the various arithmetic operations in Javascript. Make sure you calculate for yourself what you think the result of these expressions should be.

-   `10 + 30 / 2 / 5`
-   `30/0 + 0`
-   `30/0 * 0`
-   `10 + undefined`
-   `10 + "string"*0`

Did any of these suprise you? Did you see things you weren&rsquo;t expecting? 

What can you explain about the rules for the symbols `NaN` and `Infinity`? Can you predict what the value of 

-   `typeof Infinity`
-   `typeof NaN`
-   `Infinity + Infinity`
-   `NaN * Infinity`

will be?

Before you try any of these, discuss them and see if you can come to consensus on what should happen.

Fun with Strings and Coercions
==============================

Experiment with string concatenation and how coercions between strings and numbers. Try the following expressions in your console only after dicussing them and seeing if you can come to a consensus on what happens

-   `"3" + 4`
-   `"this" + "is" + "a" + "string"`
-   `+"30" + 5`
-   `+"stuff"`

Do coercions like this seem useful or dangerous? Discuss and share with the class your consensus.

Variables and Sequences
=======================

In this exercise you&rsquo;ll be given small programs to read through, execute pencil and paper as was discussed in class, and then run using Scratchpad to test your answers. Execute these programs by hand the way that you&rsquo;ve seen in class. At the end of this exercise, groups should choose representatives to walk through the code on the board.

1.

	    var x;
        var y;
        x = 10;
        y = x;
        y = y + 5;
        console.log(x);
        console.log(y);

Does modifying y thus modify x?

2.

		var x = 20;
        x = x + 5;
        console.log(typeof x);
        x = "a string";
        console.log(typeof x);
        console.log(typeof (x + undefined));
3.
	
        var x = 10;
        var y = x;
        var z = y;
        y = z + z;
        x = 2*y;
        z = "" + x;
        console.log(z + z);

Summary
=======

Write down, individually, your own summary of the following ideas:

-   what pieces go into making a webpage
-   server vs. client code
-   what a programming language does
-   expressions vs. statements
-   what a &ldquo;type&rdquo; is in programming
-   what variables are
-   type coercions

Then share them with the rest of your group and discuss your answers.
