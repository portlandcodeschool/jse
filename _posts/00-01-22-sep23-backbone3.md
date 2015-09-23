---
layout: post
title: Backbone Persistence
class: W Sep.23
date: 2015-09-23 00:00:01
---

## Summary of Important Backbone Methods

### Model
	* properties you should set:
		defaults
		urlRoot
	* properties you might get:
		attributes
	* methods you might use:
		get()
		set()
		save()
		fetch()

### Collection
	* properties you should set:
		model
		url
	* properties you might get:
		length
		models
	* methods you might use:
		add()
		create()
		at()
		where()
		findWhere()
		pluck()
		fetch()

### Views
	* properties you should set:
		events
		template
	* properties you always get:
		el  (you might also set this)
		$el
	* methods you should set:
		initialize()
		render()
	* methods you might use:
		remove()

## Model Persistence Exercise

Before we visit the last part of the tutorial, let's practice loading and saving individual models.  We can do it from scratch using ajax!

First, make sure you have a copy of three files, found in the [original repo][backbone-repo] but also listed below:

---
* modelServer.js

```javascript

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));
app.use(express.static(__dirname));

var texts = [];

// Allow optional test data...
var testValues = ['Zero','One','Two','Three','Four','Five...data...things!']
var useTestValues = process.argv[2];// a number, optional extra argument when starting server
if (useTestValues)
	texts = testValues.slice(0,useTestValues);

function showData() {
	console.log('Data store is now: ', texts);
}

/*
app.get('/texts/:id', function (req, res) {
    var id = req.params.id;
    console.log('Sending text #%s...',id);
    res.send({value : texts[id]});
});

app.put('/texts/:id', function (req, res) {
	var id = req.params.id;
	console.log('Receiving text #%s...',id);
	texts[id] = req.body.value;
	showData();
	res.send({});
});

app.post('/texts', function (req, res) {
	console.log('Receiving new text...');
	var newid = texts.length;
	console.log('Assigning id of %s',newid);
	texts[newid] = req.body.value;
	showData();
	res.send({id:newid});
});

app.get('/texts', function (req, res) {
	console.log('Sending all texts...');
	showData();
	var textsAndIDs = texts.map(function (v, i) {
		return {id : i, value : v};
	});
	res.send(textsAndIDs);
});
*/

app.listen(3000);
showData();
```

---
* model.html

```html
<!doctype html>
<html>
  <head>
    <title>Persisent Model Demo</title>
    <script type="text/javascript" src="js/jquery-2.1.4.js"></script>
    <script type="text/javascript" src="js/underscore.js"></script>
    <script type="text/javascript" src="js/backbone.js"></script>
    <script type="text/javascript" src="model.js"></script>
  </head>
  <body>
  </body>
</html>
```

---
* model.js

```javascript

var TextModel = Backbone.Model.extend({
    defaults : {"value" : ""},
    urlRoot: '/texts',
    //fetch: function() {},
    //save: function() {},
    initialize : function () {
        this.fetch();
    },    
    replace : function (str) {
        this.set("value", str);
        this.save();
    }
});


/*
var TextCollection = Backbone.Collection.extend({
    model : TextModel,
    url : "/texts",
    initialize: function () {
        this.fetch();
    }
});

var textCollection = new TextCollection();
*/

```

### Exercise

1. Notice that the server can be started with or without test data.
Starting it with `node modelServer.js` runs the server with no initial data.
Starting it with `node modelServer.js N` for some digit N will give the server a few test models to work with.

2. Start the server with N=6, direct your browser to `localhost:3000/model.html` and open the console.

3. Test out models' built-in `fetch()` method.  In the browser console, make a `new TextModel({})`.  You'll get a 404 error.  Can you explain why?

4. Next try `new TextModel({id:3})`.  What happens now and why?

5. Write your own version of `fetch()`!
Uncomment TextModel's fetch method and implement it using `$.get(...)`.

6. Now try using the model's built-in save method.  On your current model, try `model.replace('value','test')`.  You'll get a 404 error.  Why?

7. Uncomment the server's 'put' route and try again.

8. Write your own version of `save()`!
Uncomment TextModel's save method and implement it using a variant of `$.ajax(url,{method:'PUT'})`.  Ignore any models which don't have an id attribute.

9. Test your save() on a new model: `new TextModel({value:test, id:1})`.  Check the server log!  Then reload your browser page and try `new Model({id:1})`.  Did you model save and load correctly?

10.  Now try saving a model which has no id!  First uncomment the server's 'post' route.  Then modify your save() method to make an ajax POST request for a model with no id.

11.  Finally, uncomment the last server route and the client's TextCollection code.  What happens when you reload your browser page?


## Backbone Part 4: Backbone collection with server

### Outline

Next, as a short section we'll be covering how to synchronize Backbone collections with the server. To this end, we'll convert the previous text-fields examples to communicate with a small Express server much like we did in the previous section. 

### Lesson and Code

As usual, the first piece is our HTML which isn't going to change except for the filename:

file: textlistServe.html

```HTML
    <!doctype html>
    <html>
      <head>
        <title>Text in Lists</title>
        <script type="text/javascript" src="js/jquery-2.1.4.js"></script>
        <script type="text/javascript" src="js/underscore.js"></script>
        <script type="text/javascript" src="js/backbone.js"></script>
        <script type="text/javascript" src="textlistServe.js"></script>
      </head>
      <body>
        <div id="listdiv"></div>
      </body>
    </html>
```

Now we come to the client-side application. In the first place, we have our basic model and view. This model and view is going to be mostly similar to what we've seen before. The main change that we make is that we call `.save` in the `replace` function of the model and call `fetch` in our initialization.

file: textlistServe.js

```JavaScript
    var TextModel = Backbone.Model.extend({
        defaults : {"value" : ""},
        initialize : function () {
            this.fetch();
        },    
        replace : function (str) {
            this.set("value", str);
            this.save();
        }
    });
    
    var TextView = Backbone.View.extend({
        render: function () {
            var textVal = this.model.get("value");
            var btn = '<button>Clear</button>';
            var input = '<input type="text" value="' + textVal + '" />';
            this.$el.html("<div>" + input + btn + "</div>");
        },
        initialize: function () {
            this.model.on("change", this.render, this);
        },
        events : {
            "click button" : "clear",
            "keypress input" : "updateOnEnter"
        },
        replace : function () {
            var str = this.$el.find("input").val();
            this.model.replace(str);
        },
        clear: function () {
            this.model.replace("");
        },
        updateOnEnter: function (e){
            if(e.keyCode == 13) {
                this.replace();
            }
        }
    });
```

The more significant changes come in our collection. First, note that we set the url **in the collection** rather than in the individual models, now. In fact, our `urlRoot` property from the last section is only to be used if we're planning to not use our models as part of a collection. 

```JavaScript
    var TextCollection = Backbone.Collection.extend({
        model : TextModel,
        url : "/texts",
        initialize: function () {
            this.fetch();
        }
    });
```

For the view, we make a rather important change in the `addCollection` call: we need to now set the **ID** of each model. To simplify things, we're going to just assign all of our IDs on the client side, using a simple counter to keep each of the IDs unique by incrementing them. 

```JavaScript
    var idCount = 0;
    
    var TextCollectionView = Backbone.View.extend({
        render : function () {
            var btn = '<button id="addbutton">Add Text</button>';
            var div = '<div id="text-list"></div>';
            this.$el.html(div + btn);
        },
        initialize : function () {
            this.listenTo(this.collection, 'add', this.addOne);
        },
        events : {
            "click #addbutton" : "addCollection"
        },
        addOne : function (txt) {
            txt.set("value","Enter something here...");
            var view = new TextView({model : txt});
            view.render();
            this.$("#text-list").append(view.$el);
        },
        addCollection : function () {
            this.collection.create({id : idCount});
            idCount = idCount+1;
        }
    });
    
    var textCollection = new TextCollection();
    
    var textCollectionView = new TextCollectionView({ collection : textCollection});
    
    textCollectionView.render();
    
    $("#listdiv").append(textCollectionView.$el);
    
    });
```

Finally, we have the server for our application. We're skipping over the preample that's identical, and instead we'll concentrate on the routes.  To note, we're storing all of our server-side data in a single array called `texts`.

Here, we're going to have three different main routes: 

1.  a `get` route to `/texts/:id`, this is called when we `fetch` from the **TextModel** and we need to return the JSON object that packs up the value property from the `texts` array on the server
2.  a `put` route to `/texts/:id`, which is called when we modify a TextModel
3.  a `get` route to `/texts` which is used to initialize the data for the TextCollection, where we pack up an array of objects to feed into the collection and send it

file: textlistServer.js

```JavaScript
    var texts = [];
    
    app.get('/texts/:id', function (req, res) {
        var id = req.params.id;
        res.send(JSON.stringify({value : texts[id]}));
    });
    
    app.put('/texts/:id', function (req, res) {
        var id = req.params.id;
        texts[id] = req.body.value;
        res.end();
    });
    
    app.get('/texts', function (req, res) {
        var textsAndIDs = texts.map(function (v, i) {
            return {id : i, value : v};
        });
        res.send(textsAndIDs);
    });
    
    app.listen(3000);
```

### Exercises

#### Deletion

Now, try to replicate the previous exericse for adding a delete button to the client-only text list project for having a **server** as well. You'll need to create a route for the delete call to remove the element from the server.

1.  Extra Credit

    Add a delete button to the view of the individual models that will allow you to remove that particular model from the collection. 


[backbone-repo]: https://github.com/portlandcodeschool/backbone-tutorials