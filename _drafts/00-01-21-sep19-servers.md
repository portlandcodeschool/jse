---
layout: post
title: Web concepts and Backbone persistence
class: M Sep.19
date: 2015-09-19 00:00:01
---

#The Client/Server model

Most of our online life today happens in the client/server model: One computer provides resources to a number of others. The computer providing the resources is the server; the computers requesting them are the clients. There are other models--peer-to-peer, for example, but client/server is the dominant one today, and it's the one we'll be looking at.

##Netcat

The best way to understand clients and servers is to play around with them, so the first thing we'll look at today is a tool called <i>netcat</i>. This allows you to do a number of things, among them create an incredibly simple server. We'll do that now with:

{%highlight bash%}
  nc -l 9000
{%endhighlight%}

The `9000` in there is the <b>port</b> that the server is responding to. Ports do not refer to actual hardware plugs; they're a purely logical construct--a way for the server to organize and keep track of multiple kinds of requests. The standard port for HTTP requests is port 80. Some other ports have different defaults, but there are plenty left unclaimed--they are numbered up to 65535. The rest of the command simply tells your computer to start listening (the `-l`) for a connection.

In order to connect to your new server, you'll have to open your web browser and point it to your computer at port 9000 by entering `localhost:9000` into your address bar. When you do that, you should see a bunch of information about the connection come up in your terminal. At this point, the browser will wait for a response for a whlie, and eventually time out. Before that happens, we can give the browser some data. Try entering in some HTML to see what happens. When you're done, you can use control-d (not command-d) to tell the client you're all done sending information.

<aside>

<h3>HTTP Keep-Alive</h3>

Run <pre>nc -kl 9000</pre>, which keeps netcat running after sending a response. Play around with sending responses to your browser this way.

HTTP Keep-Alive allows a browser to keep a connection to a server and issue multiple HTTP requests over one TCP connection. This optimization improves performance.
</aside>

A proper response is specifically formatted. This is what node's `http` module does when you create a server. Let's give a proper response now. You could type this in manually, but we'll do it a little differently to avoid quite as much copying and pasting.

Create a new directory to work in, and `cd` to it. Create a file called `index.html` with some HTML in it. Also create a file, `index.headers` with the following content (make sure you have two blank lines at the bottom of your file):

```
    HTTP/1.1 200 OK
    Content-Type: text/html; charset=utf-8
```

Now run `cat index.headers index.html` and make sure there's at least one blank line between your headers and your HTML. Once you've got that, run `cat index.headers index.html | nc -l 9000` and access your page in the browser.

Use Chrome's developer tools to view the HTTP response headers by navigating to the Network tab--you may have to reload the page while you have the network tab open to see them. Try adding a custom HTTP header to `index.headers`. What happens if you change the content type so it's XML instead of HTML?
