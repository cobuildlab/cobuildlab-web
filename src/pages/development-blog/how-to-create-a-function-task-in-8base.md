---
title: How to Create a Function Triggers in 8base
date: 2019-27-16T01:00:00+00:00
tags:
template: development-post
---

## Custom Functions

8base has custom features that allow you to extend your GraphQL API to connect with third party apis

### 8base has 4 types of custom functions

**Resolvers:** For extending your GraphQL API
**Webhooks:** For RESTful endpoints (GET, POST, DELETE, etc...)
**Triggers:** For functions requiring event-based execution
**Tasks:** For invocable and scheduled (cron) functions

On this occasion we will see that create a Task type functions

A task is a type of function that can be invoked directly from other functions or executed on a specified interval. This allows for cron job like execution of your custom functions and is great for re-occurring tasks.

<https://docs.8base.com/8base-console/custom-functions/tasks>

### 1. Install the 8base CLI and Authenticate

    npm install -g 8base-cli
    8base login

### 2. Creating the project and custom functions

    8base init . --functions=task:myCustomTask

### 3. Installing dependencies and configuring the workspace

    npm install
    8base configure
