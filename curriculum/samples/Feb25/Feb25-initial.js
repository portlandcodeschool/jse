// Review:

// LESSON: Instance-specific options:
var view = new MyView({ // options object is argument to Ctor
	el:'#someID' //override prototype's default
});



// ---- EXERCISE 4 ----
// Generate an array of 64 SqView instances, each attached (via its `el`)
// to a different checkerboard square.

// ---------------------

// LESSON:  Initialize method;
//			Standard vs. Custom options

var MyView = Backbone.View.extend(); //simple View subclass


var view = new MyView({a:'a', b:'b', el:'', id:'id', model:'model'});
view
// Only certain "standard" options are included automatically:
// model, collection, el, id, className, tagName, attributes, events

// Each has a specific meaning in BB...

// model & collection:  data objects displayed by this view
// el: an existing DOM element
// className: CSS classes to be set on el
// tagName: what type of element to generate (if not in el)
// attributes: an object {attr1:val1, attr2:val2, ...} to be set on el
// events: sets up event handlers


// DIAGRAM initialize role...

// initialize method receives arguments to ctor: 
var MyView = Backbone.View.extend({
	initialize: function(opts) {
		// all opts are received:
		console.log("Received opts: ", opts);
		// standard opts have already been included:
		console.log("Current props:", this);
	}
})
var view = new MyView({a:'a', b:'b', el:'', id:'id', model:'model'});
view


// Including custom instance properties:

//	initialize() method serves a proxy ctor;
//	use it to include custom options:

var MyView = Backbone.View.extend({
	// initialize serves as proxy ctor...
	initialize: function(opts) {
		//include only some opts
		this.custom = opts.custom;
	}
})
var view = new MyView({a:'a', b:'b', el:'', id:'id', model:'model'});
view


// Include all options:
var MyView = Backbone.View.extend({
	initialize: function(opts) {
		// include all opts
		_.extend(this,opts);
		// But beware: overwrites standard opts too!
	}
})
var view = new MyView({a:'a', b:'b', el:'', id:'id', model:'model'});
view




// Separate standard opts from custom ones:
var MyView = Backbone.View.extend({
	// initialize serves as proxy ctor...
	initialize: function(std,custom) {
		// ignore std opts, included automatically
		if (custom) {
			_.extend(this,custom);
		}
	}
})
var view = new MyView(	{el:'', id:'id', model:'model'},
						{a:'a', b:'b'} );
view





// ---- EXERCISE 5: ----
// Create another subclass of Backbone.View, named GridView,
// which will manage the entire grid.
// Attach it to your DOM element with the id 'checkerboard'.
// Give it an initialize method which generates an array of 64 SqView instances,
// each with an `el` of one of the checkerboard's squares.
// Give each sub-view an `id` property matching the `id` of its `el`.
// Store that array of sub-views in a custom property of the grid view.
// Give the grid view another method `children()` which returns the array of sub-views.




// ---- EXERCISE 6: ----
// Modify GridView so that when an instance `grid` makes its subviews, each one gets a
// custom property `parent` pointing back to `grid`, the GridView instance.




// ---- EXERCISE 7: ----
// Give the GridView instance a `render()` method which will call the `render()` of
// each of its children().




// ---- EXERCISE 8: ----
// Replace your original Checkerboard constructor by making GridView and its children do
// the work of generating and attaching their DOM elements, as well as linking to them
// with their respective `el`s.

// ---- EXERCISE 8a: ----
// Each child (square) view should create its own `el` (DOM element),
// and within its initialize() method, attach its new `el` as a DOM child of its
// parent's `el`.

// ---- EXERCISE 8b: ----
// Also within the child view's initialize method, style its `el` be red or black.
// You can use either its `id` property or a different initialization parameter to determine
// its color.

// Ignore the render() method for now.

// ---- EXERCISE 8c: ----
// Rewrite the grid (parent) view so that its initialize() method contains one or more loops
// to generate all of its child views (each of which will create its own `el`, as above).
// If you use a <table> structure, you may need to generate some <tr>s which do not have views,
// in addition to the <td>s of the child views.
// You may prefer to use <div>s or <li>s instead.



