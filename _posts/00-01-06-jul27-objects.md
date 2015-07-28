---
layout: post
title: "CoreJS: Objects and Properties"
class: M July 27
date: 2015-07-27 00:00:01
---

## Codewars

We're going to use community of [Codewars](www.codewars.com/r/sqAU2Q) as a supplementary resource for collaboratively-filtered coding puzzles ("Kata").  Please make yourself an account, list 'PCS' as your clan, and try the first two Kata!

## Objects and Properties

1. Make an object representing yourself.  First declare a variable holding an empty object, then incrementally assign it 3 properties with keys and values of your choice.

2. Use "object literal notation" to make similar objects for each other person at your table, using a different variable for each.

3. Make an object for the entire table, stored in variable `table`, with a property for each person.  The property name should be the person's name, and its value should be the person's object.

4. Write four "chained" expressions, each referencing one property of each person at the table.  Each expression should start with variable `table` and contain no other variables, only property names.

## Looping over properties

5. Write a function `personIsAt(name,tableObj)` which returns a Boolean: `true` if a person named `name` is at table `tableObj`, otherwise `false`.

6. Write a function `peopleAt(tableObj)` which returns a string listing all the names of people at your table `tableObj`.  Separate each name with a newline ('\n');

7. Write a function `whoHasKey(tableObj,key)` to return the name of any person at your table (parameter `tableObj`) who has a key matching parameter `key`

8. Write a function `whoHasVal(tableObj,val)` to return the name of any person at your table who has a property with value `val`.

9. *Bonus Challenge*: Modify your functions `whoHasKey` and `whoHasVal` to return a list of _all_ people matching the key or value, respectively.

## JSON transmission

1. Use `JSON.stringify()` to convert your table object (and all its people) to a JSON string.  Then have one person per group post that string in a snippet on Slack.

2. Everyone: collect the JSON strings from all four groups and put them together into a single array, representing four tables.

3. Use your `whoHasVal(table,val)` function to find the name of someone _at another table_ who has a property with a value of your choice.


## References

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

## Circularity

1.  Draw the data structure built by the following code:

```
var loop1;
var loop2;
loop1 = {link : loop2};
loop2 = {link : loop1};
loop1.link.link
```

2.  Modify the code to produce two mutually-linked objects.

