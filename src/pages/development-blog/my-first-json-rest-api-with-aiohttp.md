---
title: My First JSON REST API with AIOHTTP
date: 2019-06-03T01:00:00+00:00
tags: 
template: development-post
permalink: /my-first-json-rest-api-with-aiohttp/
image: null
---

Modern days applications compose their main logic or Business logic in APIs. (Application Programming Interface). 

APIs are interfaces designed to communicate a system with outside entities. This interfaces may use different specifications, but nowadays one of the most popular specifications is known as JSON REST API.


Continuing our post about building JSON REST APIs with Python, we will introduce [AOIHTTP](https://aiohttp.readthedocs.io/en/stable/), another great Python Web Framework with a huge community and resources.

## AIOHTTP

AIOHTTP is a Python Library to built HTTP Clients and Servers using a single-threaded architecture using Python [asyncio](https://aiohttp.readthedocs.io/en/stable/glossary.html#term-asyncio).

- Supports HTTP Client and Server
- Supports Websocket Client and Servers
- Single threaded
- Middleware architecture


## Python asyncio

Is a Python +3.5 package to handle concurrency with a single-threaded architecture.

"The library for writing single-threaded concurrent code using coroutines, multiplexing I/O access over sockets and other resources, running network clients and servers, and other related primitives."

[Source](https://aiohttp.readthedocs.io/en/stable/glossary.html#term-asyncio)



![Show me the code](./media/show-me-the-code.jpeg)

Prequisites:

- Python 3.5+
- Git


This instructions are based on the [Oficial AIOHTTP Documentation](https://aiohttp.readthedocs.io/en/stable/)

### 1. Install PIP:

```bash
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python get-pip.py
pip3 --version
```

### 2. Create a requirements File with this content:

>>> requirements.txt
```bash
aiohttp
cchardet
aiodns
```

### 2. In your project Folder Create the virtualenv

```bash
 python3 -m venv .
 ```

### 3. Install AIOHTTP Framework and dependencies:

```bash
pip3 install -r requirements.txt
```
 
### 4. Activate the virtual Env (Unix Bash)
 
```bash
source bin/activate
```

### 3. Creating the Project

```sh
mkdir aiohttp_api
cd json_rest_api
touch server.py
touch client.py
```

### 4. My First AOIHTTP Server App

server.py

```python
from aiohttp import web
import json

async def handle_get(request):
    text = 'Hello, World!'
    return web.Response(text=text)

async def handle_post(request):
    try:
        # Success path where name is set
        response_obj = { 'status' : 'success' }
        # Process our new user
        response_obj['body'] = request.query['name']
        # return a success json response with status code 200 i.e. 'OK'
        return web.Response(text=json.dumps(response_obj), status=200)
    except Exception as e:
        # Failed path where name is not set
        response_obj = { 'status' : 'failed', 'reason': str(e) }
        # return failed with a status code of 500 i.e. 'Server Error'
        return web.Response(text=json.dumps(response_obj), status=500)

app = web.Application()

routes = [
    web.get('/', handle_get),
    web.post('/add-user', handle_post)
]

app.add_routes(routes)

web.run_app(app)
```

### 5. My First AOIHTTP Client App

client.py

```python
import aiohttp
import asyncio

async def fetch(session, url):
    async with session.get(url) as response:
        return await response.text()

async def main():
    async with aiohttp.ClientSession() as session:
        html = await fetch(session, 'http://python.org')
        print(html)

loop = asyncio.get_event_loop()
loop.run_until_complete(main())
```

# 5. Run the apps

```sh
chmod a+x app.py
python3 app.py
```
