---
title: Uploading files with my React Application using filestack
date: 2019-04-29T01:00:00+00:00
tags: 
template: development-post
permalink: /uploading-files-with-my-react-application-using-filestack/
image: null
---


Continuing our series of utilities for Modern Web Applications using React, today we are gonna talk about of uploading files to the Cloud.

Uploading and sending files has been a common task since the beginning of Software Development. Sending documents, pictures, presentations, etc has always been of great importance to developing almost any type of application, starting from office or productivity software like email clients and CRM, to Social Media Apps or platforms. 

Our focus today will be to teach you how to upload or send files on a pretty simple Web Application, demonstrating how easy is today using [filestack](https://www.filestack.com/) technology on a React Web Application.

## The Problem

From the development point of view Uploading or sending files have 5 major problems:

- How to access the Computer or Phone filesystem to pick Files to use
- How to upload, transmit or send the selected Files
- Where to store the Files
- How to transform, optimize, or compress the files in some way
- How to access or download the Files once they are stored 


## The solutions
 
The ability of send information using files has been solved in different ways; in the case of Web Development, the HTML standard give us a way to do this [since 1995](https://en.wikipedia.org/wiki/HTML) providing an Input HTML Field to send files over HTTP.

Based on that, many solutions have arisen, we enumerate some, in order of appearance over the years:

### 1) Storing the file on the App Filesystem: 
Early web applications use the HTML input file to transmit the file via HTTP to a web server, where the server application lived (nowadays know as backend), and the server application stored the files on their file system and provided a URL to access the file.

### 2) Storing the file on the App Database
An alternative to this was implemented almost at the same time, with the difference being that the Files were store on special Databases or Databases fields optimized to this purpose. Then urls were created to access these fields.

### 3) Object Storage
This may be the most used solution nowadays. Modern applications, not only web, use robust providers that enable filesystem capabilities usually through an API to store and retrieve Files of any type. How this solution is usually implemented is connecting your backend application to a [Object Storage](https://www.netapp.com/us/info/what-is-object-storage.aspx) Provider.

Some of the most popular providers as for today are: [Amazon S3](https://aws.amazon.com/s3/), [Digital Ocean Spaces](https://www.digitalocean.com/products/spaces/), [Firebase Storage](https://firebase.google.com/docs/storage)

### 4) Object Storage from the client:
It is a variant from the previous one. Where you store the files on a third-party cloud provider, but the main difference is that you can use their API from the client application, meaning from the Browser.

Examples of this are: [Filestack](https://www.filestack.com/) or [Uppy](https://uppy.io/)


## Filestack

Filestack is a solution that allows us from our frontend application, to upload, transform and deliver files on our Web App easily, solving in that way all 5 major challenges of handling files for a web application and almost any software application.

### Major Features:

- Get user content from anywhere and dramatically improve any file or video upload with a powerful, easy to use API. Uploads, URL ingestion and iOS/Android device integration are all made fast and easy via the #1 developer service for uploads.
- Prepare content to be just right. Easily transform, convert and optimize images, files and videos right on the network-before it even arrives in your app.
- Content in Context. Prepare responsive audio, video, image and document files to be delivered fast, optimized and secure, powered by the Filestack CDN. Easily display content inside your application with the Filestack embeddable viewer.

[Source](https://www.filestack.com/)

![Show me the code](./media/show-me-the-code.jpeg)

## Uploading files with my React Application using File Stack

### 1. Go to [filestack.com](https://filestack.com) and create an account

### 2. Copy the API Key from the top right corner

### 3. Clone the Repository:

```
https://github.com/cobuildlab/react-filestack
```

### 4. Install Dependencies 

```bash
npm i
```


### 5. Run the project

```bash
npm start
```

>>> HomeView.js

```javascript 1.8
import React, { Component } from 'react';
import { Card, Media, Container, Row, Col, Badge, Button } from 'reactstrap';
import ReactFilestack from 'filestack-react';

const { REACT_APP_FILESTACK_API } = process.env;

class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }

  onFiles = ({ filesUploaded }) => {
    this.setState({ files: filesUploaded });
  };

  render() {
    const { files } = this.state;

    return (
      <Container fluid>
        <Row className="mt-4">
          <Col className="home-text">Hello World with Filestack</Col>
          <Col>
            <ReactFilestack
              apikey={REACT_APP_FILESTACK_API}
              buttonText="Click me"
              onSuccess={this.onFiles}
              preload={true}
            />

          </Col>
          <Col md={12}>
            <h1> Files </h1>
            {files.map((file, i) => {
              return (
                <Card key={i}>
                  <Media heading className={'m-2'}>
                    {file.filename}
                    <h6>
                      <Badge color="secondary">{file.url}</Badge>
                    </h6>
                    <h6>
                      <img alt={file.fileName} src={file.url} width={100} height={100}/>
                    </h6>
                  </Media>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomeView;

```