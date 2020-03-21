---
title: My First JSON REST API with Django
date: 2019-02-03T01:00:00+00:00
tags: 
template: development-post
permalink: /my-first-json-rest-api-with-django.md/
image: null
---

Modern days applications compose their main logic or Business logic in APIs. (Application Programming Interface). 

APIs are interfaces designed to communicate a system with outside entities. This interfaces may use different specifications, but nowadays one of the most popular specifications is known as JSON REST API.

A JSON REST API is an interface of a system that allows communication to happen normally under the HTTP Protocol and strictly using JSON data format as a communication format.

The Term REST comes from an specific set of rules that provides a Client / Server, stateless, uniform, and cacheable communication, that, as mention before is normally implemented using the popular HTTP communication protocol.

[More about REST](https://restfulapi.net/)

![REST API](.media/rest-api-json.png)

## Django Framework

Django is a web framework that follows the pattern MVT (Model View Template). It has been around since 2005 and with more than 13 years of development is more than a good option to develop web applications.

Django perse is not built specifically to built JSON REST APIs, is built more for a monolithic approach of websites and applications, but, its large and active community, stability and large set of tools have made it a very popular choice for also building APIs.

In combination with [Django Rest Framework](https://www.django-rest-framework.org/) it makes it very easy to build a JSON REST API very fast, but also this is possible on its own.



## My JSON REST API with Django

![Show me the code](./media/show-me-the-code.jpeg)


This instructions are based on the [Oficial Django Documentation](https://docs.djangoproject.com/)

### 1. Install PIP:

```bash
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python get-pip.py
pip3 --version
```

### 2. Install Django and Django Rest Framework:

```bash
pip3 install Django
pip3 install djangorestframework
python3 -m django --version
```

### 3. Creating a Django Project

```
django-admin startproject json_rest_api
python3 manage.py runserver

```

### 4. Creating my First App

```
python3 manage.py startapp tasks

```
### 5. Adding the Apps to the settings.py

```python

INSTALLED_APPS = (
    ...
    'rest_framework',
    'tasks.apps.TasksConfig',
)
```

### 6. My First View

views.py

```python
from django.http import JsonResponse


def index(request):
    return JsonResponse("['Hello World']")
```

tasks/urls.py

```python
from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
]
```

json_rest_api/urls.py

```python
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('tasks/', include('tasks.urls')),
    path('admin/', admin.site.urls),
]
```

# 7. My First Model

```python
from django.db import models


class Task(models.Model):
    text = models.CharField(max_length=200)

class ToDo(models.Model):
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    text = models.CharField(max_length=200)
    is_done = models.BooleanField(default=0)

```

```shell
python3 manage.py makemigrations tasks
python3 manage.py migrate
```

# 8. Create a Super User to play with the Models

tasks/admin.py
```python
from django.contrib import admin

from .models import Task, ToDo

admin.site.register(Question)
admin.site.register(ToDo)
```

```bash
python3 manage.py createsuperuser
python3 manage.py runserver
```

# 9. Let's create more views


tasks/urls.py 

```python
from django.urls import path

from . import views

urlpatterns = [
    path('test', views.test, name='index'),
    # All tasks
    path('', views.index, name='index'),
    # ex: /taks/5/
    path('<int:task_id>/', views.task_detail, name='detail'),
    # ex: /tasks/5/vote/
    path('create-task/', views.create_task, name='vote'),
]
```

tasks/views.py
```python
from django.shortcuts import render
from django.http import JsonResponse

from . import models


def test(request):
    json_data = {
        "first_name": "Angel",
        "last_name": "Lacret"
    }
    return JsonResponse(json_data)

def index(request):
    tasks = models.Tasks.objects.all()
    count = models.Tasks.objects.all().count()
    tasks_list = []
    for task in tasks:
        task_object = {}
        task_object["id"] = task.id
        task_object["text"] = task.text
    json_result = {
        "tasks": tasks_list,
        "count": count
    }
    return HttpResponse(json_result)

def task_detail(request, task_id):
    task = models.Tasks.objects.get(id=task_id)
    task_object = {}
    task_object["id"] = task.id
    task_object["text"] = task.text
    return HttpResponse(task_object)

def create_task(request):
    print(request)
    print(dir(request))
    return HttpResponse(response % question_id)
```