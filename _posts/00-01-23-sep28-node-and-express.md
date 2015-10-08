---
layout: post
title: Node, Modules, and Express
class: node
date: 2015-09-29 00:00:00
---

## Intro to Node

We've skimmed over Node.js before, but today we're going to start to dive into it and see what it's all about. The basics are that it's JavaScript independent of the browser. Before Node (and some other, similar projects), JavaScript was confined to the world of the browser, where it interacts with DOM elements and sends messages to servers via things like AJAX calls. Over time, companies interested in improving the web browsing experience spent a lot of time and effort improving JavaScript to make it faster and more powerful. One of the biggest improvements was Google's V8 Engine for the Chrome browser. This, combined with some low-level I/O code, formed the basis for Node.js.

### What's it For?

Bringing JavaScript out of the browser means that you can do anything with it that you can do with any other programming language: you can write back-end data processing code with it, you can interface with your database, and you can create servers. This means that you can use essentially the same language on the front end and the back end--suddenly, front end developers can work with back end code without needing to learn a new language. There is no DOM on the back end, of course, so some things about your code will have to change. Notably, sharing resources between files becomes an issue: without the DOM loading all the JavaScript in the HTML's various `<script>` tags, how can one file know what's going on in another file?

### `require` and `module.exports`

When we looked at [testing](http://portlandcodeschool.github.io/jse/2015/08/31/aug31-mocha/), we took a quick glance at using `require` and `module.exports`. To recap what we talked about there, you can use `require` to request information from any file. if Node can find that file, it will supply the requiring code with everything that is in the `module.exports` object. That means you can have a function in one file, like this:

```js
// output-functions.js
module.exports.say = function(message) {
    console.log(message);
};
```

And a different file that uses that function, like this:

```js
// main.js
var outputFns = require('./output-functions');
var fruits = ['kiwi', 'strawberry', 'banana'];

fruits.forEach(outputFns.say);
```

Assuming that those two files are in the same directory, main.js will have access to the `say` function in output-functions.js; when you run app.js with `node app.js`, it will be able to access `say`. Go ahead and copy-paste the code into a couple of files on your system to be sure that it works for you.

### Node Modules

There are a number of pre-built modules for Node.js available that do a number of different things. We've already looked at mocha and chai, which deal with testing your code. We installed those with a command like `npm install mocha`, which uses the built-in Node Package Manager to find the appropriate modules and install them. You can browse the [npm site](https://www.npmjs.com/) to check out some of the other modules available--there are hundreds of thousands of them available.

In addition to the modules available through npm, Node has many modules that come standard, but that still need to be required. You can see the list of all of them and what they do in [Node's documentation](https://nodejs.org/api/). Tonight, we'll be looking at the fs (or File System) module.

### `fs.readFile` and Asynchrony

One of the most basic things that any non-browser-bound programming language needs to be able to do is to work with the file system. Programs need to be able to read from and write to files and to navigate around directories, which is exactly what `fs` allows Node to do. To see how it works, we'll look at this example, modified from [the documentation](https://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback):

```js
var fs = require('fs');

fs.readFile('./data.txt', 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});
```

If we take apart that code, we can see that the first thing that happens is we require the `fs` module and assign it to a variable named fs. We then call its `readFile` function, passing in three parameters. The first parameter is the name of a text file, which is located in the current directory. The second parameter is the encoding of the file--utf8. This is essentially just instructing Node to reproduce the information it gets from the file as text, rather than as a buffer stream or some other less-readable format. the final parameter is a callback function that actually does something with the data.

### Node and callbacks

The callback function taken by `fs.readFile` is idiomatic Node: the first parameter it expects is the `err` parameter, which if all goes well will be `null`. In the even that some kind of error happens, it will be passed back to `fs.readFile` as the first parameter. The function written above will throw an error (more on throwing errors in a couple of weeks), which will cause things to break. You can cause this by not having a file at the location readFile is looking for it. The second parameter of the callback is the data that is finds in the file it is reading, which can then be used inside the callback as normal.

One of the great strengths of Node is that it is asynchronous, rather than synchronous. This lets it be very fast in certain situations, but can also make it more difficult to code in. Consider:

```js
var fs = require('fs');
var output = "my data is: "

fs.readFile('./data.txt', 'utf8', function (err, data) {
  if (err) throw err;
  output += data;
});

console.log(output);
```

- What will happen here? Why?

##A full-featured server: Express

While netcat is a fun little basic server to play around with, it doesn't give us the kind of functionality we really want--we can only respond to one kind of thing, and we can't really do much other than keep giving one static file. The modern web is a fluid, dynamic place, and there's a lot more that we can do in the server (and even more in the browser, as we'll see next week with BackBone) to enable that fluidity. One of the most common libraries for building servers in Node.js is called Express.

To get started with Express, the first thing we'll need is a clean directory--start off somewhere that makes sense in your filesystem, but make sure it's not in an existing Git repository. From here, we'll be following the steps in the [Express tutorial](http://expressjs.com/starter/installing.html). You'll want to follow the default suggestions here--in particular, naming your main file's name to `app.js`. Don't worry if there's anything you don't quite understand in all that--we'll go over it all together once everyone's done.

Once those steps are done, you'll need to create an app.js file. This is a pretty standard name for the main file in an Express server. The kinds of modules that go here are the ones that determine how your app works on the inside--what kind of error logging it does, for example, or how it accesses your database. Today, we'll be adding some other things that usually get broken out into other files, but tomorrow we'll start splitting things out as the project gets bigger. Inside your app.js file, you'll want the following code:

{%highlight javascript%}
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
{%endhighlight%}

This is about the simplest Express server you can make. To start it, just do `node app.js` from the terminal. You can see what it does by pointing your browser to `localhost:3000`. The `app.get` function is telling Express (which is refered to by the `app` object) to listen for a GET request at the home directory of the site. You can also listen for other HTML methods, like POST, PUT, and DELETE, and you can use different routes. For example:

{%highlight javascript%}
app.post('/login', function (req, res) {
  // Some code to log in a user
});
{%endhighlight%}

##Express Generator

To get started with Express Generator, you'll need to install it. Since this is a module we want access to everywhere in our system, rather than just in a single project, you'll install it with `npm install -g express-generator`. Once it's installed, you have access to a new terminal command: `express`. To use it, simply navigate to any directory in your terminal. We'll be using a few optional flags rather than just the default setup, so to create a new app called myApp, you would use `express myApp --hbs --git`. The basic command will set up the directory structure for your new server, including a package.json file with a list of commonly used middleware, a `public` directory, and an `app.js` file. The optional switches that we use create a .gitignore file and set the default template engine to be Handlebars (rather than Jade). All of this will happen inside a new subdirectory called (in this case) myApp that Express Generator creates inside the current directory--so don't make an empty directory and then run Express Generator in there, or you'll be two directories deep!

The first thing you'll have to do to get started with your shiny new app is to cd into the directory and then `npm install`, which will start installing the half-dozen or so modules that the folks who built Express Generator think are too good to code without. We'll walk through the differences in class between the basic Express file you were using yesterday and the file created by Express Generator.

### `req.params` for holding sharing data with all the routes

You can use information that gets passed in by using a property of the request object, `req.params`. We could modify the above code to make use of that, like so:

{%highlight javascript%}
app.post('/login/:user', function (req, res) {
  // Some code to log in a user
  var username = req.params.user;
  console.log(username);
});
{%endhighlight%}

In the above code, the colon in `:user` marks that out as being a parameter that we want to hang onto. If I do a POST request to localhost:3000/login/tom, the "tom" will get stored as a parameter called `user`, which Express will make accessible at `req.params.user`. If you wanted to keep track of that information for a bit (for example, if rather than a user name it was a tweet that somebody had just made), you could store it on the server in a variable (perhaps in an array).

That approach works fine on our tiny little server, but pretty soon we're going to need to start splitting files apart. One of the first files to get split out of app.js tends to be the file that holds all the routes: as you can imagine, the list of routes for anything more than the simplest of sites can get pretty long. But if both the routes and the app are going to need access to the data, where can we store it so that the can both get to it? 

##App.locals

Express comes built in with a solution to our problem, in the form of `app.locals`. This is an object that is accessible from inside any route by accessing `req.app.locals`. Since it's an object, we can add any properties we want to it. If we set `app.locals.cats = "shackleton"` in our app.js file, all of our routes will be able to access `req.app.locals.cats` to get to `shackleton`.

##Middleware

Express has a lot of additional functionality available to it that comes in the form of **middleware**--extra functions that have access to both the `request` and `response` objects and are able to do things with them. Internally, those pieces of middleware also have access to a function called `next`, that calls the next function in the middleware chain. Middleware can do a lot of very useful things, but it can also be a bit of a black box that does magic things. Middleware calls look something like this:


{%highlight javascript%}
app.use(express.static('public'));
{%endhighlight%}

If that looks a lot like an Express route, there's a reason for that: pretty much all of Express is middleware, including the routes. What the above does it tell Express to use the `public` directory as the location for any static files--so if you're providing css or client-side javascript to your pages, this is where they'll look.

##Handlebars templating

Yesterday, we went over how to send plain text responses with `res.send` and how to send static HTML documents with `res.sendfile`. Those might have been good enough for the Web of the late 90s, but it's not good enough for today. For really dynamic sites, we need the server to be able to easily generate completely different pages based on a few variables--and that's exactly what templating does.

There are many different kinds of templating available. We've seen the client-side templating that comes built in to lodash: it uses some <%= crazy %> escape characters to indicate variables that can get swapped out, MadLibs fashion. We also saw how we can set up different delimiters for templating to make things more readable (and easier to type), and as a prelude to today we did that in Handlebars style: \{\{ like this! \}\}. We'll carry on with that today.

Some templating languages, like Jade, have a completely different syntax that the server will turn into HTML. Jade in particular is notorious for its semantic whitespace, which means that a single wrong indent can break your page, and for being generally finicky. Handlebars has a much more low-key feel. Files are saved as .hbs files, but they look pretty much like .html files--in fact, the only difference is that they have variables enclosed in \{\{markers\}\} throughout. So you might have a line of code that looks like:

```html
<h3 class="welcome">Hello, \{\{username\}\}!</h3>
```

It's uncomplicated and readable. It's worth noting that Handlebars will escape out any special characters that appear in your variables: if you have `var title = "Jonathan Strange & Mr. Norrell"` and a template of `<li>\{\{title\}\}</li>`, that would show up in the HTML as `<li>Jonathan Strange &amp; Mr. Norrell</li>`, exactly as you would want it. If you need characters to be unescaped, you can use triple curlies in the template, like so: `<body>\{\{\{page_template\}\}\}</body>`. This would allow you to have a separate page template passed in as a variable to the Handlebars template.

That tells us how to define where the variables go in the template, but how do we use the templates, and how do we give them variables? Using templates with our generated app is straightforward--it's just like sending an HTML file, but instead of using `res.sendfile`, we use `res.render` (because we're rendering a template. We need to tell Express which template to use, and give it an object containing the names and values of all the variables we want to use, and that's it. Here's an example from the index.js file:

```js
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
```

Handlebars has still more tricks to make our lives easier. It's a fairly common thing to put lists of things on a site, and those things may well be items that you have stored in a database or some other sort of logical structure on your server. Rather than having to make a blank template entry for each item in your collection, you can simply use `each` in your template. For example, given a route that renders a template called knots by passing in an object like this:

```js
router.get('/knots', function(req, res, next) {
  res.render('knots', {knots: [
    {name: "sheepshank", image_url: "images/sheep.png"},
    {name: "round turn and two half-hitches", image_url: "images/rtt.jpg"},
    {name: "flying bowline", image_url: "showoff.gif"}
  ]});
});
```

you could set up that template like so:

```html
<div id="knot_gallery">
  \{\{#each knots\}\}
  <div class="knot">
    <img src="\{\{image_url\}\}" alt="\{\{name\}\}" />
    <p class="caption">\{\{name\}\}</p>
  </div>
  \{\{/each\}\}
</div>
```

There are plenty of other cool things you can do with Handlebars; that covers the basics. Feel free to play around with it more! [The docs](http://handlebarsjs.com/) are well worth a read.

