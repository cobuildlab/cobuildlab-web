---
id: 853
title: Cleaning the docker cache (mess) in my Jenkins server
date: 2018-02-18T00:33:13+00:00
tags: 
template: development-post
image: ./media/02/docker-travis-composer-packagist.png
---
Every 4-5 weeks i need to do service to my Jenkins because we haven&#8217;t found the way that Docker stop accumulating so much containers, images and volumes, so i give you the specific commands that i use: (For bash)

clean prune resources (Volumes, images and containers):

<pre class="prettyprint">docker system prune -a</pre>

Removing all Images

<pre class="prettyprint">docker rmi $(docker images -a -q)</pre>

Stop and Remove all containers

<pre class="prettyprint">docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
</pre>

Remove unused Volumes:

<pre class="prettyprint">docker volume prune</pre>

&nbsp;

You can read the complete article from Digital Ocena [here](https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes) 

&nbsp;
