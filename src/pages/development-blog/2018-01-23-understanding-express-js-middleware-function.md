---
id: 629
title: Understanding Express.js middleware function
date: 2018-01-23T15:31:27+00:00
tags: 
template: development-post
tags:
---
[Express](http://expressjs.com) middleware can be very confusing at first if you are not familiar with callbacks functions. Today we will show you how a middleware works, providing a basic usage example with user authentication.

Based on this&nbsp;[express guide](http://expressjs.com/en/guide/writing-middleware.html), middleware are functions that have access to the request object **(req)**, the response object **(res)**, and the&nbsp;**next**&nbsp;function in the application’s request-response cycle, let’s describe these elements one by one below:

  * **The&nbsp;“req” object&nbsp;**represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.
  * **The&nbsp;“res”&nbsp;object**&nbsp;represents the HTTP response that an Express app sends when it gets an HTTP request.
  * **The&nbsp;“next”&nbsp;function**&nbsp;is a function of the Express router which, when invoked, executes the middleware succeeding the current middleware.

**// middleware function example:** 

<pre class="prettyprint">function myMiddleware(req, res, next) {
  // your logic here

  next();
}</pre>

The **req&nbsp;**and **res&nbsp;**objects are pretty simple, but **next**&nbsp;function is a bit more complicated if you are new to express, you can do a whole application without even using it, this is a very bad practice, you can’t make a real express application without properly using the **next&nbsp;**function, understanding it is the key to make a modular and scalable express applications. We will make a basic user authentication app to help you understand the **next&nbsp;**function, so, let’s start coding!

Modern web and mobile applications use [jwt](https://jwt.io/) to authenticate the users, that’s what we are using today for our example, the following code is a middleware that sends a token to the user’s client, and to verify the token sent by the user from the client side.

**// auth.middleware.js**

<div class="gist-oembed" data-gist="NodeJoSe/3435453e72c6bdfbeaf30ebb250cece7.json">
</div>

Notice that we export two functions **(module.exports)**, these are the middleware functions, but now, how can we use it in our application?

Let´s make an example of it with a user login and signup API rest, you need to send a token to the user after the signup/login, to handle future HTTP requests from that user, also we have to verify the token sent in those HTTP request, that’s what our middleware’s do. The **User**&nbsp;model below is just a basic schema made with [mongoose](https://github.com/Automattic/mongoose).

**// auth.routes.js**

<div class="gist-oembed" data-gist="NodeJoSe/3806d75369480ac82f09e87dc533e345.json">
</div>

We have two routes here:

  1. **‘/login’** takes two callbacks, **login**, and **auth.signToken&nbsp;**functions, **auth.signToken**&nbsp;is the middleware we defined before on **auth.middleware.js,&nbsp;**we used **require(‘fileRouteHere’)** to be able to use the middleware,&nbsp;**auth.signToken**&nbsp; will be called only if we call **next()** on **login**, notice that I call **next()** only if I successfully find the user, also notice that I modified the **req.user**&nbsp;in **login,** this is the purpose of the **req**&nbsp;object, not just to get the data from the client but to share data between middlewares, **req.user**&nbsp;will be used in **auth.signToken**&nbsp;to sign and sent the token to the user on the client side.
  2. &#8216;**/register&#8217;** takes only one callback function as a parameter, the **register**&nbsp;function, this means no more function will be called after this middleware function if we use **next()**, so, can we remove it from **register&nbsp;**function and only pass **(req, res)** as parameters? The answer is no, you should always use the **next** function even if there are no more chained middlewares, because you can use it to handle errors, notice that I call **next(err)** if I get an error saving the user, this won’t call the next middleware, but the next error handler middleware. If you want to know more about error handling I suggest you go to my next post [**&#8220;Understanding Express.js error handling&#8221;**](https://community.4geeks.co/?p=642&preview=true).

Now we will handle a basic HTTP request from the user to update his profile, this time the **auth.verifyToken**&nbsp;middleware will protect the update route, if the token is valid it will call **next()** to update the user, otherwise, it will send an error 403 to the client (unauthorized).
  
// user.routes.js

<div class="gist-oembed" data-gist="NodeJoSe/5c39446915898037796bfc2fcf7a5882.json">
</div>

This time the **auth.verifyToken**&nbsp;is first because we don’t want the user to access to the server APIs if they have an invalid token or no token at all, **‘/user/’** &nbsp;has a patch method, this will call **auth.verifyToken&nbsp;**decode the token and assign it to **req.user&nbsp;**then the **findByIdAndUpdate&nbsp;**function will have access to the user’s _id to update the user, the **req.body&nbsp;**is the data sent from the client side to update the user.

**We are done here!** I hope I could have helped you to understand more about express middleware, stay online to learn more about node.js, express.js and MongoDB!