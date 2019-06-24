---
title: Connecting my React Native Application with Firebase platform
date: 2019-06-24T01:00:00+00:00
tags: 
template: development-post
permalink: /connecting-my-react-application-with-firebase-platform/
image: null
---

Continuing our post on [My First React Native app](https://cobuildlab.com/development-blog/my-first-ios-and-android-application-using-react-native/), today we will briefly explain how to connect your react native application to the Firebase platform, to quickly start working on your mobile app project.

## Firebase

Firebase is a web and mobile application development platform for building apps faster without managing infrastructure.

Services:

- NoSQL Database
- Machine Learning Kit
- Cloud Functions
- Authentication framework
- Hosting 
- Cloud Storage
- Notifications
- Analytics

## React Native

React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI using declarative components.

[Official React Native Documentation](https://facebook.github.io/react-native/)

![Show me the code](./media/show-me-the-code.jpeg)


## Connecting my React Native Application with Firebase

This instructions are based on the [Official React Native Documentation](https://facebook.github.io/react-native/docs/getting-started) and in the [Official React Native Firebase plugin Documentation](https://rnfirebase.io/docs/v5.x.x/installation/initial-setup)

Prerequisites:

- Android Studio

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

### 3. Create a new application with the CLI

```
react-native init firebaseRn
```

### 4. Go to [Firebase](https://firebase.google.com/) and create an account or log in if you already have a google account

### 5. Go to the [Firebase Console](https://console.firebase.google.com/u/1/)

### 6. Create a new project

### 7. On the project folder install the `react-native-firebase` library

```bash
npm install --save react-native-firebase
react-native link
``` 

### 8. Follow the instructions to setup the platform specific library and tools. For this example we will use Android

- [Android](https://rnfirebase.io/docs/v5.x.x/installation/android)
- [IOS](https://rnfirebase.io/docs/v5.x.x/installation/ios)

NOTE: For Android Package Name in Firebase, use the name of your app, in this example case is: `com.firebasern`
NOTE: Make sure you keep your `google-services.json` at hand because it is required further on the config steps

### 9. Open the Android Studio in the `android` folder of the project

### 10. Open or create an AVD (Emulator)

### 11. Run your app:

```bash
react-native run-android
```

NOTE: If the apps does not starts on the phone automatically, go to the Apps list and tap to open it

### 12. Start coding
