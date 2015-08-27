---
layout: post
title: "DOM events and JQuery"
class: W Aug.26
date: 2015-08-26 00:00:01
---

## Basic DOM manipulation (continued)


Your checkerboard code from last time should be similar to the example below. Feel free to start from that example tonight instead of your own.

{% highlight javascript %}
function Checkerboard(container) {
	var numRows = 8;
	var numCols = 8;
	if (typeof container === 'string') {
		container = document.getElementById(container);
	}

	this.el = function() {
		return container;
	}

	this.render = function() {
		container.innerHTML = '';
		
		var tab = document.createElement('table');

		for (var r=0, id=0; r<numRows; ++r) {
			var tr = document.createElement('tr');
			tab.appendChild(tr);
			for (var c=0; c<numCols; ++c, ++id) {
				var td = document.createElement('td');
				td.setAttribute('id','square'+id);
				td.classList.add(((r+c)%2)?'odd':'even');
				tr.appendChild(td);
			}
		}
		container.appendChild(tab);
	}

	this.populate = function() {
		// to be continued...
	}
}

var board;
function doStuff() {
	board = new Checkerboard('checkerboard');
	board.render();
	board.populate();
}

window.onload = doStuff;
{% endhighlight %}

{% highlight css %}
/* CSS */
#checkerboard table {
	empty-cells:show;
	border-spacing:0px;
	text-align:center;
	font-size:18pt;
}

#checkerboard td {
	padding:0px;
	margin:0px;
	border:none;
	width:35px;
	height:35px;
}

#checkerboard td.even {
	background:black;
}

#checkerboard td.odd {
	background:red;
}
{% endhighlight %}

#### Exercise 6: Creating Text Elements

Create a CSS class 'checker' which styles some text
representing a checker.
Add a new Checkerboard instance method `populate()` which
adds 12 'X' checkers to the top three rows (in the correct cells)
and 12 'O' checkers to the bottom three rows.


#### Exercise 7: Event Handlers

Attach an event handler to each cell which will
`console.log` the id of that cell when it's clicked.




#### Exercise 8: Using the Event Parameter

Change the click event handler to `console.log`
the coordinates of the click!





#### Exercise 9: Using object methods as event handlers

1. Given the following code, explain what will happen when the DOM element `elem` is clicked:
<pre>
{% highlight javascript %}
var obj = {
	data: 123,
	get: function () {
		console.log(this.data);
	}};
elem.onclick = obj.get;
{% endhighlight %}
</pre>

2. Change the click event handler to `console.log` the letter of the checker in that cell, if any.




#### Exercise 10: Changing styles
Change the click handler to "highlight" any checker in the clicked cell.
Highlighting can be any change in appearance (e.g. set to boldface, change text color).  No more than one checker should be highlighted at a time.




#### Bonus take-home exercise:
Change the click handler to slide any checker in the clicked square
one row forward and diagonally:
if the click event is toward the left of the square, the checker moves
diagonally leftward, otherwise diagonally rightward.
(Hint: you'll need to calculate the coordinates of the click event relative to the target's origin.)

## JQuery

### Prelude: Overloading, Accessors, and Chaining

#### Overloading

"Overloading" a function means _varying its purpose depending on the number and type of its arguments_.

_Exercise: write an overloaded function._

#### Accessors

An "accessor" function is overloaded to both get and set an object property.

_Exercise: write an accessor method for a constructor of your choice._

#### Chaining

Setters may return the same object they manipulate, which affords "chaining".

_Exercise: write a set of chainable methods to support the following command:_
```
obj.name('Barney').species('dinosaur').color('purple').name();
```

### The "Magic Bag" wrapper object

{% highlight javascript %}

function magicBag(selector) {
	var matchingThings;

	if (selector[0]==='#') {
		matchingThings = [document.getElementById(selector)]
	} else if (selector[0]==='.') {
		matchingThings = document.getElementsByClass(selector);
	} else {
		matchingThings = document.getElementsByTagName(selector);
	}

	return {
		things: matchingThings,
		// setter methods:
		magic: function () {
			console.log('magic');
			return this;
		}
		shazam: function() {
			console.log('shazam');
			return this;
		},
		kaboom: function() {
			console.log('kaboom');
			return this;
		}
	}
}

// possible use:
var tds = magicBag('td');
tds.magic().kaboom().shazam();

// more informative name:
var $tds = magicBag('td');
$tds.magic().kaboom().shazam();
{% endhighlight %}

JQuery objects are a kind of Magic Bag!

## Some Overloaded Meaning of $

For lots more detail, see [jquery's documentation](http://api.jquery.com).

#### Element Retrieval:

```
$(selector)  // "#id", ".class", or "tag"
$(DOMnode)
$(array)
$([node0,node1, ...])
$(selector,contextNode)
$(selector,contextJQ)

//  all these return $stuff, as in:
var $stuff = $('tr'); //--> builds magic bag of all <tr> elements
```

#### Element Creation:

```
$("<TAG>...</TAG>")
$("<TAG>")
// example:
var $div = $('<div>');

$("<TAG>",descriptorObj)
// example:
var $img = $('<img>',{id:'id', href:'url'})
```

#### On-ready Event Handlers:

```
$('document').ready(whenReadyFn)
$(whenReadyFn)
```

#### Traversal:

```
$stuff.children() // elements only
$stuff.contents() // elements and text
$stuff.parent()
$stuff.prev()
$stuff.next()
$stuff.siblings()
```

#### Set Reduction/Filtering:

```
// Singletons:
$stuff.first();
$stuff.last();

$stuff[n]    //--> nth item as DOM element
$stuff.eq(n) //--> nth item as jq singleton

var $stuff = $('td');
var stuff0 = $stuff[0];
var $stuff0 = $stuff.eq(0);
stuff0 instanceof HTMLElement // true
$stuff0 instanceof $ //true


// Plurals:
$stuff.slice(from,to)
$stuff.filter(booleanFn)
$stuff.map(convertFn)
$stuff.has(selector | element)
$stuff.is(selector | Fn) --> boolean
$stuff.not(selector | Fn | stuff)
```

#### Set Addition:

```
$stuff.add(selector)
$stuff.add($morestuff)
```


#### Element Attachment/Detachment:

```
$child.appendTo($parent)
$parent.append($child)
$child.appendTo($parent)
$parent.append($child)
```

#### Content Replacement:

```
$stuff.html(newHTML);
```


#### Setting Classes:

```
$stuff.addClass()
$stuff.removeClass()
$stuff.toggleClass()
```

#### Animation:

```
$stuff.animate({cssProp:targetVal}, duration)


```


## JQuery exercise

In a new file, write a constructor `CheckerboardJQ` which is just like
`Checkerboard` but substitutes JQuery whenever possible.

When a checker is clicked, do some kind of animation with it.  Be creative!


#### Example: generating checkers

{% highlight javascript %}
var $XRows = $('tr').slice(0,2);
var $XStart = $('td.odd',$XRows);
$XStart.html('X').addClass('textChecker');


var $ORows = $('tr').slice(6,8);
var $OStart = $('td.odd',$ORows);
$OStart.html('O').addClass('textChecker');


// One pass:
var $allrows = $('tr'),
	$middle = $allrows.slice(2,6),
	$allcells = $allrows.not($middle)
					.children('.odd')
					.addClass('textChecker')
					.html(function(n){ //<--implicit iteration
						return (n<8?'X':'O')
					});

// CSS-generated content:
var $allrows = $('tr'),
	$middle = $allrows.slice(2,6),
	$allcells = $allrows.not($middle)
					.children('.odd')
					.addClass(function(n){
						return 'cssTextChecker'+
								(n<8?'X':'O')
					});
{% endhighlight %}

### JQuery Iteration

### Exercise: each vs. forEach

* `array.forEach(fn)` --> calls `fn(item,n)`

* `$stuff.each(fn)`   --> calls `fn(n,item)` with item as 'this'

Use JQuery's `each` method to turn each checker into a different number (instead of 'X' or 'O').


#### Implicit Iteration

```
$allcells.html(function(num) {
	return num;
});
```

