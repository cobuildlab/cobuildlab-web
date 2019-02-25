---
title: My First JSON REST API with Flask
date: 2019-02-25T01:00:00+00:00
tags: 
template: development-post
permalink: /my-first-json-rest-api-with-flask.md/
image: null
---

Modern days applications compose their main logic or Business logic in APIs. (Application Programming Interface). 

APIs are interfaces designed to communicate a system with outside entities. This interfaces may use different specifications, but nowadays one of the most popular specifications is known as JSON REST API.

Continuing our post about building JSON REST APIs with Python, we will introduce Flask, another great Python Web Framework with a huge community and resources.

## Flask Framework

Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries (except for some basics standard libraries such as bottom.py). It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions. However, Flask supports extensions that can add application features as if they were implemented in Flask itself. Extensions exist for object-relational mappers, form validation, upload handling, various open authentication technologies and several common framework related tools. Extensions are updated far more regularly than the core Flask program.[5] Flask is commonly used with MongoDB, which gives it more control over databases and history. 


## My JSON REST API with Flask

![Show me the code](./media/show-me-the-code.jpeg)


This instructions are based on the [Oficial Flask Documentation](http://flask.pocoo.org/)

### 1. Install PIP:

```bash
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python get-pip.py
pip3 --version
```

### 2. Install Flask Framework:

```bash
pip3 install Flask
```

### 3. Creating a Flask Project

```sh
mkdir json_rest_api
touch app.py

```

### 4. My First App

apps.py

```python
#!flask/bin/python
from flask import Flask, jsonify

app = Flask(__name__)

tasks = [
    {
        'id': 1,
        'title': u'Buy groceries',
        'description': u'Milk, Cheese, Pizza, Fruit, Tylenol', 
        'done': False
    },
    {
        'id': 2,
        'title': u'Learn Python',
        'description': u'Need to find a good Python tutorial on the web', 
        'done': False
    }
]

@app.route('/todo/api/v1.0/tasks', methods=['GET'])
def get_tasks():
    return jsonify({'tasks': tasks})

@app.route('/todo/api/v1.0/create-task', methods=['GET'])
def create_task():
    tasks.append({"id": len(tasks), "title": "Learn Python", "description": "Start with Flask first", "done": False})
    return jsonify({'tasks': tasks})

@app.route('/todo/api/v1.0/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    task = [task for task in tasks if task['id'] == task_id]
    if len(task) == 0:
        abort(404)
    return jsonify({'task': task[0]})

if __name__ == '__main__':
    app.run(debug=True)
```

# 5. Run the app

```sh
chmod a+x app.py
python3 app.py
```
