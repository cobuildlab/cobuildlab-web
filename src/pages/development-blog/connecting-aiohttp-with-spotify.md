---
title: Connecting AIOHTTP with Spotify
date: 2019-06-03T01:00:00+00:00
tags:
template: development-post
permalink: /connecting-aiohttp-with-spotify/
image: null
---

Continuing our post about [building JSON REST APIs with Python and AOIHTTP](https://cobuildlab.com/development-blog/my-first-json-rest-api-with-aiohttp/), we will extend it's capabilities to comunicate the system with Spotify servers to list some artists and tracks.

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


## Spotify

Spotify is a super popular service to listen to music on your mobile device or computer.

> Spotify Technology S.A. is a Swedish media-services provider founded in 2006. The company's primary business is its audio streaming platform that provides DRM-protected music and podcasts from record labels and media companies.

[Wikipedia](https://en.wikipedia.org/wiki/Spotify)

![Show me the code](./media/show-me-the-code.jpeg)

Prequisites:

- Python 3.5+
- Git
- pip3


### 1. Creating the Project Folder and Files

```sh
mkdir shopify_api
cd shopify_api
touch server.py
touch client.py
```

### 2. Create a requirements File with this content:

>>> requirements.txt
```bash
aiohttp
cchardet
aiodns
spotipy
requests
```

### 3. In your project Folder Create the virtualenv

```bash
 python3 -m venv .
 ```

 ### 4. Activate the virtual Env (Unix Bash)

 ```bash
 source bin/activate
 ```

### 5. Install AIOHTTP Framework and dependencies:

```bash
bin/pip3 install -r requirements.txt
```

### 6. AOIHTTP Server App

server.py

```python
from aiohttp import web
import json
import spotipy
spotify = spotipy.Spotify()


async def handle_spotify_search(request):
    results = spotify.search(q='artist:' + request.query['name'], type='artist')
    return web.Response(text=json.dumps(results)

async def handle_spotify_albums_search(request):
    artist_uri = f'spotify:artist:{request.query['artist_id']}'
    results = spotify.artist_albums(artist_uri, album_type='album')
    albums = results['items']
    while results['next']:
        results = spotify.next(results)
        albums.extend(results['items'])
    return web.Response(text=json.dumps(albums)

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
    web.post('/spotify-search', handle_spotify_search)
    web.post('/spotify-album-search', handle_spotify_albums_search)
]

app.add_routes(routes)

web.run_app(app)
```


# 7. Run the app

```sh
chmod a+x server.py
bin/python3 server.py
```
