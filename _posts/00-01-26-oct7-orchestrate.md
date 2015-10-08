---
layout: post
title: Persistence with Orchestrate
class: W Oct.07
date: 2015-10-07 00:00:01
---


## Orchestrate.io

Today we'll learn about [Orchestrate.io][orchestrate], a database-as-a-service.

<aside>
***Software as a Service***

_SAAS_ (not to be confused with SASS) is a model that's been growing rapidly over the last few years. Rather than maintain your own instance of a library or database, you can subscribe to a platform that manages all that for you. This has some tradeoffs: the people providing the service have time and motivation to learn about all the corner-cases and pitfalls of that problem-domain, but it'll be somewhat slower (and often more expensive) than something you host locally.
</aside>

## The Orchestrate API

Orchestrate.io stores all your data in its own database. You retrieve data by making HTTP requests to their web API. They offer a Node package to interact with their API without having to craft raw HTTP requests. It's fairly straightforward:

{%highlight javascript%}
db.put('users', 'unique-user-id', {
  "name": "Shackleton Cat",
  "hometown": "Portland, OR",
  "twitter": "@soundofcrunchysnacks"
})
.then(function (res) {
  console.log(res.statusCode);
})
.fail(function (err) {});
{%endhighlight%}

{%highlight javascript%}
db.get('users', 'unique-user-id')
.then(function (res) {
  console.log(res.body);
})
.fail(function (err) {});
{%endhighlight%}

### Exercise: Orchestrate.io

1. [Sign up for an account on orchestrate.io][orchestrate-signup].

1. Create an application at the Orchestrate dashboard.  For now, make sure to choose "Amazon US East" datacenter.

1. In your project repo, make a new file called "config.js".  This will hold your database access key, and should remain private!  In the file, paste your new Orchestrate app's API key like so:

```
module.exports = {
       dbkey : "12345678-90ab-cdef-1234-ab0123456789" // My Orch API key
}
```

Also edit the `.gitignore` file in that repo and add the line "config.js", so that your config.js file is not accidentally added to your repo.

#### Interact with data via Dashboard

1. Use the dashboard to create a collection named 'test'

1. In the dashboard, for your 'test' collection, try the following:
	1. list the collection (currently empty).  On the "list" tab, just push the green "Send Request" button and see the result in the log.
	1. create a new "record" (i.e. JSON-encoded object) with a key of "1", and check the logged response.
	1. list the collection again.
	1. create a new record, but let Orchestrate auto-generate the key.
	1. list the collection again.
	1. modify the record with key "1"
	1. get just that record using its key.
	1. delete one of the stored records using its key.
	1. list the collection again.

#### Interact with data via Javascript
Now you're ready to manipulate collections from NodeJS!

1. In your repo, install [the `orchestrate` Node module][orchestrate-npm] (`npm install --save orchestrate`).
1. Make a JS file that `require`s `orchestrate` and uses its API to create and delete some records. Try to repeat the same steps above, and see the results through `console.log()`s. Check out the [api docs][orchestrate-docs] for more on how to work with the API through the Node client.

#### Begin using Orchestrate in your project

1. Make a file 'reset-db.js' which will reset a particular collection in your database to contain only a few test records of your choice.

[orchestrate]: https://orchestrate.io/
[orchestrate-signup]: https://dashboard.orchestrate.io/users/register
[orchestrate-npm]: https://www.npmjs.com/package/orchestrate
[orchestrate-docs]: https://orchestrate.io/docs/key-value
[lucene]: https://lucene.apache.org/core/

<!--
	Write demo route to get one user using old databse.js

	Adapt database.js to be async

	Rewrite demo route to use orchestrate
	-->