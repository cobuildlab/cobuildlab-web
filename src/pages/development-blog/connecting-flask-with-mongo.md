---
title: Connecting My Flask Application with Mongo DB
date: 2019-02-25T01:00:00+00:00
tags: 
template: development-post
permalink: /connecting-my-flask-application-with-mongo/
image: null
---

How good is an application that does not store information? not so much right?. 

Continuing our previous example of [Our First JSON REST API using Flask](https://cobuildlab.com/development-blog/my-first-json-rest-api-with-flask/) we will add storage capabilities to our app to save data in a structured manner.

Nowadays many technologies exist to store information for a Software Application. In a very high level of categorization of these technologies are SQL and NoSQL Databases.

## SQL vs NoSQL

SQL stands for Structured Query Language and takes the domain of a [set of technologies](https://www.geeksforgeeks.org/sql-tutorial/) used to store data and its relationships in a structured way. 2 main components are at least necessary to SQL technologies, a language to define the structure of the data, and a language to query the data.

Nowadays all SQL database must be also [ACID Compliant](https://en.wikipedia.org/wiki/ACID_(computer_science)), this means the offer the warranty of Atomic Operations, Data Consistency, Data Isolation, and Operation Durability or Persistency.

In the other hand, NoSQL technologies are the other group that does not follow these principles. Many technologies exist that do not follow the SQL principles in many different ways, but the majority are grouped into 2 subcategories: Document Based Databases and Key-Value Stores, depending on how they organize the information that they store.

### Characteristics of SQL and Non SQL databases to notice:

- Atomicity: The quality of make  no divisibles operations
- Transactions: The quality of executing multiple atomic operations as one
- Schema: The presence or lack of structure on the data been handled
- Data Types: The quality of force or not data types
- Persistency: The quality of fully or partially persist the data that it stores
- Replication: The capacity and difficulty of growing
- API: The type of interface that it has to communicate with applications


## Connecting a NoSQL Database with Flask

In this post, we will review how to connect our [previous Flask application](https://cobuildlab.com/development-blog/my-first-json-rest-api-with-flask/) with a [Mongo DB Database](https://www.mongodb.com/).

### Flask Framework

Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries (except for some basics standard libraries such as bottom.py). It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions. However, Flask supports extensions that can add application features as if they were implemented in Flask itself. Extensions exist for object-relational mappers, form validation, upload handling, various open authentication technologies and several common framework related tools. Extensions are updated far more regularly than the core Flask program.[5] Flask is commonly used with MongoDB, which gives it more control over databases and history. 


### Mongo DB

MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemata. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL).

![Show me the code](./media/show-me-the-code.jpeg)


These instructions are based on the [Oficial Flask Documentation](http://flask.pocoo.org/)

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
cd json_rest_api
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

# 6. Install Mongo

>>> The installation of Mongo DB differs a lot between operating system. This is the instructions to install on a Mac OS system:

```
```

>>> For other operating systems you can check this [Instructions](https://docs.mongodb.com/manual/administration/install-community/)


# 7. Install PyMongo

```bash
pip3 install pymongo

```

# 8. Set up the connection and operations

apps.py

```python
#!flask/bin/python
from flask import Flask, jsonify
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient("mongodb://127.0.0.1:27017") #host uri
db = client.mymongodb #Select the database
tasks_collection = db.task #Select the collection name
initial_tasks = tasks_collection.find()

if(len(initial_tasks)) == 0:
    tasks_collection.insert({
        'id': 1,
        'title': u'Buy groceries',
        'description': u'Milk, Cheese, Pizza, Fruit, Tylenol', 
        'done': False
    })
    tasks_collection.insert({
        'id': 2,
        'title': u'Learn Python',
        'description': u'Need to find a good Python tutorial on the web', 
        'done': False
    })


@app.route('/todo/api/v1.0/tasks', methods=['GET'])
def get_tasks():
    tasks = tasks_collection.find()
    return jsonify({'tasks': tasks})

@app.route('/todo/api/v1.0/create-task', methods=['GET'])
def create_task():
    tasks = tasks_collection.find()
    tasks.insert({"id": len(tasks), "title": "Learn Python", "description": "Start with Flask first", "done": False})
    tasks = tasks_collection.find()
    return jsonify({'tasks': tasks})

@app.route('/todo/api/v1.0/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    tasks = tasks_collection.find({'id': task_id})
    if len(task) == 0:
        abort(404)
    return jsonify({'task': task[0]})

if __name__ == '__main__':
    app.run(debug=True)
```