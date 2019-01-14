---
id: 820
title: Rsync example using SSH credentials
date: 2018-02-11T15:37:31+00:00
tags: 
template: development-post
---
Once in a while, we are requested to upload or download files from our servers: Database Backups, keys, credentials, and so on.

The traditional method of doing this nowadays is usually SSH or SCP, but sometimes large amounts of files and folders needed a more suited tool.

Here is where rsync comes in to play. Originally as a tool for syncing files and folders, bring in to place the power of compression, delta encoding, and security by comparing sizes a timestamp of files before doing the actual network transfer.

This is an small example

<pre class="prettyprint">rsync -rvz -e ssh ubuntu@192.168.234.912:&lt;from-folder-or-archive&gt; &lt;to-folder-or-archive&gt;</pre>

-r For recursive (only when your are syncyng complete directories

-v For verbose operation

-z For using compression

-e For shell selection