---
id: 642
title: Understanding Express.js Error handling
date: 2018-01-23T15:31:26+00:00
tags: 
template: development-post
image: /wp-content/uploads/2018/04/2352018077814181368-1024x683.jpg
---
Today we are going to discuss Express [error handling](http://expressjs.com/en/guide/error-handling.html), this is a vital part of the express framework, handling errors manually makes our application hard to maintain, plus makes it difficult to reuse the code, you can keep your application clean and scalable by using the express error handler middleware function.

Before reading this you need to understand what is an Express middleware and how it works, if you want to learn more about express middleware function I suggest you go to my previous post: [**&#8220;Understanding Express middleware function&#8221;**](https://community.4geeks.co/?p=629&preview=true).

The express error handler is a middleware function, but this middleware takes four parameters **(err, req, res, next)**, unlike the common middleware which takes three parameters. The first parameter will be the error we pass from the common middleware&nbsp;**next(err).**

**// Error handler middleware function example:** 

<pre class="prettyprint prettyprinted"><span class="kwd">function</span><span class="pln"> myErrorHandlerMiddleware</span><span class="pun">(err, </span><span class="pln">req</span><span class="pun">,</span><span class="pln"> res</span><span class="pun">,</span> <span class="kwd">next</span><span class="pun">)</span> <span class="pun">{</span>
  <span class="com">// your logic here</span>

  <span class="kwd">next</span><span class="pun">(err);</span>
<span class="pun">}</span></pre>

Let’s start with an example of an express application to understand how we can use the error handlers, the file a contains basic configurations for express, and some API routes, don’t worry about it, that is just to show you where you should place the error handlers, they should be last, after the API routes, otherwise when you call **next(err)**, on your routes they won’t find the error handlers, remember that the middleware functions are just chained functions, and order matters.

<div class="gist-oembed" data-gist="NodeJoSe/5a24e860a4cb87588b4036afd682d8cc.json">
</div>

Notice that we have two error handler functions, **errorLogger&nbsp;**just logs the error then it will call the next error handler with **next(err)** to send the error to the client side with the &#8216;**res&#8217;&nbsp;**object. We can have as many error handlers as we want.

These error handlers will take care of every error of our middleware functions, we just need to call the **next** function on any middleware passing the error as a parameter, and we are done. Notice that if you call **next** without parameters **next()**, the next common middleware in the chain will be called, but if call **next** with any error parameters **next(anyErrorHere)&nbsp;**the next error handler middleware will be called.

You could want to make a custom error handler for a specific API route, just to take care of a particular error on your application, you can do that as well, defining the error handler middleware at the end of the chain after the common middleware functions. Here’s a code example:

**// user.routes.js**

<div class="gist-oembed" data-gist="NodeJoSe/5c39446915898037796bfc2fcf7a5882.json">
</div>

The **‘/user/’** route will call **auth.verifyToken&nbsp;**then **findByIdAndUpdate&nbsp;**the **errorHandler&nbsp;**middleware will be called only if we call **next(err)** on any of these two functions, and this error handler will be called only in the **‘/user’** route, you can do any logic you want on the error handlers, this one just logs that there was an error trying to update the user and call **next(err)** to call the next error handler function, but wait, ¿Where is the next error handler function? Remember that we defined it at the end of the **app.js** file.

Middleware functions and error handler middleware functions can be somewhat confusing, I’ve had hard times understanding them, that’s why I decided to make this guide about how to use them together, in the next post I’ll give you some tips about how to keep your code clean, this way you can easily read and understand what happening in your code!