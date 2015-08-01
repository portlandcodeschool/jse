---
layout: post
title: "Workshop: Callbacks, Array Methods, Data Structures"
class: Sat. Aug.1
date: 2015-08-01 00:00:01
---

<!--# Callbacks, Array Methods, and Data Structures-->

Today we're going to build a Treehouse course recommender system!
Everyone here has earned some Treehouse badges (i.e. completed courses),
and that data can be downloaded from Treehouse and manipulated with Javascript.

Our goal is to unify all data from all students into one integrated data structure.
Then we can calculate the similarity between any two people based on the courses they have each complete.
Finally, we can use that measurement to do a form of _collaborative filtering_:
recommending which courses a person might take next, based on what similar people have taken!


The primary Javascript feature we'll use is a set of three array methods (`forEach`, `map`, and `sort`) which use _callbacks_ --
 functions which are passed as arguments to those array methods to customize their behavior.

We'll also make extensive use of _index_ or _dictionary_ objects, which can other named objects and retrieve them quickly.

Before we work with the Treehouse dataset, which can be huge and confusing, we'll do most of our thinking and code-writing
with a "toy" data structure.




## Callbacks

A callback is just a function passed as an argument to another function.  The receiving function is reponsible for calling it at the right time,
but that receiver has no idea what the callback function does.  Conversely, the callback knows how to process its own arguments,
but it has no idea when it will be called nor precisely what its arguments will be.

He is a simple example to illustrate the idea:

```
// Example Callback Functions:
function shout(str) {
	var output = str.toUpperCase()+'!';
	console.log(output);
	return output;
}
function spell(str) {
	var output = str.split('').join('...');
	console.log(output);
	return output;
}

// Example Receiver Functions:
function withThird(array,callback) {
	for (var i=0; i<2; ++i)
		console.log(array[i]);
	callback(array[i]);
}
function withThirdFromEnd(array,callback) {
	for (var i=array.length-1; i>array.length-3; --i) {
		console.log(array[i]);
	}
	callback(array[i]);
}

var fruits = ['apple','banana','cranberry','plum'];

withThird(fruits,shout);
withThird(fruits,spell);

withThirdFromEnd(fruits,shout);
withThirdFromEnd(fruits,spell);

```

### forEach

All arrays have a method called `forEach` which run a callback you provide on every element of the array.
No value is returned, so the callback must have some side-effect when it's called.


1. Use `forEach` to `shout` every string in an array of strings.

2. Now use it to `spell` a series of strings.

3. Pretend that `forEach` doesn't yet exist and you have to write it yourself.  Complete the following template to implement it:

```
function forEach(array,callback) {
	// do callback on every element of array...
}
```

### map

All arrays have a method called `map`.  `map`, like `forEach`, runs its callback on each array element, but it requires the callback to return a value each time.
The result of `map` is a new array build from those individual return values, one per element.

1. Use `map` to build an array of shouted strings.

2. Use `map` to build an array of spelled strings.

3. Pretend that `map` doesn't yet exist and you have to write it yourself.  Complete the following template to implement it:

```
function map(array,callback) {
	// build a new array using callback to transform each element of array
}
```

### sort

Finally, any array can 	`sort` itself.  The callback to `sort` has *two* parameters, which are different, unknown elements of array,
 and the callback indicates which is greater by returning either a positive or negative number.


## Mini-Data: Chores!

Here is a toy data-structure we can use to make sense of the computations we'll need.  It represents a set of family members responsible for various household chores.


```
// people
var mom  = {name:'mom',  jobs:{}},
	dad  = {name:'dad',  jobs:{}},
	billy= {name:'billy',jobs:{}},
	sally= {name:'sally',jobs:{}};

// chores
var wash=	{job:'wash',who:{}},
	dry =	{job:'dry', who:{}},
	mop =	{job:'mop', who:{}},
	cook=	{job:'cook',who:{}};

var people = {
	mom:mom,
	dad:dad,
	billy:billy,
	sally:sally
};

var jobs = {
	mop:mop,
	cook:cook,
	wash:wash,
	dry:dry
};

wash.who = {mom:mom,billy:billy};
dry.who  = {dad:dad,billy:billy,sally:sally};
cook.who = {dad:dad,sally:sally};
mop.who  = {dad:dad,mom:mom};

mom.jobs  = {wash:wash,mop:mop};
dad.jobs  = {dry:dry,cook:cook,mop:mop};
sally.jobs= {dry:dry,cook:cook};
billy.jobs= {wash:wash,dry:dry};
```

In this implementation, the members of each row or column is an "index" (or "dictionary") object, whose keys are the names of the objects in that row or column,
and whose values are the objects with those names.

In all of the challenges below, your code should not contain any reference to particular people or particular jobs.
<!--It may use fixed property names like 'job','who','name'.-->

## Pseudo-coding

Before coding any components, we'll think in broad terms about what we're trying to accomplish and list some tools we'll need.  Then, before writing each tool, we'll practice verbalizing what the solution will require.

## Coding Exercises

### Warm-up 

#### hasJob(person,job) --> Boolean

Write a function hasJob(personName,jobName) returning true or false.
For example:

```
hasJob('mom','mop') --> true
hasJob('mom','dry') --> false
```

Now write a variant hasJob(personObj,jobObj) which receives objects instead of strings:

```
hasJob(mom,mop) --> true
hasJob(mom,dry) --> false
```


#### peopleDoing(job) --> array of objects

Write a function `peopleDoing(job)` which returns an array of people-objects


#### jobsDoneBy(person) --> array of objects

Write a function `jobsDoneBy(person)` which returns an array of job-objects


###  Display functions

#### maxLength(strings) --> number

Write a function maxLength(strings) which returns the length of the longest string in the array `strings`


#### sizeColumns(rowNames, colNames) --> array of ints
Write a function sizeColumns(rowNames, colNames) which returns an array of widths, one per column.
The width of the first column should depends on the longest string in rowNames; the width of all other columns
depend on the longest string in colNames.  There should be one leading column (for all rowNames) plus one column for each of colNames.

For example:
`var cols = sizeColumns(['wash','dry','cook','mop'],['mom','dad','sally','billy'])` should return [4,5,5,5,5].

#### writeRow(colSizes, strings)

Write a function `writeRow(colSizes, strings)` which `console.log`s a single string composed of strings,
each padded with space to match the corresponding width in array `colSizes`.

You may use the functions `leftPad(string,totalWidth)` and `rightPad(string,totalWidth)` included here:

```
function leftPad(str,len) {
	var padding = Array(len+1).join(' ');
	return (padding+str).slice(-len);
}

function rightPad(str,len) {
	var padding = Array(len+1).join(' ');
	return (str+padding).slice(len);
}
```



#### writeJobsTable(people, jobs)

Write a function `writeJobsTable(people,jobs)` which will `console.log` the following series of lines:

```
       mom   dad   sally billy
------------------------------
wash | X                 X
dry  |       X     X     X
cook |       X     X
mop  | X     X
```

The functions `sizeColumns` and `writeRow` will help you format the table.

### Data processing

#### intersectJobs(nameA,nameB) --> array of strings

Write a function `intersectJobs(nameA,nameB)`
to return an array of names of the jobs shared by the people named `nameA` and `nameB`.
For example:

```
intersectJobs('dad','sally') // should return either ['cook','dry'] or ['dry','cook']
intersectJobs('mom','sally') // should return []
```


#### similarity(personA,personB) --> number 0..1

Write a function `similarity(personA,personB)` which receives two person objects
and calculates a number from 0 to 1 representing the similarity of their jobs.
Use the following measure of similarity:
_the number of jobs they share as a fraction of the longer job list._
Make use of your `intersectJobs` function.

```
//person similarity matrix:
	mom	dad	sal bil
mom	1	.33	0	.50
dad		1	.67	.33
sal			1	.50
bil				1
```

#### score(job,person) --> number
Write a function `score(job,person)` 
which generates a number representing the "compatibility" of that job and that person.
Compatibility is calculated as follows:
_find all *other* people (excluding `person`) who have that job, then sum together the similarity each has to `person`_.

For example, `sally` is reasonably compatible with mopping because `dad` does similar jobs to `sally` but also mops:

```
score(mop,sally) //--> (0 for mom + .67 for dad)  === .67
```

But mom is super-compatible with drying, because everyone else does it already!

```
score(dry,mom) //--> (.33 for dad + 0 for Sally + .50 for Billy) === .83
```


#### recommendJobsFor(person) --> array of objects
Write a function `recommendJobsFor(person)`
which returns an array of objects containing possible new jobs for `person` with compatibility scores for each.
The objects in the array should be sorted in descending order of scores, so that the strongest recommendation is first.
Omit any jobs which `person` is already doing or for which they have zero compatibility.

For example, mom could do either of two new jobs, drying or cooking.  Recommendations for her would be:

```
recommendJobsFor(mom) //--> [{job:dry, score:.83},{job:cook, score:.33}]
```


## Real-world data: Treehouse Badges!

Now that we've explored the general patterns of the data structure, we're ready for the real thing!

