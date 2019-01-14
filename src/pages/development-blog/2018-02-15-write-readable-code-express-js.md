---
id: 833
title: Write a more readable code with Express.js
date: 2018-02-15T19:58:35+00:00
tags:
template: development-post
image: /wp-content/uploads/2018/04/Expressjs.jpg
---
Keeping your code clean is very important, maintaining a repository with different code styles is a pain, but sometimes it’s difficult to find how you should organize your code in express, because there are too many ways of doing it. Today i’ll provide you some tips on how to write a more readable code for your express application.

Consistency is the key to keep your code readable, you should always use linter to keep a track of bad indented code and errors, i suggest you to use [eslint](https://eslint.org/), there are plugins to easy integrate it on different text editors, this way you can define rules to your code, like indentation to 2 spaces or 4, if you are not familiar with code linters just use the standard configuration for eslint, you need to create a .eslintrc.json file in the root of your project, in the same folder as package.json. 

<pre class="prettyprint">// .eslintrc.json example

{
  "env": {
    "node": true,
    "es6": true
  },
  "extends": "eslint:recommended"
}
</pre>

The most important part of a express application are the middleware functions and express routers which uses chained middlewares, that’s what we are focusing of, if you don’t know what a middleware is, i encourage you to go to my previous post: [“Understanding Express.js middleware function”](https://community.4geeks.co/understanding-express-js-middleware-function/).

Let’s start with some examples of what you should and what you should not do when you define some routes in express. You should start with dependence libraries, followed by your internal requires like database models or other middlewares you made. 

<pre class="prettyprint">// user.routes.js

// Avoid! Is not so bad, but trust me, you will waste some time trying to understand this

const express = require('express');
const auth = require(‘..middlewares/auth.middleware’);
const mongoose = require('mongoose');
const User = require('../models/user.model');
const router = express.Router();

// ... your routes down here

// Good! You can easily read which are your internal and external dependencies

const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const auth = require(‘..middlewares/auth.middleware’);
const User = require('../models/user.model');

// ... your routes here

// Bad! Use chained methods when using the same route, ‘/user/’ in this case.

// … require dependencies

router.route('/user/').patch(auth.isSelf, findByIdAndUpdate)
router.route('/user/').delete(auth.isSelf, findByIdAndRemove)
router.route('/user/').get(find);

// … middlewares here

// Bad Also! You should break chained methods, it’s more readable!

// … require dependencies

router.route('/user/').patch(auth.isSelf, findByIdAndUpdate).delete(auth.isSelf, findByIdAndRemove).get(findAll);

// … middlewares here

// Good! This is how you should indent your chained methods.

// … require dependencies

router
  .route('/user/')
  .patch(auth.isSelf, findByIdAndUpdate)
  .delete(auth.isSelf, findByIdAndRemove)
  .get(findAll);

// … middlewares here
</pre>

**// Finally!** 

<pre class="prettyprint">const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const auth = require(‘..middlewares/auth.middleware’);
const User = require('../models/user.model');

router
  .route('/user/')
  .patch(auth.isSelf, findByIdAndUpdate)
  .delete(auth.isSelf, findByIdAndRemove)
  .get(findAll);

function findByIdAndUpdate(req, res, next) {
   // your logic here
}

function findByIdAndRemove(req, res, next) {
  // your logic here
}

function findAll(req, res, next) {
  // your logic here
}

module.exports = router;
</pre>

Notice that i did not use anonymous functions for the middlewares, but i defined the middleware functions at the end, this way you can easily see all the routes you defined when you open your file, if your file is getting too long you can split it by some logic, for example, you have some routes for user’s blogs, like **‘/users/blogs/’** where you defined your api routes that interact with 2 different models, you can make a folder for user apis then make 2 files user.routes.js and user-blogs.routes.js, if your apis are independent from other models, for example **‘/blogs/’** you should keep that in another folder and a file named blog.routes.js.

You could use anonymous functions sometimes, when the function is too short or you think is not right to define a separated function for that code, a good example is when you make a query to get &nbsp;a list of documents with mongoose framework, it takes a function as a callback with two parameters to check if there was a error or to send the list. Also, i always use arrow function instead of anonymous. 

<pre class="prettyprint">// User model find with arrow callback (err, users) =&gt; it’s ok, you don’t need to declare another function because is short enough to understand. 

function findAll(req, res, next) {
  User
    .find({})
    .exec((err, users) =&gt; {
      if (err) return next(err);

      if (!users) {
        return res.status(404).json({
          message: 'No users found',
        })
      }

      res.status(200).json(users);
    });
}

// User model find, you can declare a function is you find it better. 

function find(req, res, next) {
  User
    .find({})
    .exec(usersQuery);

  function usersQuery(err, users) {
    if (err) return next(err);

    if (!users) {
      return res.status(404).json({
        message: 'No users found',
      })
    }

    res.status(200).json(users);
  }
}
</pre>

You could think it’s ok just to make chained anonymous functions, is not that bad right? Trust me it is, if you want to reuse a middleware you have to declare it as a function, you don’t want to repeat your code on every route you want to verify your token for example, also chained anonymous function are not good for your eyes, let’s see what im talking about. It is pretty large, so just don’t read it because you will lose a lot of time trying to understand what’s happening on the next defined route.

**// This is very bad please don’t read it** 

<pre class="prettyprint">router.route('/user/').get(function(req, res, next) {
  const token = req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, decodeToken);
  } else {
    return res.status(403).json({
      message: 'No token provided.',
    });
  }

  function decodeToken(err, decoded) {
    if (err) {
      return res.status(403).json({
        message: 'Failed to authenticate token.',
        error: serializeError(err),
      });
    }

    req.user = decoded;
    next();
  }
}, function(req, res, next) {
  User
    .find({
      $nor: [{
        "_id": req.user._id
      }]
    })
 .sort({
      firstname: 'asc',
    })
    .exec((err, users) =&gt; {
      if (err) return next(err);

      if (!users) {
        return res.status(404).json({
          message: 'No users found',
        })
      }

      res.status(200).json(users);
    });
});

</pre>

Probably you didn&#8217;t even noticed that there is only two anonymous functions there, that’s what happens when you make large chained anonymous functions, even if you made it yourself, you could come tomorrow and you won’t understand what’s happening there.

I hope i could help you to understand how you can write a more readable code for your express or any javascript application, and why you should do it, it’s necessary if you are working with a team or if you want to make a scalable and maintainable application.