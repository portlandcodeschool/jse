General Rules and Setup for Interpreting a Program
==================================================

First, mark down a box labeled &ldquo;current line&rdquo;. Every step you take, make a note of what line you&rsquo;re on.

You&rsquo;ll start at the first line of the program and, unless some rule specifies otherwise, go to the *next* line of code after you&rsquo;re finished with each line.

Also make a special section labled &ldquo;output&rdquo;, which you&rsquo;ll use every time something is written to the console by the program.

If a line of code is an expression **only**, evaluate the expression as normal then **throw away** the return value of the expression.

Variable declaration
====================

Look at your program. For all of the instances you see of `var name` or `var name = expression` (that isn&rsquo;t in the body of a function (and if you haven&rsquo;t seen functions yet, don&rsquo;t worry)), make a table that looks like

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col  class="left" />

<col  class="left" />

<col  class="left" />

<col  class="left" />

<col  class="left" />
</colgroup>
<tbody>
<tr>
<td class="left">name1</td>
<td class="left">name2</td>
<td class="left">name3</td>
<td class="left">name4</td>
<td class="left">&#x2026;</td>
</tr>


<tr>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
</tr>
</tbody>
</table>

It should have one column for each variable name. 

You don&rsquo;t actually fill anything **in** to start, instead if there&rsquo;s a `= expression` portion of the variable declaration you wait until the line in question is reached before filling in the entry in the table according to the rules of the assignment expression.

Expressions
===========

If an **expression** is the only thing on the line, evaluate the expression according to the appropriate rules for that expression.

Arithmetic
----------

Numbers evaluate to themselves. Arithmetic operations evaluate exactly according to their  them to: `+` is addition, `-` is subtraction, etc.

Strings
-------

Strings evaluate to themselves. The `+` operator &ldquo;concatenates&rdquo; two strings together.

Booleans
--------

`true` evaluates to `true`, `false` evaluates to `false`. 

The boolean operator `!` takes an expression. Evaluate `! exp` by first evaluating the expression `exp`. If it returns a truthy value, then return `false`. If it returns a falsy value, then return `true`.

The short-circuiting operators `&&` and `||` have special rules. `exp1 && exp2` is evaluated by first evaluating `exp1`, if it is truthy then evaluate `exp2` and return its value. If it is falsy, then return the value of `exp1`.

`exp1 || exp2` is evaluated by first evaluating `exp1`. If it is truthy then return the value of `exp1`. If it is falsy then evaluate `exp2` and return its value.

As a reminder, falsy values are `NaN`, `null`, `undefined`, `0`, ~""~, and `false`. Everything else is truthy.

Assignment
----------

Assignment is always of the form `name = expression`. First, you evaluate the expression based on the kind of expression it is, then fill whatever value it returns **into** the appropriate entry in the table.

The value you wrote into the table is also the value returned by the expression.

Output to console
-----------------

For purposes of &ldquo;being the interpreter&rdquo;, we&rsquo;re going to treat the function `console.log` as a special operation. When you see an expression of the form `console.log(exp)`, evaluate the expresion that is the argument, then write the value in the output column you&rsquo;ve set aside. As an expression, `console.log` returns `undefined`. 

typeof
------

The `typeof` operator takes an *expression* as an argument. Evaluate this expression is and return, as a string, the type of the value returned according to the following rules

-   numbers return &ldquo;number&rdquo;
    -   this includes `NaN` and `Infinity`
-   strings return &ldquo;string&rdquo;
-   undefined returns &ldquo;undefined&rdquo;
-   objects return &ldquo;object&rdquo;
-   booleans return &ldquo;boolean&rdquo;

Variables resolution
--------------------

To evaluate a variable, you have to first consider where the variable&rsquo;s `var` statement is and you then you examine the corresponding table that you made. If there is an overlap in names between two tables that are both visible from a point in the code, precedence goes to the more recently created table.

Function calls
--------------

A function is called when it is passed zero or more arguments. For example, `fun()`, `fun(1)`, `fun(1,2)`, etc. are all valid function calls.

A function call is evaluated by:

1.  substituting the passed in values for the arguments of the function, which means everywhere the formal argument was seen in the function body, rewrite it to be the corresponding value
2.  evaluate the body like you would a new program
    1.  make a variable table
    2.  evaluate each statement sequentially
    3.  if there is a return statement, then **stop** executing the function, go back to the point of where the function was called and hand back the value of the expression passed to the `return`
    4.  if there is no return statement by the end of the function, return `undefined`

1.  A caveat on variable tables for functions

    After exiting the function, if there is nothing else that can reference the function&rsquo;s local variable table, then you may erase the table.
    
    If, on the other hand, that table is still visible to some entity in the program, you may **not** erase it and must keep the variable table in play.

For loops
=========

A basic for loop has the form

    for (initialization; condition_for_continuing; next_step){
        statement1;
        statement2;
        statement3;
        ...
    }

It&rsquo;s not **strictly** required, but you should make the &ldquo;initialization&rdquo; code only be of the form `var name = exp` or `name = exp`. The condition for continuing the loop should be an expression that returns a boolean. The next step slot should be an assignment expression that modifies the variable named in the initialization.

The rule is that you 

1.  execute the code in the &ldquo;initialization&rdquo; slot
2.  evaluate the condition for continuing
    1.  if it is truthy, go to step (3)
    2.  if it falsey, jump to the line of code **after** the end of the for loop
3.  execute the statements in the for loop
4.  execute the code in the &ldquo;next step&rdquo; part of the for loop
5.  go to step (2)

While loops
===========

A while loop has the form

    while (condition){
        statement1;
        statement2;
        statement3;
        ...
    }

The rule is that you

1.  evaluate the condition
    1.  if it is truthy, go to step (2)
    2.  if it is falsey, jump to the line of code **after** the end of the while loop
2.  execute the statements in the while loop
3.  go to step (1)

If statements
=============

If statements have the basic form

    if (condition){
        statement1;
        statement2;
        ...
    }
    else {
        morestatement1;
        morestatement2;
        morestatement3;
    }

The rule for them is that you

1.  evaluate the condition
    1.  if it is truthy, perform the statements listed between the braces of the &ldquo;if&rdquo;
    2.  if it is falsy, perform the statements listed between the braces of the &ldquo;else&rdquo;

The other form of if-statement is to leave out the `else` branch. In this case, our rule reads

1.  evaluate the condition
    1.  if it is truthy, perform the statements listed between the braces of the &ldquo;if&rdquo;
    2.  if it is falsy, do nothing

Function declarations
=====================

There are two function declarations. There is the **expression** form which has the following syntax 

    function (arg1, arg2, ...) {
        statement1;
        statement2;
        statement3;
    }

This evaluates to a function value, which in our pen and paper we&rsquo;ll represent as a box that

-   contains the list of arguments to the function
-   the lines of code for the body of the function
-   an arrow pointing to the variable table within which the function was defined (this is important for calling functions!)

The second kind of function declaration, which is a **statement**, is the named function declaration, which has the following syntax.

    function name (arg1,arg2,arg3) {
        statement1;
        statement2;
        statement3;
    }

You evaluate this by treating it as equivalent to 

    var name = function (...){
       ...
    };
