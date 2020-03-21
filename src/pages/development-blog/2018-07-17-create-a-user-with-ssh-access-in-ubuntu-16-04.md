---
id: 830
title: Create a User with SSH access in ubuntu 16.04
date: 2018-07-17T16:08:45+00:00
tags: 
template: development-post
---
Several times administrating servers you need to create a new user for doing tasks that need to be done by external entities.

Usually when you create a new server, you get root access, or admin access enought to login and to install and configure stuff.

Is not a good Practice to start giving administrative access to external entities, so this is a way of creating a new user, set a password and allow him to log in.

As root or admin user we create a new user

<pre class="prettyprint">adduser &lt;user-name&gt;</pre>

The system it&#8217;s gonna ask you the password, name and some other fields, then we switch to the user that we just created:

<pre class="prettyprint">sudo su - &lt;user-name&gt;</pre>

As root, make sure in the sshd_config file the line to allow ssh auth with password is set to &#8220;yes&#8221;

<pre class="prettyprint"># Change to no to disable tunnelled clear text passwords
PasswordAuthentication yes</pre>

Then restart the ssh daemon

<pre class="prettyprint">service ssh restart</pre>

&nbsp;