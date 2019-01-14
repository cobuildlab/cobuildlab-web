---
id: 874
title: Configuration of asynchronous tasks in heroku using python with django and celery
date: 2018-02-19T17:15:05+00:00
tags: 
template: development-post
image: /wp-content/uploads/2018/02/548625594.jpg
---
<p class="western" lang="es-VE">
  This is aimed at those people who already have a python project with django in active heroku, the steps to follow to upload a project will be ignored.
</p>

<p class="western" lang="es-VE">
  <strong>Previous Requirements</strong><br /> First we need have install in our project celery and django-celery so let&#8217;s go see:
</p>

<li class="western">
  installl celery and django-celery in your virtualenv:<br /> <span style="padding: 15px;">&#8220;pip install Celery django-celery&#8221;</span>
</li>

<p class="western" lang="es-VE">
  <span style="font-family: 'Liberation Mono', 'Courier New', monospace;"><span style="color: #000000;"><span style="font-family: Consolas, 'Bitstream Vera Sans Mono';"><span style="font-size: small;">Note: </span></span></span></span><span style="font-family: 'Liberation Mono', 'Courier New', monospace;"><span style="color: #000000;"><span style="font-family: Consolas, 'Bitstream Vera Sans Mono';"><span style="font-size: small;">remember each new dependency install have to added in the file requiremenst.txt for when you upload the changes to heroku he install this dependencies. you can see all dependencies instaled runing the comad pip freeze</span></span></span></span>
</p>

 2. After they are installed all dependency, in our setting.py have to added:
  
<!--?prettify linenums=true?-->

<pre class="prettyprint">INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',
    'djcelery'
]
</pre>

besides importing
  
<!--?prettify linenums=true?-->

<pre class="prettyprint">import djcelery
djcelery.setup_loader()
</pre>

After performing this configuration execute the command:
  
“python manage.py migrate djcelery”
  
with this command have to create the tables neceary to configure the djcelery in django admin. If you want to expand more you can visit the following link <https://github.com/celery/django-celery> y <http://www.celeryproject.org/>

<span style="font-family: SFMono-Regular, Consolas;"><span style="font-size: small;">Note: </span></span><span style="color: #000000;"><span style="font-family: SFMono-Regular, Consolas;"><span style="font-size: small;">For to realize local test is necesary have to install a handler for the message queue between django and celery which can be Redis <a href="https://redis.io/download"> https://redis.io/download</a>or Rabbitmq <a href="https://www.rabbitmq.com/download.html">https://www.rabbitmq.com/download.html</a></span></span></span>

  * If you decide utilice redis have to install one aditional dependency in our virutalenv &#8220;pip install -U &#8220;celery[redis]&#8221;, as well as adding it to the requirements.txt file. affter added in the file setting.py CELERY\_BROKER\_URL = &#8216;redis://localhost:6379/0&#8217;
  * if you decide utilice rabbitmq addd in the file setting.py: CELERY\_BROKER\_URL = &#8216;amqp://localhost&#8217;

Remember that the redis or the rabbitmq must be turned on by the console to work

<p class="western" lang="es-VE">
  <strong>Configuration of celery</strong><br /> we have to create a new file whose name is celery.py in the configuration folder in our project
</p>

  * Navigate to the root project configuration module (where are the URL modules and settings):
  
    yourproject
  
    -app
  
    -migrations
  
    \_\_init\_\_.py
  
    0001_initial.py
  
    admin.py
  
    app.ys
  
    models.py
  
    **                 tasks.py**
  
    tests.py
  
    view.py
  
    -yourproject
  
    **                 \_\_init\_\_.py**
  
    **                 celery.py**
  
    setting.py
  
    urls.py
  
    wsgi.py
  * Inside of the file write this:<!--?prettify linenums=true?-->
    
    <pre class="prettyprint">from __future__ import absolute_import, unicode_literals
import os
from celery import Celery
from django.conf import settings
# set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'yourproject.settings')
app = Celery('yourproject')
# Using a string here means the worker don't have to serialize
# the configuration object to child processes.
# - namespace='CELERY' means all celery-related configuration keys
# should have a `CELERY_` prefix.
app.config_from_object('django.conf:settings')

# Load task modules from all registered Django app configs.
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)</pre>

  * then update the file \_\_init\_\_.py in the configuration folder in our project:<!--?prettify linenums=true?-->
    
    <pre class="prettyprint">from __future__ import absolute_import, unicode_literals
	
	# This will make sure the app is always imported when
	# Django starts so that shared_task will use this app.
	from .celery import app as celery_app

	__all__ = ['celery_app']</pre>

<p class="western" lang="es-VE">
  with this have the celery correctily configured in our project. now we will proceed to realice the tasks
</p>

<p lang="es-VE">
  <strong>Creating asynchronous and periodic tasks</strong>
</p>

  * we need create a file tasks.py in the Django aplication you want (remember this aplication it must be valid in INSTALLED_APPS):<!--?prettify linenums=true?-->
    
    <pre class="prettyprint">from __future__ import absolute_import, unicode_literals
from celery import shared_task
from account import models as account_models


@shared_task
def disableCodeRecoveryPassword(instance):
    instance = account_models.User.objects.get(id=instance)
    instance.recovery = ''
    instance.save()
    return True</pre>

  * to finish we will activated the worker with the next command: “celery -A yourproject worker -l info”. but before having your server running in another terminal staying like this:

<img class="alignnone wp-image-864 size-large" src="https://community.4geeks.co/wp-content/uploads/2018/02/Screenshot-from-2018-02-19-11-33-57-1-1024x586.png" alt="" width="800" height="458" />

<p class="western" lang="es-VE">
  now we have all configuration to need to iniciate a tasks asynchronous in django, now we show to you how to run in heroku
</p>

<p lang="es-VE">
  <strong>Project in heroku</strong>
</p>

<p class="western" lang="es-VE">
  <span style="font-family: 'Liberation Mono', 'Courier New', monospace;"><span style="color: #000000;"><span style="font-family: Consolas, 'Bitstream Vera Sans Mono';"><span style="font-size: small;">Note: </span></span></span></span><span style="font-family: 'Liberation Mono', 'Courier New', monospace;"><span style="color: #000000;"><span style="font-family: Consolas, 'Bitstream Vera Sans Mono';"><span style="font-size: small;">To be able to use celery in heroku we have need a pay account, because when we try to install the redis or rabbitmq addons we will request a credit card</span></span></span></span>
</p>

  * in the **procfile** file we must added two new line being that way:<!--?prettify linenums=true?-->
    
    <pre class="prettyprint">web: gunicorn yourproject.wsgi --log-file -
worker: python manage.py celery worker --without-gossip --without-mingle --loglevel=info
beat: python manage.py celery beat –loglevel=info</pre>

  * then we must added in the file setting.py:<!--?prettify linenums=true?-->
    
    <pre class="prettyprint">BROKER_URL = os.environ.get("CLOUDAMQP_URL", "django://")

BROKER_POOL_LIMIT = 1
BROKER_CONNECTION_MAX_RETRIES = None
BROKER_HEARTBEAT = None 
RESULT_BACKEND = None EVENT_QUEUE_EXPIRES = 60 
WORKER_PREFETCH_MULTIPLIER = 1 
WORKER_CONCURRENCY = 50 
CELERYBEAT_SCHEDULER ='djcelery.schedulers.DatabaseScheduler'</pre>

After to upload all changes in heroku we must added a new addons in this example used the addons cloudAMQP writting the next command in console
  
“$ **heroku addons:add cloudamqp**”
  
or you can go to heroku in the resource part and look for the addons and install it:

<img class="alignnone size-large wp-image-868" src="https://community.4geeks.co/wp-content/uploads/2018/02/Screenshot-from-2018-02-19-11-51-54-1024x586.png" alt="" width="800" height="458" />

<p class="western" lang="es-VE">
  <span style="font-family: 'Liberation Mono', 'Courier New', monospace;"><span style="color: #000000;"><span style="font-family: Consolas, 'Bitstream Vera Sans Mono';"><span style="font-size: small;">Note: </span></span></span></span><span style="font-family: 'Liberation Mono', 'Courier New', monospace;"><span style="color: #000000;"><span style="font-family: Consolas, 'Bitstream Vera Sans Mono';"><span style="font-size: small;">the previus configuration only work with cloudamqp I invite you to do your tests with redis install the addons<a href="https://elements.heroku.com/addons/rediscloud">https://elements.heroku.com/addons/rediscloud</a></span></span></span></span>
</p>

<p lang="es-VE">
  Then we have all ready upload the project to heroku, now to activate the worker in heroku we must execute next command <b>“$ heroku ps:scale worker=1”</b>
</p>

<p lang="es-VE">
  if you need to activate the beat, then do it using the same command, only changing the worker for the beat <b>“$ heroku ps:scale beat=1”</b>
</p>

<p lang="es-VE">
  to simplify things you can activate both at the same time<b><br /> “$ heroku ps:scale worker=1 beat=1”</b><br /> only in the case that you are using the asynchronous and periodic tasks
</p>

<p lang="es-VE">
  In doing so, this will be shown in the console<br /> <strong>&#8220;heroku-cli: update available from 6.14.36-15f8a25 to 6.15.25-635e5c6</strong><br /> <strong> Scaling dynos&#8230; done, now running beat at 1:Hobby, worker at 1:Hobby&#8221;</strong><br /> for all cases if only active the worker will exit: worker at 1:Hobby
</p>

<p lang="es-VE">
  to off the worker execute the next command:<br /> <strong>$ heroku ps:scale worker=0 beat=0</strong>
</p>

<p lang="es-VE">
  to verify that the worker is working well execute the command: <strong>&#8220;heroku ps&#8221; </strong>
</p>

<p lang="es-VE">
  <img class="alignnone size-large wp-image-870" src="https://community.4geeks.co/wp-content/uploads/2018/02/Untitled-1024x164.png" alt="" width="800" height="128" />
</p>

<p lang="es-VE">
  inally show the logs the heroku executing the command<br /> <strong>heroku logs -t -p worker</strong>
</p>

<p lang="es-VE">
  <img class="alignnone size-large wp-image-871" src="https://community.4geeks.co/wp-content/uploads/2018/02/Screenshot-from-2018-02-19-12-15-22-1024x586.png" alt="" width="800" height="458" />
</p>

<p lang="es-VE">
  <strong>heroku logs -t -p beat</strong>
</p>

<p lang="es-VE">
  <img class="alignnone size-large wp-image-872" src="https://community.4geeks.co/wp-content/uploads/2018/02/Screenshot-from-2018-02-19-12-16-14-1024x586.png" alt="" width="800" height="458" /><br /> to see if we have an error when uploading it or it was done correctly
</p>

<p lang="es-VE">
  to finist execute the command:<br /> <b>&#8220;heroku restart&#8221;</b>
</p>

if you followed all the steps to the letter you can perform leave asynchronous tasks in heroku
  
I hope this guide has been useful, share and leave your comments 🙂