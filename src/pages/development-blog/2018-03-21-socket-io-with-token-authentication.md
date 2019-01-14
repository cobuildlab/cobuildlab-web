---
id: 970
title: Socket.io with token authentication
date: 2018-03-21T14:27:15+00:00
tags:
template: development-post
---
<span style="font-weight: 400">If you are working with Express.js you have for sure heard about socket.io, it is an amazing </span><span style="font-weight: 400">event-based bi-directional communication layer for real-time web applications, and it is pretty simple to use, but it is often configured incorrectly leaving our application vulnerable.</span><span style="font-weight: 400"><br /> </span><span style="font-weight: 400"><br /> </span><span style="font-weight: 400">Today I’m going to teach you how to secure your socket.io on an Express.js server using jsonwebtoken, there are more steps to get a secure configuration like allowing only your app origins that we will not discuss here on this post, if you want more information about it, you can go to </span>[<span style="font-weight: 400">socket.io server docs</span>](https://socket.io/docs/server-api/)<span style="font-weight: 400">.</span>

<span style="font-weight: 400">In order to secure you socket with token authentication, your app must be using jsonwebtoken to authenticate your users, so, you already have a middleware to verify and to sign the token.</span></p> 

<span style="font-weight: 400">The first thing you need to do is install socket.io and jsonwebtoken with npm, I assume you already have an Express.js app to follow this tutorial.</span><span style="font-weight: 400"><br /> </span>

<pre class="prettyprint">npm install socket.io --save
npm install jsonwebtoken --save</pre>

<span style="font-weight: 400">Start by configuring Express.js then go through scoket.io, the next file is just a basic configuration to run the express server.</span><span style="font-weight: 400"><br /> </span><span style="font-weight: 400"><br /> </span>**// server.js**

<pre class="prettyprint">const app = require('./app');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 3000;

server.listen(port, () =&gt; {
&nbsp;console.log(`Server running on port: ${server.address().port}`);
});

// socket.io config here</pre>

<span style="font-weight: 400">Notice that the app is just the ‘express()’ app exported from another file with routes and any other middleware configurations, I like to keep it in another file, I will omit the code since is irrelevant for this guide, we just created an HTTP server then configured socket.io to start on that server. </span>

<span style="font-weight: 400">Now it’s time for some socket.io code, socket.io’s middlewares work like Express.js middlewares, they are just chained functions, we will define our middleware to verify the token before the user can connect to our socket, but first, let’s show&nbsp;you how to send the token from the client side.</span><span style="font-weight: 400"><br /> </span>

**// frontend (client side)**

<pre class="prettyprint">// send the token on connection
socket = io(http://your-server-url, {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;query: {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Token: ‘yourTokenHere’,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},
&nbsp;&nbsp;&nbsp;});

// If you refresh your token, update it upon reconnection attempt
socket.on('reconnect_attempt', () =&gt; {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.socket.io.opts.query = {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;token: ‘yourRefreshedToken’,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};
&nbsp;&nbsp;&nbsp;});</pre>

<span style="font-weight: 400">If you want more information about socket.io client,&nbsp;go to </span>[<span style="font-weight: 400">socket.io client docs</span>](https://socket.io/docs/client-api/)<span style="font-weight: 400">.</span>

**// server.js (server side)   
** 

<pre class="prettyprint">const app = require('./app');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 3000;

server.listen(port, () =&gt; {
&nbsp;console.log(`Server running on port: ${server.address().port}`);
});

// scoket.io middleware

io.use((socket, next) =&gt; {
&nbsp;const token = socket.handshake.query.token;

&nbsp;// verify token
&nbsp;jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) =&gt; {
&nbsp;&nbsp;&nbsp;if(err) return next(err);
&nbsp;&nbsp;&nbsp;// set the user’s mongodb _id to the socket for future use
&nbsp;&nbsp;&nbsp;socket._id = decoded._id;
&nbsp;&nbsp;&nbsp;next();
&nbsp;});
});

// chat.events.js (socket events)
require('./socket.io/chat.events')(io);</pre>

<span style="font-weight: 400">We are done with our middleware to protect our socket with token authentication, first we get the token sent by the client, then we verify it, if an error has occurred we sent it to the client </span>**‘next(err)’** <span style="font-weight: 400">and the user won’t be able to connect to our socket, if the token is the token is successfully verified we store our user’s _id on the user’s socket instance then we call </span>**next()** <span style="font-weight: 400">to let the user connect to our socket.</span>

<span style="font-weight: 400">There’s something left, we need to handle the user’s connection to our socket and add some events, that’s what we will do in our chat.events.js file.</span><span style="font-weight: 400"><br /> </span><span style="font-weight: 400"><br /> </span><span style="font-weight: 400">The next file uses the mongoose framework, on a simple function to store a document in our database, it is just an example, you can execute any code you want in your socket events.</span>

**// chat..events.js**

    <span style="font-weight: 400">const Message = require('../models/message.model');</span>  
    <span style="font-weight: 400">module.exports = (io) => {</span>  
    <span style="font-weight: 400"> &nbsp;io.on('connection', (socket) => {</span>  
    <span style="font-weight: 400"> &nbsp;&nbsp;&nbsp;console.log('a user connected');</span>  
      
    <span style="font-weight: 400"> &nbsp;&nbsp;&nbsp;socket</span>  
    <span style="font-weight: 400"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.on('new message', newMessage)</span>  
    <span style="font-weight: 400"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.on('disconnect', disconnect);</span>  
      
    <span style="font-weight: 400"> &nbsp;&nbsp;&nbsp;function newMessage(message, callback) {</span>  
    <span style="font-weight: 400"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// we have access to the user’s _id we just stored on the<br>&nbsp; &nbsp; &nbsp;// verifyToken&nbsp;middleware</span>  
    <span style="font-weight: 400"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message.author = socket._id;</span>  
      
    <span style="font-weight: 400"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Message.create(message, (err, createdMessage) => {</span>  
    <span style="font-weight: 400"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (err) return callback(err);<br></span>  
    <span style="font-weight: 400"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;socket</span>  
    <span style="font-weight: 400"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.to(createdMessage.chat)</span>  
    <span style="font-weight: 400"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.emit('new message', createdMessage);</span>  
      
    <span style="font-weight: 400"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callback(createdMessage);</span>  
    <span style="font-weight: 400"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</span>  
    <span style="font-weight: 400"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log('new message: ', message);</span>  
    <span style="font-weight: 400"> &nbsp;&nbsp;&nbsp;}</span>  
      
    <span style="font-weight: 400"> &nbsp;&nbsp;&nbsp;function</span><span style="font-weight: 400"> disconnect()</span><span style="font-weight: 400"> {</span>  
    <span style="font-weight: 400"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log('user disconnected');</span>  
    <span style="font-weight: 400"> &nbsp;&nbsp;&nbsp;}</span>  
    <span style="font-weight: 400"> &nbsp;});</span>  
    <span style="font-weight: 400">}</span>

<span style="font-weight: 400">Here we just handle the user’s connection to the socket, then we can define any events we need to handle from the client, I just added a ‘new message’ event just to make an example, it receives the message’s data from the client, but the user’s _id is taken from the socket instance, remember that we stored it before when we verified the token.</span><span style="font-weight: 400"><br /> </span><span style="font-weight: 400"><br /> </span><span style="font-weight: 400">We don’t want the client to send any _ids to store data on our server, so we make sure that is the actual user who’s sending that event by getting the _id from the token. Again, we create the message then if there is an error we sent it to the client as a callback, callbacks are optional in socket events, but they are useful when you need some response from the event, in this case, we want to know is the message was sent to notify the client.</span><span style="font-weight: 400"><br /> </span><span style="font-weight: 400"><br /> </span><span style="font-weight: 400">If there were no errors we just sent the message to the other users in the room, then we sent the message as a callback to the client, notice that you need to connect the users to that room to receive the message, you can do that by sending the chat _id to the socket like we sent the token, then join any channel you want, if you are interested you can check the </span>[<span style="font-weight: 400">socket.io rooms & namespaces docs</span>](https://socket.io/docs/rooms-and-namespaces/)<span style="font-weight: 400">.</span><span style="font-weight: 400"><br /> </span><span style="font-weight: 400"><br /> </span><span style="font-weight: 400">I hope you could understand how and why you should secure your socket, it is pretty easy and your socket will be open only for the users registered on your application, stay in touch for more posts! </span>