---
title: Deploying a Flask application on Heroku
date: 2019-04-22T01:00:00+00:00
tags: 
template: development-post
permalink: /deploying-a-flask-application-on-heroku/
image: /media/blocks.jpg
---

On previous posts we talk about how to build a very simple [Flask REST JSON API](https://cobuildlab.com/development-blog/my-first-json-rest-api-with-flask/), and now we are going to show you how to introduce your API to the outside world on the internet using [Heroku](https://www.heroku.com/).

In this case our app will work with in memory data, no database connection yet, but if you want to know a couple of things that you can do with Python and Flask, check this other posts:

- [Send SMS with Twilio] (https://cobuildlab.com/development-blog/connecting-flask-with-twilio/)
- [Send Emails with SendGrid] (https://cobuildlab.com/development-blog/connecting-flask-with-sendgrid/)
- [Store data with MongoDB] (https://cobuildlab.com/development-blog/connecting-flask-with-mongo/)
 

>>> Heroku is a cloud platform as a service (PaaS) supporting several programming languages. Heroku, one of the first cloud platforms, has been in development since June 2007, when it supported only the Ruby programming language, but now supports Java, Node.js, Scala, Clojure, Python, PHP, and Go.

[Source](https://en.wikipedia.org/wiki/Heroku)

Heroku makes particularly easy to deploy applications, and with it system of plugins, even easier connect external services like Redis, Postgresql, Mongo, etc


![Show me the code](./media/show-me-the-code.jpeg)

Pre requisites:

- [Git](https://git-scm.com/)
- [Python 3](https://www.python.org/downloads/)
- [PIP 3](https://pip.pypa.io/en/stable/installing/)
- [Heroku Account](https://www.heroku.com)
- You favorite Text Editor or IDE
- Basic Knowledge of the Command Line of your OS

### 1. Install the Heroku CLI

**For MACOS**
```bash
brew tap heroku/brew
brew install heroku
```

[**For Windows or Linux**](https://devcenter.heroku.com/articles/heroku-cli)

### 2. On a new folder create your Flask app, on a `app.py` File
 
```bash
mkdir flask-api
cd flask-api
touch app.py 
```
### `app.py`

```python
#!/usr/local/bin/python3
from flask import Flask, jsonify

app = Flask(__name__)
tasks = []


@app.route('/api/tasks', methods=['GET'])
def get_tasks():
    task_list = []
    for task in tasks:
        task_list.append({'title': task['title'], 'description': task['description'], 'id': task['id']})
    return jsonify({'tasks': task_list})


@app.route('/api/create-task', methods=['GET'])
def create_task():
    new_task = {"id": len(tasks), "title": "Learn Heroku", "description": "Start with Flask ", "done": False}
    tasks.append(new_task)
    for task in tasks:
        task_list.append({'title': task['title'], 'description': task['description'], 'id': task['id']})
    return jsonify({'tasks': task_list})


@app.route('/api/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    try:
        task = tasks[task_id]
    except:
        return jsonify({"text": "Error, task not found"})
    return jsonify({'title': task['title'], 'description': task['description'], 'id': task['id']})


@app.route('/', methods=['GET'])
def home():
    return jsonify({'msg': 'This is the Home'})


@app.route('/test', methods=['GET'])
def test():
    return jsonify({'msg': 'This is a Test'})


if __name__ == '__main__':
    app.run(debug=True)
```

### 3. Install Flask and Gunicorn to test locally

```bash
pip3 install Flask
pip3 install gunicorn
```

# 4. Create your `requirements.txt` File

```bash
pip3 freeze > requirements.txt
```

# 5. Create your `runtime.txt` File to specify to Heroku the Python version

### `runtime.txt`
```bash
python-3.7.3
```

### 6. Add a `Procfile` (This is a Heroku specific File, to describe our app to Heroku)

```bash
touch Procfile
```

### `Procfile`

```bash
web: gunicorn app:app
```

### 7. Create your heroku app

```bash
heroku login
heroku create
```
**Pay attention to the output of the command**

```bash
Creating app... done, ⬢ rocky-temple-69041
https://rocky-temple-69041.herokuapp.com/ | https://git.heroku.com/rocky-temple-69041.git
```

**Specifically to this line:**

```bash
https://rocky-temple-69041.herokuapp.com/ | https://git.heroku.com/rocky-temple-69041.git
```

**The App URL:** https://rocky-temple-69041.herokuapp.com/
**The Heroku GIT REPO:** https://git.heroku.com/rocky-temple-69041.git

### 8. Test your app locally

```bash
heroku local
```
### 9. Push your changes to Heroku GIT REPO

```bash
git add .
git commit -m "commit mesage"
git push heroku master
```

### 10. Test your app live
