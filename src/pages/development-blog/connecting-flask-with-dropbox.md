---
title: Connecting My Flask Application with Dropbox
date: 2019-05-06T01:00:00+00:00
tags:
template: development-post
permalink: /connecting-flask-with-dropbox/
image: null
---

Solving upload files to web applications have been a problem since the web exists.

In our [previous post](https://cobuildlab.com/development-blog/uploading-files-with-my-react-application-using-filestack/) about Filestack we expose the diffente alternatives a long the years an the evolution of this techniques and technologies over the years.


Continuing our previous example of [Our First JSON REST API using Flask](https://cobuildlab.com/development-blog/my-first-json-rest-api-with-flask/) we will add the capabilties to our simple API of connecting with the Dropbox service.


### Flask Framework

Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries (except for some basics standard libraries such as bottom.py). It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions. However, Flask supports extensions that can add application features as if they were implemented in Flask itself. Extensions exist for object-relational mappers, form validation, upload handling, various open authentication technologies and several common framework related tools. Extensions are updated far more regularly than the core Flask program.[5] Flask is commonly used with MongoDB, which gives it more control over databases and history.


### Dropbox

Dropbox is a file hosting service operated by the American company Dropbox, Inc., headquartered in San Francisco, California, that offers cloud storage, file synchronization, personal cloud, and client software. Dropbox was founded in 2007 by MIT students Drew Houston and Arash Ferdowsi as a startup company, with initial funding from seed accelerator Y Combinator.

From [Wikipedia](https://en.wikipedia.org/wiki/Dropbox

Dropbox initially offer was to sync files between different devices. Now, it offers a more complete solution for businesses to work collaborative using both the filesytem and office tools.


![Show me the code](media/show-me-the-code.jpeg)

Prequisites:

- Python 3+
- Python 3 Virtual Enviroment
- Git


The complete working example is on: [Github](https://github.com/cobuildlab/flask-and-twilio)

### 1. Create a Dropbox Account:

Go to: [https://www.dropbox.com/login](https://www.dropbox.com/login) and Complete the steps


### 2. Create a Dropbox App

- Go to the [Developers Page](https://www.dropbox.com/developers/apps/create)
- On choose an API, go for **Dropbox API**
- Choose **Full Dropbox** on the type of access
- Pick a Name

### 3. Set up your App

- In the [Dropbox Console](https://www.dropbox.com/developers/apps?_tk=pilot_lp&_ad=topbar4&_camp=myapps), select your App
- In the **Oauth 2** section, clic on **GENERATE** to create an Access Token to your files.

>>> NOTE: This token work for managing your Dropbox account. To access someones elses Account you need to implement the [Oauth2 workflow](https://www.dropbox.com/developers/reference/getting-started?_tk=guides_lp&_ad=guides2&_camp=get_started)

### 4. Install PIP

```bash
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python get-pip.py
pip3 --version

```

### In your project Folder Create the viruatl env

```bash
 python3 -m venv .
 ```
 
### Activate the virtual Env (Unix Bash)
 
```bash
source bin/activate
```

### 4. Install Python Dropbox library:

```bash
pip3 install dropbox
# Additional Requirements
pip install -r requirements.txt
```

### 5. Create the Endpoint to List all the Files

apps.py

```python
#!flask/bin/python
from flask import Flask
from flask import jsonify
import dropbox

app = Flask(__name__)

API_KEY = 'your_api_key'
dbx_client = dropbox.Dropbox(API_KEY)


def process_list(list_folder, data):
    for entry in list_folder.entries:
        data.append({
            'filename': entry.name,
            'path': entry.path_lower
        })
    if list_folder.has_more:
        return process_list(dbx_client.files_list_folder_continue(list_folder.cursor), data)
    return data


@app.route('/', methods=['GET'])
def get_dropbox_files():
    file_list = process_list(dbx_client.files_list_folder("", recursive=True), [])
    return jsonify({'data': file_list})


if __name__ == '__main__':
    app.run(debug=True)
```

# 5. Run the app

```sh
chmod a+x app.py
python3 app.py
```
=======
```
