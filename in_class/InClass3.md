Array Exercises
===============

Examine the following code and, without running it, predict what the answers will be:

1.  var x = [1,2,3,4];
        console.log(x.length);
        x = x.concat(x);
        console.log(x.length);

2.  var x = [1,2,3,4,5];
        console.log(x.slice(3));

3.  var x = [];
        x.push(1);
        x.push(2);
        console.log(x);
        x.shift();
        console.log(x);

Iteration Through Arrays: I
===========================

Examine the following code and step through it by hand. Explain, in words, what this program does. Compare your answer with other members of your group.

    var x = [1,2,3,4,5];
    
    for (var i=0; i < x.length; i = i + 1){
        if (i % 2 == 0){
            console.log(i + " : " + x[i]);
        }
    }

Now, write a small program that

1.  declares a variable and fills it with an empty array
2.  iterates from 1 through 10
    1.  puts each odd number in the array
3.  prints out the array

Evaluate it by hand when you&rsquo;re done (at least for a couple of iterations) and confirm it works correctly.

Function Practice
=================

Examine the following code and execute it by hand.

    var thing = function (fun, arg, num) {
        var result = arg;
        for (var i = 0; i < num; i = i+1){
            arg = fun(arg);
        }
        return arg;
    }
    
    var mult = function (num){
        return num*num;
    }
    
    console.log(thing(mult,2,4));

Explain in words what this program does?

Iteration Through Arrays: II
============================

Convert the code from the first array iteration exercise to use `.forEach` instead of a for-loop.
