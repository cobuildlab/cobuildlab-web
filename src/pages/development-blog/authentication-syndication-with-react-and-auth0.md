---
title: Authentication Syndication with React and Auth0
date: 2019-05-13T01:00:00+00:00
tags: 
template: development-post
permalink: /authentication-syndication-with-react-and-auth0/
image: null
---

Authentication With React + Auth0

#####
Requirements
#####

````
  Basic Knowledge of React.js
  Previously Registered on https://auth0.com/
  npm or yarn
````

#####
Introduction
#####

`````
  In this tutorial I'll show you how to use React.js and Auth0 to create and Auth0 to handle User Authentication
  From the client. Auth0 provides authentication and authorization as a service. 
  This help Front-End Developers build applications that need authentication without backend service.
  There's a lot of feature of Auth0 that I will explain later.
  Using Auth0 platform, you can build your own authentication system that scales, Auth0 allows to perform features like:
  - OAuth 2.0  (OAuth 2.0 is the industry-standard protocol for authorization)
  - Dashboard (Lastest Logins, New Signups, Login Activity)
  - Create an Appliaction (SPA, Native, RWA)
  - APIs
  - SSO Integrations
  - Connections (Database, Social, Enterprise, Passwordless)
  - Universal Login
  - Users & Roles
  - Rules
  - Hooks
  - Multifactor Authentication
  - Emails (Templates, Providers)
  - Logs (Sucessfull Logins, Issues)
  Now, you had a idea of how auth0 works. Now we need to implement these two technologies: 
  React.js & Auth0 service.
`````
#####
Intended Audience
#####

``````
  This tutorial is mainly aimed at users who are familiar with React.js and who want to expand their knowledge by implementing technologies that allow the authentication of users without knowledge in the backend.
Getting Started

  The developers at Auth0 created this platform to solve the most complex and large scale identity use cases for global companies with its extensible and easy to integrate platform, ensuring billions of logins every year. We will only use some of the simplest features to perform our authentication in simple steps.

  1. Create an Account on Auth0 (auth0 it's also free servic to use as a platform and pricing changes.)
    See pricing details here: https://auth0.com/pricing
  
  2. Once you registered your email and password in Auth0 UI, you need to set a TENANT DOMAIN, you can set as you want.
  We will call tutorial-react-auth0.auth0.com and set our region as ES (United States) (Step 1 of 2)

  3. Once you set TENANT DOMAIN and REGION, you need to select an account type, role, and main challenge.
  In our case, we need to choose account type: Personal, Role: Developer, Main Challenge: Fast setup + seamless auth
  (Step 2 of 2) and that's all for now, you'll be redirect to the dashboard of auth0 note that's included the features that I introduced previously, now we need to setup our project.

  4. Go a head and click on the dashboard "Create Application" you may notice there's a lot of application types.
  We need to choose as SPA (Single Page Application) you will able to call it with a name. In our case we set to 
  React-Auth0-Tutorial and click on "Create".

  5. Nicely done, at this point auth0 want to ask us what tecnhology we are using. We need to select "React" as our Technology,
  and now we got our first application on Auth0, we need now to integrated with React.js, you can see the overview of our application. QuickStart, Settings, Addons, Connections for now, leave empty, and stay connect in the Auth0 web.

  6. We need configure React.js Enviroment, you previously need to had a npx create-react-app. So, after that we need open the terminal and open the react project that we set for our project and handling authentication.
``````

#####
Installing the dependencies
#####

`````
  Now that you're prepared your setup application for auth0, let's install our dependencies for our project.
  npm install auth0-lock auth0-js react-router-dom --save or yarn add auth0-lock react-router-dom --save
  after sucessfully install dependencies we need to run npm start or yarn start
`````

####
Setting up our project
####

````
  Now, we need to configure our routes, and our connection with auth0.
Creating our project structure.

  1. Create a folder called /modules
  2. Inside of modules folder create a folder called authentication
  3. Inside of modules folder create a folder called main this is for the principal view.
  4. Inside of modules folder create a folder called profile this is for the profile view.
  5. Inside of main folder create a JavaScript File called "MainView.js" and inside of profile folder create a "ProfileView.js"
  6. For Views, import React, and set it to a Class Component, with a render method, and return an
  <React.Fragment></React.Fragment> for now and export default this views.
  7. Inside authentication folder create a file called config.js
````

####
 1. Setting our App.js
####

````
  Now that we have already made our views, and exported, we need to import into our App.js
  Look at the code below. For now just import the MainView.
````

####
  2. Importing auth0 SDK on config.js
####

```
  First, we need some additional info for configure our project.
  Now we should import to set our configuration in config.js file.
  Follow the next steps: 

  import auth0 from 'auth0-js'
  import { Auth0Lock } from 'auth0-lock';

  // This configuration can be founded in your auth0 application settings
  

  const app = new auth0.webAuth({
    domain: "YOUR_DOMAIN_NAME",
    clientID: "YOUR_CLIENT_ID",
    redirectUri: "http://localhost:3000/callback",
    responseType: "token id_token",
    scope: "openid profile email update:current_user_metadata read:current_user"
  });

  export { app };

```

####
  4. Go to Application / Settings 
####

```
  Check these images below, you can easily copy all information to set in our config.js file.
  Some of these features are:
    * Application Name
    * Domain
    * Client ID
    * Client Secret
    * Description
    * Application Logo
    * Application Type (e.g You can also switch from SPA to Native)
    * Allowed Callback URLs (Check the second image below)
    * Allowed CORS, Origins, Application LOGO URI, Allowed Logout URLS.

    In the same picture, you can read all about each option that can be setting.
    See the last image in this step, the code will looks like this.
    Also you can declare constant for the naming of Domain, and Client for mantain the code.
```

####
  5. Go to main/MainView.js to set up the Auth0 functionality.
####

```
  Look the image of the code below.
  We're using a simple default button tag, and set a attribute onClick, after that we bind a function
  openLockWidgetAuthenticator, and this function will toggle the modal of auth0.
  Look at the image of the auth0 authenticator modal.
  Now we need to define, our callback view, for parsing our athentication.
```

####
  6. Creating a Callback View.
####

```
  1. We need to creating our CallbackView and set as a functional component.
  2. Check the image below, we add a method to our App.js, handleAuthentication.
```

####
  7. Handling authentication.
####

```
  1. Create a authentication.js file in our authentication folder.
  Now we need to set this code:

  import { app } from './config';
  // importing our auth0 instance.
  
  // Set all information, token, accessToken, expiration, this is for save the current sesion of the user.
import { app } from './config';
  // importing our auth0 instance.
  
  // Set all information, token, accessToken, expiration, this is for save the current sesion of the user.
  const setSession = (credentials) => {
    const tokenExpiration = (credentials.expiresIn * 1000) + new Date().getTime();
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('token_expiration', JSON.stringify(tokenExpiration));
    localStorage.setItem('idToken', JSON.stringify(credentials.idToken));
    localStorage.setItem('accessToken', JSON.stringify(credentials.accessToken));
    app.client.userInfo(getAccessToken(), (err, profile) =>{
      if(profile) console.log(profile);
      console.log(err);
    });
  };

  // Getting the access token for request information from auth0.

  export const getAccessToken = () => {
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));
    return accessToken;
  };
  
  // Detects if the user has been logged in our applcation, if an error occurs we redirect.
  export const handleAuthentication = () => {
    app.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        setSession(authResult);
        window.location.href = '/profile';
      } else if (err) {
        console.log(err);
        window.location.href = '/';
      }
    });
  };

  // A Checkpoint that detects if the user is authenticated, or not.
  export const isAuthenticated = () => {
    const authenticated = JSON.parse(localStorage.getItem('isLoggedIn'));
    return authenticated;
  };

  // A function to logout and redirect.
  export const logOut = () => {
    localStorage.removeItem('idToken');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('token_expiration');
    window.location.href = '/';
  };

```
