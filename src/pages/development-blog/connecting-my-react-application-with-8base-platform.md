---
title: Connecting my React Application with 8base platform
date: 2019-03-18T01:00:00+00:00
tags: 
template: development-post
permalink: /connecting-my-react-application-with-8base-platform/
image: null
---

Many years ago software developers were prepared to develop applications on different environments across different spaces of Computer Science. For example Database design, Services or Business Logic, Infrastructure, User Interfaces, multiprocessing, etc, etc

With the advances of these technologies of the last couple of decades these spaces have increased on complexity, evolving to provide better performance, services and to be adaptable to different situations. Nowadays we have different disciplines were software developers can specialize to be more effective and goal oriented.

Some of these disciplines are:

- UI / UX design: To develop user interfaces, interactions, and experience
- Frontend Development: To develop client-side logic facing the end User.
- Backend Development: To develop Business logic, services, and interactions between systems.
- Devops: To develop delivery processes and infrastructure
- Database Designers: To develop data structures for persistence and their relationships.
- Big Data Engineers: To develop interaction and analytics with large datasets.

And for sure many more...

So, with these new approaches, year over a year developing a software application is becoming more and more complex and of course more and more expensive. 

Fortunately, many services have also been evolving in favor of simplifying the combinations of these pieces or "technology Stack".

On all the spaces of the stack, different solutions have arisen, for UI/UX design, big data, infrastructure, frontend development, backend development, etc. In this post we will focus on the technologies around the **infrastructure and backend development.**

1) Hosting: The first thing that was removed was the management of the Hardware. Hosting providers have been evolving to provide servers, bare metal or virtuals, for you to install your OS and/or any application in it. Example: Amazon, IBM, Go Daddy, Digital Ocean
2) Serverless technologies: Secondly many providers like Amazon, Google, Heroku, IBM, etc have been developing tools for getting rid of server management (IT infrastructure) and provide services where you just upload your code and they take care of getting it up and running. 
3) SAAS technologies: The term SAAS refers to a model where services are provided through a Software interface. In this space, this has been translated to Software who help you manage easily your backend Services or Business Logic from an Interface like Firebase, 8base, or Amazon.
4) Low code platforms: These platforms are aiming to provide a more complex and robust solution to not only infrastructure and Business Logic / Services spaces, but aiming to solve some other common problems like authentication, emailing and notifications, User permissions, reporting, etc.



## 8base

8base is a platform that aims to reduce the friction, complexity and time of developing modern Client-Server applications by providing powerful tools that solve common challenges like User Interface Design, Database Design, Authentication, Infrastructure, Permissions, among others.

Part of the tools that they provide are:

- Boost: A UI kit for building React Applications
- A Database designer, for quickly develop your Business Model
- A UI designer to create screens and UI components
- A GraphQL API to interact with your Business Model

![Show me the code](media/show-me-the-code.jpeg)

## Connecting my React Application with 8base

This instruction is based on the [Oficial 8base Documentation](https://docs.8base.com/docs/quickstart)

### 1. Go to 8base.com and create an account

### 2. Once you log in, create a New Workspace in the upper selector

### 3. Clone the Repository:

```
https://github.com/cobuildlab/react-8base
```

### 4. Go to your 8base interface, Go to Settings and copy and paste your workspace URL in your .env files

### 5. Start coding
