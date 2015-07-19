


//==== Overloading in jQuery =====

// (see http://api.jquery.com)

// ---- Retrieval: ----

//$(selector)
//	#id
//	.class
//	tag

//$(DOMnode)
//$(array)
//$([node0,node1, ...])
//$(selector,contextNode)
//$(selector,contextJQ)

//  all these return --> $stuff

var $stuff = $('tr'); //--> builds set

// ---- Traversal: ----

//$stuff.children() // elements only
//$stuff.contents() // elements and text
//$stuff.parent()
//$stuff.prev()
//$stuff.next()
//$stuff.siblings()


// ---- Set Reduction/Filtering: ----

// Singletons:
//$stuff.first();
//$stuff.last();

//$stuff[n] // --> nth item as DOM element
//$stuff.eq(n) //--> nth item as jq singleton

var $stuff = $('td');
var stuff0 = $stuff[0];
var $stuff0 = $stuff.eq(0);
stuff0 instanceof HTMLElement // true
$stuff0 instanceof $ //true


// Plurals:
//$stuff.slice(from,to)
//$stuff.filter(booleanFn)
//$stuff.map(convertFn)
//$stuff.has(selector | element)
//$stuff.is(selector | Fn) --> boolean
//$stuff.not(selector | Fn | stuff)

// ---- Set Addition: ----

//$stuff.add(selector)
//$stuff.add($morestuff)

// ---- Element Creation: ----

//$("<TAG>...</TAG>")
//$("<TAG>")
var $div = $('<div>');

//$("<TAG>",descriptorObj)

var $img = $('<img>',{id:'id', href:'url'})


// ---- Element Attachment/Detachment ----

//$child.appendTo($parent)
//$parent.append($child)
//$child.appendTo($parent)
//$parent.append($child)

// ---- Content Replacement ----

//$stuff.html(newHTML);



// ---- Classes: ----

//$stuff.addClass()
//$stuff.removeClass()
//$stuff.toggleClass()

// ---- Loading: ----

//$('document').ready(whenReadyFn)
//$(whenReadyFn)


// ---- Events: ----

// $stuff.click(function(evt) {});

// $stuff.on('click', function(evt) {})

// $stuff.on('click', {key1:value1, key2:value2},
//	  function (evt) {
//	  	evt.data.key1;
//	  	evt.data.key2;
//	  })






// ===== EXERCISE: =====
// Write a constructor CheckerboardJQ which is just like
// you current Checkerboard implementation
// but substitutes JQuery whenever possible

// Include an $el() getter method which returns the JQ-object
// containing your el().

// Start with the board render(), but also upgrade your checkers
// populate() if time allows.

// ====================




// Example: generating checkers

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


// ----Iteration: each vs. forEach ------

// array.forEach(fn) --> calls fn(item,n)

// $stuff.each(fn)   --> calls fn(n,item)
//	with item as 'this'

// Example:
// Report ids of occupied cells:
$allcells.each(function(num,it) {
	console.log(it.id);
})


// Turn all checkers into numbers:
$allcells.each(function(num,it) {
	$(it).html(num)
})

// OR:
$allcells.each(function(num) {
	$(this).html(num)
})


// Implicit Iteration:
$allcells.html(function(num) {
	return num;
})