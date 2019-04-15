---
title: My First iOS and Android Application using React Native
date: 2019-04-15T01:00:00+00:00
tags: 
template: development-post
permalink: /my-first-ios-and-android-application-using-react-native/
image: null
---

So is 2019 right? 

Creating mobile and web apps for companies, brands, businesses and Startups is very trendy nowadays, and choosing the right tools to do it is important to get the best results.

## Common requirements for Mobile Applications

In this opportunity we will talk about the different options that a developer has to start a Mobile Development Project, taking in consideration standard requirements of a Modern Mobile Application, such as:

- Identifying and Authorizing Users
- Storing, reading and sharing User information
- Push Notifications
- External Notifications: SMS and EMAIL
- Geolocation awareness
- Storing local data
- Connecting to the internet
- Social Integration

To differentiate the options that we have to develop a Mobile App, and how to classify them we will first talk about some specifics terms and practices of this type of development:

## Architecture for a Mobile Application 

The most common architecture for a Mobile Project is the Client-Server architecture, were a set of services are developed and exposed via an API, and this API is then accessed by clients via a communication protocol, example: A Mobile User connects to an API using the HTTP protocol.

However certain type of applications may not required communicate to external services, or non service at all, like Alarms, Clocks, Cameras, etc

## Cross-platform deployment 

A technology to develop Mobile Applications can be Cross-platform if the tool allows to publish, export or deploy the app in more than one platform. 

Example: An application built with the Ionic Framework, can be deployed both to IOS and Android, so is a Cross-platform technology. An application develop with the IOS SDK can only be deployed to IOS meaning that this is **not** a Cross-platform technology.
It refers to, to which platforms an application can be deployed, exported or published once it has been built.

Usually Cross-platforms technologies impose some layer of abstraction on the application that, depending on the end use and capabilities required may or may not impact on the performance of the resulting mobile Application. This is usually the case for Hardware intensive technologies such as 3D Rendering, Bluetooth, accelerometer, etc.   

# Mobile Development Technologies

Based on the previous comments, the most populars technologies to develop a Mobile Application are divided mainly in the programming language that is used to develop the application, and whether is not Cross-platform.

| Name | Programming Language | UI technology | Cross-platform |
| --- | --- | --- | ---|
| React Native | Javascript | React JSX | Yes |
| Ionic Framework | Javascript | HTML + CSS | Yes |
| Native Script | Javascript | Angular + HTML + CSS | Yes |
| Android SDK | Java | XML | No |
| IOS SDK | Swift / Objective C | IOS Storyboard | No |

In this opportunity we will talk about React Native, that is the preferred technology used in our organization, leaving here a set of consideration to choose among them:

- Previous knowledge of the development team
- Knowledge of the programing Language
- Learning Curve of the technologies
- Community Size
- Support of the community
- Popularity


## React Native

React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI using declarative components.

[Official React Native Documentation](https://facebook.github.io/react-native/)

![Show me the code](./media/show-me-the-code.jpeg)

## My First IOS and Android App

This instruction is based on the [Official React Native Documentation](https://facebook.github.io/react-native/docs/getting-started)

[Github Repo](https://github.com/cobuildlab/react-native-task-list)

### 1. Install Node and Watchman

>>> For MACOS
```bash
brew install node
brew install watchman
```

>>> For Ubuntu systems
[Follow whits instructions](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/)

>>> For other systems
Refer to [Node documentation](https://nodejs.org/en/download/)

### 2. Install React Native CLI tool

```bash
npm i -g react-native-cli
```

### 3. Create a new application with the CLI or Clone the repo:

```
react-native init todoListRn
```

```bash
git clone 
```


### 4. Modify your code

### 5. Start coding