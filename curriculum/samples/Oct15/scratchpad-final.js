// READ: http://jqfundamentals.com/chapter/jquery-basics


//JQuery prelims:

//Overloading
function useThing(thing) {
	if (isEdible(thing))
		spreadOnToast(thing);
	else if (isAutomotiveTool(thing))
		fixWith(car,thing);
}





//Counting arguments
function checkArg(arg) {
	if (arg)
			console.log("Arg is defined");
	else
			console.log("Arg is undefined");
}

checkArg();
/*
undefined
*/
checkArg(undefined); // can't distinguish
/*
undefined
*/

// Better way:
function checkArg(arg) {
	if (arguments.length) {
		console.log("You passed in one argument with value "+arg);
	} else {
		console.log("You passed no arguments")
	}
}

checkArg();
checkArg(undefined);


function acceptUnlimitedArgs() {
	for (var i = 0; i< arguments.length; i++) {
		console.log(arguments[i]);
	}
}
acceptUnlimitedArgs(1,2,3,4,5,6,7,8)

/*
undefined
*/


obj.getProp();
obj.setProp(val);
obj.prop(); //getter
obj.prop(val); //setter

//Overloaded Getters/Setter (i.e. Accessor)

function accessProp(prop) {
	if (arguments.length>1) { //act as setter
		this[prop] = arguments[1];
		return;
	} else { //act as getter
		return this[prop];
	}
}

var obj = {accessProp:accessProp};
obj.accessProp('flavor','apple');
/*
undefined
*/
obj.accessProp('flavor');
/*
apple
*/
obj.accessProp();

/*
undefined
*/
// Dedicated accessor:
function flavorAccessor() {
	if (arguments.length > 0) {// setter
		this._flavor = argument[0];
		return;
	} //else
	return this._flavor;
}
var obj = {flavor:flavorAccessor};
obj.flavor('apple'); //setter
obj.flavor(); //getter



//Chaining
function accessProp(prop) {
	if (arguments.length>1) { //act as setter
		this[prop] = arguments[1];
		return this; //<<----- ONLY DIFFERENCE: return same obj
	} else { //act as getter
		return this[prop];
	}
}
obj.fn1(val).fn2(val)...

//Use:
var obj = {prop:accessProp};
obj.prop('name','Barney').prop('species','Dinosaur').prop('color','purple').prop('name');

// Or more common:
// obj.name('Barney').species('dinosaur').color('purple').name();
person.friend('stacey').friend('sara').



//=== jQuery selections (sets) ===



//==== Overloading in jQuery =====

// (see http://api.jquery.com)

// ---- Retrieval: ----

//$(selector)
//$(DOMnode)
//$(array), $([node0,node1...])
//$(selector,contextNode)
//$(selector,contextJQ)
//  all these return --> $stuff

// ---- Traversal: ----
//$stuff.children() // elements only
//$stuff.contents() // elements and text
//$stuff.parent()
//$stuff.prev()
//$stuff.next()
//$stuff.siblings()


// ---- Set adjustment: ----

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

// Filtering
//$stuff.slice(from,to)
//$stuff.filter(booleanFn)
//$stuff.map(convertFn)
//$stuff.has(selector | element)
//$stuff.is(selector | Fn) --> boolean
//$stuff.not(selector | Fn | stuff)

// Addition
//$stuff.add(selector)
//$stuff.add($morestuff)

// Creation:
//$(<HTML>...)
//$(<TAG>,descriptorObj)


// Attachment/Detachment
//$child.appendTo($parent)
//$parent.append($child)
//$child.prependTo($parent)
//$parent.prepend($child)

//$stuff.html(newHTML);

// Loading:
//$(document).ready(whenReadyFn)
//$(whenReadyFn)
//$(function(){...})

// Decoration:

//$stuff.addClass()
//$stuff.removeClass()
//$stuff.toggleClass()








// Example: generating checkerboard

function makeBoard() {
	var $tab,$row,$cell;
	$tab = $('<table>')
				.attr('id','checkerboard')
				.appendTo('body');

	for (var i=0; i<8; i++) {
		$row = $('<tr>').appendTo($tab);
		for (var j=0; j<8; j++) {
	    	$cell = $('<td>')
	    		.addClass((i%2==j%2)?'odd':'even')
	    		.appendTo($row);
	  	}
	}
}

// EXPERIMENT:
$('<table>').attr('id','checkerboard').appendTo($('body'));
$.each(Array(8),function() {$('<tr>').appendTo($('table'))});
$.each(Array(8),function(x) {$('<td>').appendTo($('tr')).addClass(x%2?'odd':'even')});


// add linear ids for odd squares:
var $oddtd = $('td.odd');

$oddtd.each(function(n,elem){
	elem.id = "bob";
});
// OR:
$('td.odd').each(function(n){
	this.id = "id"+n;
});
// OR:
$('td.odd').each(function(n){
	$(this).attr('id','id'+n);
});
// OR:
$('td.odd').attr('id',function(n){ //"Implicit iteration"
	return 'newid'+n;
});

$('<img>').attr('src',function(n){return 'image'+n});


// Example: generating checkers

var $XRows = $('tr').slice(0,2);
var $XStart = $('td.odd',$XRows);
$XStart.html('X').addClass('textChecker');


var $ORows = $('tr').slice(6,8);
var $OStart = $('td.odd',$ORows);
$OStart.html('O').addClass('textChecker');


// Or combine:
$all = $XStart.add($OStart);

// One pass:
$allrows = $('tr');
$middle = $allrows.slice(2,6);
var $allcells = $allrows.not($middle)
					.children('.even')
					.addClass('textChecker')
					.html(function(sq){
						return (sq<8?'x':'o')
					});




// Turn into numbers:
$all.each(function(num,it) {
	$(it).html(num)
})

// OR:
$all.each(function(num) {
	$(this).html(num)
})
