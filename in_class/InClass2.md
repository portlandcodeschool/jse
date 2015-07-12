Booleans, ands, ors, and nots
=============================

Consider the following pieces of code and calculate by hand what value they should calculate, then check your results by entering them into the console

1. true || false
2. ((true || false) && false) || true
3. undefined || false
4. undefined || undefined
5. 

		var x;
		(x < 10) || (x > 10);

Conditionals
============

Consider the following fragments of code: execute them by hand, as shown in class, and then compare your answers to what you get from running the examples in scratchpad.

1.
	    var x;
        
        if (x || (x=10)) {
            console.log(x);
        }
        else {
            if (x && (+"totes a string")){
                console.log("one thing");
            }
            else {
                console.log("another thing");
            }
        }


2.

	if (x || !x){
            console.log("We've excluded the middle");
        }
        else {
            console.log("The middle is not excluded");
        }

For-loops
=========

Consider the following fragment of code: execute it by hand, as shown in class, and then compare your answer to what you get from running the examples in scratchpad.

    var i;
    
    for (i = 0;i < 8; i=i+1){
        if(i == 5){
            console.log("It's five!");
            i = i+1;
        }
        console.log(i);
    }

What numbers are printed out by this code?

While-loops
===========

Consider the following fragments of code: execute them by hand, as shown in class, and then compare your answers to what you get from running the examples in scratchpad. The second is *almost* the same as the first. Do you understand why they behave differently?

1.

        var x;
        var i = 0;
        while (!x) {
            i = i + 1;
            if (i == 5){
                x = true;
            }
            console.log("running");
        }

2.

		var x;
        var i;
        while (!x) {
            i = i + 1;
            if (i == 5){
                x = true;
            }
            console.log("running");
        }

Summary
=======

Explain, in your own words, the following programming constructs:

-   while loops
-   for loops
-   if-statements

Summarize the following ideas in your own words:

-   booleans
-   short-circuiting

After you&rsquo;re done, share your answers within your group and discuss them
