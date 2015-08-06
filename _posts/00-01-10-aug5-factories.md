---
layout: post
title: "CoreJS: Factory and Array Practice"
class: W Aug.5
date: 2015-08-05 00:00:01
---

## Review: `this` pitfalls

There's a problem in the code below:

```
function talk() {
	console.log(this.noise);
}

var animals = [dog, cat, canary];
animals.allTalk = function() {
	this.forEach(talk);
}
animals.allTalk(); // failure!
```

Identify the problem and fix it!  Rewrite the `allTalk` method of array `animals` to  
make each animal talk.  You must use function `talk` without changing its definition, and `forEach(something)`.
`something` should be a function which is not `talk` but instead somehow calls `talk`.

## Embedding JS in HTML

Write an HTML file which embeds a javascript file in a `<script>` tag.

As you complete the exercises below, save them in that javascript file so that they can be run by loading your HTML file.


## Finding one's marbles

1. Write a marble factory which can generate marbles with a custom size and color (having a property for each).

2. Give each marble instance a method `isBigger(other)` which returns true if it is bigger than another marble, `other`.  Attach that method to the factory initially, then link each marble instance to it, so that they all share the same function.


## In the bag

Next, you'll implement an abstract data structure for a bag, which contains multiple items (e.g. marbles) jumbled together.

1. Write a factory function `makeBag(items)` which makes bag instances.  Each bag holds a collection of items, and the parameter `items` is an array listing the items the bag starts with (though more may be added).  Each bag instance should have the following methods:

    1. `put(item)`: places item into the bag in an unspecified position.

    2. `draw()`: removes a random item from the bag and returns it.

    3. `divide(criterionFn)`: removes from the bag all items for which the callback `criterionFn(item)` returns truthy, and returns a new bag with just those items.  The original bag will retain the items not matching `criterionFn`.

    4. `serialize(compareFn)`: returns an array containing all items in the bag, sorted according to `compareFn`.

2. Make a bag and fill it with 100 marbles of random size 1-4, with (nearly) equal numbers of red, blue, and green.

    1. Use your `divide` method to extract the red marbles into another bag.

    2. `serialize` the red marbles into an array sorted by marble size, large to small.

    3. `serialize` the non-red marbles from the original bag, sorted by color (blues before greens).

3. Make another bag which holds the names of everyone in the class.  Serialize it in *reverse* alphabetical order.

## Samples

[scratchpad]({{ site.baseurl }}/curriculum/samples/Aug5/Aug5-scratchpad.js)

[console]({{ site.baseurl }}/curriculum/samples/Aug5/Aug5-console.js)


