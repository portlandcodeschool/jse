---
layout: post
title: Backbone Collections
class: W Sep.16
date: 2015-09-16 00:00:01
---

This is the second part of the full tutorial [here][backbone-repo].

## Collections Project: Text Lists

### Outline

In this project, we're going to again create a *client side only* application that
-   displays a list of items
-   contains a text field and a submit button that will add the entered text to the list

What we're going to cover in this section is:
-   How to create a Backbone *collection* of models
-   How to create view for a collection
-   How to make the collection's view delegate to individual views
-   How to use the collection specific events to keep the view in-sync

### Lesson and Code

When you're dealing with sites like twitter, or instagram, or anything of that ilk there tend to be **collections** of things. You're reading a *list* of tweets, looking at a *list* of search results, examining a *list* of photos that match a tag, checking a *list* of followers etc. 

In other words, there's a lot of "list-like" things in the data that we're seeing constantly online. This is such a common pattern that Backbone has, built-in, a *Collection* class that allows you to have "lists" of models that can listen for special list-specific events such as adding or removing from the list. 

The basic way that Backbone *collections* work is that you associate to each collection the kind of **model** that it's a list of. You still have individual views for each model, though, and we leave the bulk of the work for handling the display and manipulation of data to the **individual** model/view pairs. We'll also have a view for the **collection**, that will handle how the list is displayed. To this end, we're going to proceed by

1.  writing our base html
2.  defining the model and view for our text data
3.  define the collection for the text data model
    -   this part will be rather simple and bare bones in comparison to the view
4.  define the *view* for our collection
    -   the view will include the framework for displaying the list
    -   the view will also include the button that adds a new element to the collection
        -   this will trigger the `add` event for the collection

We're going to start our application very similar to how our previous project started: with some very simple HTML. 

```HTML
    <!doctype html>
    <html>
      <head>
        <title>Text in Lists</title>
        <script type="text/javascript" src="js/jquery-2.1.4.js"></script>
        <script type="text/javascript" src="js/underscore.js"></script>
        <script type="text/javascript" src="js/backbone.js"></script>
        <script type="text/javascript" src="textlist.js"></script>
      </head>
      <body>
        <div id="listdiv"></div>
      </body>
    </html>
```

Next, we'll start with our basic model of a piece of text. It'll have a "replace" method that will replace the text inside it. Its individual view is going to be an input with the default text of the input set to the value of the model and a "clear" button that will set the text of the model to the empty string ~" "~ . This part is basically the same as our previous project, except that we're going to use a different **kind** of event, `keypress`, for setting the value of the text of the model. In particular, if the key pressed in the input field is the "enter" key, then we call the `replace` operator of the view, which will in turn call the `replace` method of the model.

```JavaScript
    var TextModel = Backbone.Model.extend({
        defaults : {"value" : ""},
        replace : function (str) {
          this.set("value", str);
        }
    });
    
    var TextView = Backbone.View.extend({
        render: function () {
            var textVal = this.model.get("value");
            var btn = '<button>Clear</button>';
            var input = '<input type="text" value="' + textVal + '" />';
            this.$el.html(textVal+"<br><div>" + input + btn + "</div>");
        },
        initialize: function () {
            this.model.on("change", this.render, this);
            // last argument 'this' ensures that render's
            // 'this' means the view, not the model
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
Next, we actually define the collection. This is pretty similar to all the other Backbone classes that we extend, just with the special attribute `model` that we need to match up to the kind of model we want to store in this collection.

```JavaScript
    var TextCollection = Backbone.Collection.extend({
        model : TextModel
    });
```
After this, we need to make our view for the **collection** and write our event handlers for the collection. This is going to be the bulk of our moving parts for this program. The view for the collection will display all of our individual views as well have a button that will add a new "blank" text field into our page (with the default text "Enter something here"). 

```JavaScript
    var TextCollectionView = Backbone.View.extend({
        render : function () {
            var btn = '<button id="addbutton">Add Text</button>';
            var div = '<div id="text-list"></div>';
            this.$el.html(div + btn);
        },
        initialize : function () {
            this.listenTo(this.collection, 'add', this.addView);
        },
        events : {
            "click #addbutton" : "addModel"
        },
        addModel : function () {
            this.collection.add({});
            // collection adds a model, fires add event, then listener calls this.addView(model)
        },
        addView : function (newModel) {
            newModel.set("value","Enter something here...");
            var view = new TextView({model : newModel});
            view.render();
            this.$("#text-list").append(view.$el);
        },
    });
```

There's a few pieces here that we should explain in a bit more detail. First, we're using the more convenient function `listenTo` this time, which in this case means that `this.collection` is now listening on the `add` event and, when it fires, will run `this.addView` with the new model as an argument.  Also, `listenTo` calls the event handler **in the context of the view, not the collection**, so that `this` means the view. Basically, this just lets us avoid including the extra `this` parameter like in our individual model. Calling `addView` takes the newly added model, creates a view for it, renders it, then adds it to the list of views. We use `events` to listen for when the button is clicked and then we run `addModel`. In turn, `addModel` will call the `add` method of the collection. The importance of `add` is that it will simultaneously make a new model and add it to the collection, triggering the `add` event that we're already listening for. 

<aside>
Collections also have a *create* method, which works just like *add* but also persists the new model to a server if there is one.
</aside>

Note that we don't have to say **anything** in the view for the collection about how the view of the individual model works. We just call that individual view's render function and allow it to take care of everything. 

Finally, we go ahead and run the code we need to initialize the whole application:

```JavaScript
    var textCollection = new TextCollection();
    
    var textCollectionView = new TextCollectionView({ collection : textCollection});
    
    textCollectionView.render();
    
    $("#listdiv").append(textCollectionView.$el);
```

### Exercises

#### Delete Button

In this exercise, we're going to add a "delete" button that will erase the bottom element of the list of elements. To do that, you're going to need to 
-   add a delete button to the view of the **collection**;
-   add a event handler that listens for the "remove" event for the collection and refreshes the list, removing the corresponding view from the DOM.
    There's more than one way you could do this, but a simple way might be to use CSS pseudo-selectors to select only the last div in the collection

#### Edited Count

In this exercise, you're going to add a new piece of data to the **base** model: the number of times that it's been edited. Every time the field is edited, it should increment this number. In this case, "edited" means **either** cleared or you've pressed enter while in the input field. You'll need to also modify the view for the base model. 
Question: will you need to modify the view for the collection?

1.  Extra Credit

    To be a little more challenging, make sure that the number-of-times-incremented only increases if the text has actually changed.

## Bonus Topics

### Initialization Objects

Subclasses of Backbone objects (`CounterView` for example) can receive initialization arguments when instances are made by calling the constructor, as follows:
```Javascript
var view = CounterView({model:somemodel});
```

But only certain property names are installed automatically (e.g. 'model', 'collection', 'id').  Custom properties must be manually extracted in the initialize` method, as the follow demo shows:

```Javascript
var MyView = Backbone.View.extend({
    props: function() {
        return Object.keys(this).join(' ');
    }
});

// Subclasses (inherit props):
var MyView2 = MyView.extend({
    initialize: function(opts) {
        // grab particular options
        if (opts)
            this.special = opts.special;
            this.a = opts.a; //...
    }
});

var MyView3 = MyView.extend({
    initialize: function(opts) {
        // grab all options
        _.extend(this,opts); //means merge, not subclass
    }
});

var opts = {a:'a',b:'b',id:'id',model:'mod',special:'yay'};

var view0 = new MyView();
var view1 = new MyView(opts);
var view2 = new MyView2(opts);
var view3 = new MyView3(opts);

view0.props();
view1.props();
view2.props();
view3.props();
```

### Templates

Backbone view often use pre-compiled templates to render their HTML.
Here's a basic demo of two different template formats:

```Javascript
useMustacheTemplates(); //causes templates to use {{}} format

var data = {verb:'jump', subj:'life', adj:'short', obj:'chair'};

var ERBView = Backbone.View.extend({
    template: _.template('The <%=subj%> <%=verb%>s the <%=adj%> <%=obj%>'),
    render: function() {
        this.$el.html(this.template(data));
        $(document.body).append(this.$el);
    }
})


var MustacheView = Backbone.View.extend({
    template: _.template('The {{ "{{ subj " }}}} {{ "{{ verb " }}}}s the {{ "{{ adj " }}}} {{ "{{ obj " }}}}'),
    render: function() {
        this.$el.html(this.template(data));
        $(document.body).append(this.$el);
    }
})

var erbView, mustView;
$(function() {
    erbView = new ERBView();
    mustView = new MustacheView();
})

function useMustacheTemplates() {
    _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g
    };
}
```

[backbone-repo]: https://github.com/portlandcodeschool/backbone-tutorials

#How to approach a project

When you're given a project to work on, the natural inclination is to dive right into writing the code--that's the fun part, after all! Resist that temptation, though: things will go much more smoothly for you and your team if you take the time to get organized and figure out how you're going to approach the problem you've been given.

The tools you use to come organize your ideas are up to you. We all have some favorite tools, and as you do more and more of this, you'll come up with your own set. Paper is a great place to start out if you're not working remotely--it's hard to beat the tactile nature of it, and by this point the uI has been pretty well hammered out.

Mind maps are really useful as well--there is free mind-mapping software available for every OS out there, and a bunch more available on the web. These are very helpful for figuring out the connections between various parts of your code.

- [Labyrinth](https://people.gnome.org/~dscorgie/downloads.html) is a great option for Linux; it's what I use.
- [Mindmup](http://www.mindmup.com) looks like a reasonable web-based mind mapper.

If your project has any kind of graphical components, it's a great idea to come up with a wireframe--these are basically sketches of what the page will look like. No fonts, no images, no colors--just outlines showing where all the different text boxes, buttons, form entry fields, and everything else will be. Doing this helps you ensure that you haven't forgotten any important bits of functionality, eg "oh, this shows a 'login' button. That means we need to be able to log people in!"

- [Moqups](http://www.moqups.com) is a fine free web-based wireframe sevice.

Once you have a good idea of what needs to be done, you can start to figure out who is doing what parts. How jobs get doled out is completely up to your group--the important part is to be sure that everyone has a good idea of what they should be doing, and of how their tasks will interact with the tasks of other people on the team.

#Working in the Terminal

There are GUI options for just about everything you'll want to do in coding, but it's always a good idea to be comfortable working in the terminal--the GUI you like may be different than the one your workplace uses, or you may be SSHing into a server that doesn't have a GUI available. If you're comfortable using the terminal, these won't be problems--and the more you use the terminal, the more you'll resent having to move your hand all the way over to your mouse! For starters, let's have a look at the commands on this handy [cheat sheet](http://www.git-tower.com/blog/command-line-cheat-sheet/).

#Git and GitHub

Version control probably the single most important part of getting your project organized. It ensures that there's a trustworthy record of your entire project history available to anyone who needs it, and it allows many people to work together on big projects without stepping on each other's toes and overwriting code. If you don't have Git installed, it's available [here](http://git-scm.com/). Windows users will want to pick up [Git Bash](https://git-for-windows.github.io/).

There is some configuration that you'll want to do with Git in order to make things run smoothly. For starters, we'll have to make sure line endings are being dealt with properly. For Linux and OS X users, you'll want to enter `git config --global core.autocrlf input`, while Windows users will want `git config --global core.autocrlf true`.

Next, you'll want to create a global `.gitignore` file. This is a file that tells Git not to bother with the files that you specify. You can have a separate `.gitignore` for each project, but setting up a good global `.gitignore` can make your life a lot easier. You can create that file with the command `touch ~/.gitignore_global`, and then tell Git about it with `git config --global core.excludesfile ~/.gitignore_global`. All you need to do after that is identify the files that you'll never want to have in a repository and list them in that file. There's a great starter `.gitignore` available [here](https://gist.github.com/octocat/9257657).

Finally, you can set Git up to automatically use your text editor of choice for things like commit messages and merge conflicts. Git will probably default to Vim; if that's not your cup of tea, you can use:

- atom: `git config --global core.editor "atom --wait"`
- sublime: `git config --global core.editor "subl -n -w"`

One of the many great things that GitHub brings to Git is a built-in Issue tracker. This is designed so that as users find bugs in your software, you can assign tickets to the various team members to assign who is working on what problems. This is handy enough on its own, but in conjunction with the Chrome plugin [ZenHub](https://www.zenhub.io/), it becomes a pretty serious project management tool--definitely worth picking up.

Git is what you use on your machine to manage your code. In order to work with a team, you'll need to store that code repository somewhere that everyone has access to. Much of the time, that remote repo will be stored somewhere on the internet. There are many places online that will let you store your repositories for free, but the most well-known of them is definitely GitHub. Once you've got a GitHub account, you can manage repositories. There is one bit of configuration that you'll find handy: set up your GitHub account to authenticate with SSH. This involves some fancy cryptography and a "key" that you store on your computer, but the upshot of it is that you don't have to enter your password all the time, which is definitely worth a potentially annoying setup. There are good instructions available [here](https://help.github.com/articles/generating-ssh-keys/)

##Git Workflow

![](http://portlandcodeschool.github.io/jsi/images/cog.png)

##Exercise: Merge conflicts!

One of the things that you will inevitably have to deal with when using Git is merge conflicts. These happen when you change the same code that someone else did, and Git can't figure out whose code to keep. In order to give you some exposure to these in a friendly setting, we've created a repo that you can fork and then clone to see how merge conflicts work. The first thing you'll need to do is log in to GitHub, then go to [this repo](https://github.com/portlandcodeschool-jsi/cards-merge) and _fork_ it. That will create a copy of the repo on your account, which means that you have permissions to push to it and can do so without changing the original repo for everyone else.

Once you've forked the repo, open up the terminal and navigate to the directory where you want to keep all of your projects for class--for example, mine is `~/coding/javascript/pcs`. Feel free to use whatever structure works for you. The important point here is that you don't need to create a directory specifically for this projet--the next step will take care of that for us. Once you're where you want the new directory to be, click on the "clone URL" clipboard icon on the right-hand side of the page on GitHub--but make sure you're using SSH instead of HTTPS first! Then go back into the terminal and type `git clone` followed by a space and the URL that you copied from GitHub. You should end up with something like `git clone git@github.com:TomMcCluskey/cards-merge.git`. Then hit return, and that repo will be downloaded to your local system.

Next, change directory into the folder that just got downloaded. If you do `git branch -a` you'll be able to see all of the branches that are being tracked. You'll just have to make some local branches to track them with a command like `git checkout -b closure-ctor origin/closure-ctor`. This is telling git to create a new local branch called "closure-ctor" and to switch to it, and also to make sure that branch syncs with the "closure-ctor" branch on GitHub. Do that for the other branch as well--you should end up with three branches (counting master) when you do `git branch`.

The final step will be creating a merge conflict! From the master branch, pick one of the other two branches and do `git merge <first branch name>`. That should go smoothly. When you then do `git merge <second branch name>`, though, you should get a merge conflict in the cards.js file. Nice work! Now we get to have fun: open up the cards.js file, and resolve the merge conflicts! Keep at it until you have a working version of Cards.

