---
title: Connecting My Flask Application with Sendgrid
date: 2019-03-25T01:00:00+00:00
tags: 
template: development-post
permalink: /connecting-my-flask-application-with-sendgrid/
image: null
---

How good is an application that does not send notifications? not so much right?. 

Continuing our previous example of [Our First JSON REST API using Flask](https://cobuildlab.com/development-blog/my-first-json-rest-api-with-flask/) we will add notifications via email capabilities to our app to let people know when something important happens.

## Notifications

Modern Software Applications require a way to communicate events to the outside world. Examples: 

- Sign ups
- Payments overdue
- Password Changed
- New message received
- Tasks assigned, etc

As of today, many ways of communication exists for this purpose: SMS, Email, Instant Messaging, Push notifications for web or mobile.


In this specific case, we will review sending email notifications using the SendGrid platform.


### Flask Framework

Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries (except for some basics standard libraries such as bottom.py). It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions. However, Flask supports extensions that can add application features as if they were implemented in Flask itself. Extensions exist for object-relational mappers, form validation, upload handling, various open authentication technologies and several common framework related tools. Extensions are updated far more regularly than the core Flask program.[5] Flask is commonly used with MongoDB, which gives it more control over databases and history. 


### Sengrid

SendGrid is a Denver, Colorado-based customer communication platform for transactional and marketing email. The company was founded by Isaac Saldana, Jose Lopez, and Tim Jenkins in 2009, and incubated through the TechStars accelerator program. As of 2017, SendGrid has raised over $81 million and has offices in Denver, CO, Boulder, CO, Irvine, CA, Redwood City, CA, and London.

The company went public with a debut in the New York Stock Exchange on November 16, 2017.

SendGrid provides a cloud-based email delivery service that assists businesses with email delivery.[6][8][19][20] The service manages various types of email including shipping notifications, friend requests, sign-up confirmations, and email newsletters. It also handles internet service provider (ISP) monitoring, domain keys, sender policy framework (SPF), and feedback loops.[12][21][22][23] Additionally, the company provides link tracking, open rate reporting.[21] It also allows companies to track email opens, unsubscribes, bounces, and spam reports.[6][21][24] Beginning in 2012, the company integrated SMS, voice, and push notification abilities to its service through a partnership with Twilio.[14]

From [Wikipedia](https://en.wikipedia.org/wiki/SendGrid)

![Show me the code](./media/show-me-the-code.jpeg)


These instructions are based on the [Official Python SendGrid Repo](https://github.com/sendgrid/sendgrid-python)

### 1. Create a SendGrid Account:

Go to: [https://signup.sendgrid.com/](https://signup.sendgrid.com/)


### 2. Create a SendGrid API KEY

Go to: [https://app.sendgrid.com/settings/api_keys](https://app.sendgrid.com/settings/api_keys)


### 3. Install PIP:

```bash
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python get-pip.py
pip3 --version
```

### 4. Install Python SendGrid library:

```bash
pip3 install sendgrid
```

### 5. Create the Endpoint to send an email

apps.py

```python
#!flask/bin/python
from flask import Flask, jsonify
import sendgrid
import os
from sendgrid.helpers.mail import *

SENDGRID_API_KEY = ''

app = Flask(__name__)

tasks = []

@app.route('/todo/api/v1.0/create-task', methods=['GET'])
def create_task():
    tasks.append({"id": len(tasks), "title": "Learn Python", "description": "Start with Flask first", "done": False})

    sg = sendgrid.SendGridAPIClient(apikey='APIKEY')
    from_email = Email("test@example.com")
    to_email = Email("alacret@gmail.com")
    subject = "A news task was created"
    content = Content("text/html", "<p> A task with the name: {} was created </p>")
    mail = Mail(from_email, subject, to_email, content)
    response = sg.client.mail.send.post(request_body=mail.get())
    print(response.status_code)
    print(response.body)
    print(response.headers)
    return jsonify({'tasks': tasks})


if __name__ == '__main__':
    app.run(debug=True)
```

# 5. Run the app

```sh
chmod a+x app.py
python3 app.py
```

# 6. Using templates

```python
#!flask/bin/python
from flask import Flask, jsonify
import sendgrid
import os
from sendgrid.helpers.mail import Email, Substitution, Mail, Personalization
from python_http_client import exceptions

SENDGRID_API_KEY = ''

app = Flask(__name__)


@app.route('/todo/api/v2.0/create-task', methods=['GET'])
def create_task_v2():
    tasks.append({"id": len(tasks), "title": "Learn Python", "description": "Start with Flask first", "done": False})

    sg = sendgrid.SendGridAPIClient(apikey='APIKEY')

    personalization = Personalization()
    personalization.add_to(Email("sendgridtesting@gmail.com"))
    mail = Mail()
    mail.from_email = Email("email@kylearoberts.org")
    mail.subject = "I'm replacing the subject tag"
    mail.add_personalization(personalization)
    mail.template_id = "d-46073d1fbb2d473784afcb8b39d49a17"
    personalization.add_substitution(Substitution("{{username}}", "Example User"))
    personalization.add_substitution(Substitution("{{task_name}}", "A Task"))
    try:
        response = sg.client.mail.send.post(request_body=mail.get())
    except exceptions.BadRequestsError as e:
        print(e.body)
        exit()
    print(response.status_code)
    print(response.body)
    print(response.headers)
    return jsonify({'tasks': tasks})


if __name__ == '__main__':
    app.run(debug=True)









```