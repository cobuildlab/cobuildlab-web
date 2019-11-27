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

On this occasion we will see that create a Triggers type functions

A trigger is a type of function that runs in response to a data mutation event (i.e, while creating, updating or deleting an object). This allows for important actions to run as callbacks to your data commits, without cluttering up client apps with web requests.

<https://docs.8base.com/8base-console/custom-functions/triggers>

### 1. Install the 8base CLI and Authenticate

    npm install -g 8base-cli
    8base login

### 2. Creating the project and custom functions

    8base init . --functions=trigger:myCustomResolver

### 3. Installing dependencies and configuring the workspace

    npm install
    8base configure

### trigger.before

This type of trigger is executed before the data is written to the database. It allows you to validate or modify the data before saving it in the database.

```javascript
module.exports = event => {
  const { password, passwordConfirm } = event.data

  if (password != passwordConfirm) {
    // Throwing an error will cancel the operation and data will not be inserted
    throw new Error("Passwords don't match")
  }

  // You can modify what goes into the database
  return {
    data: {
      ...event.data,
      status: 'confirmed',
    },
  }
}
```

### trigger.after

This type of trigger is executed after the data has been successfully saved in the database. It can be used to do any post-processing or to enrich the returned data. For example, after creating a new calendar event you might want to send an email notification alerting users they were invited.

```javascript
const sender = require('email-service')

module.exports = async event => {
  const { invitees } = event.data

  let sent = false
  try {
    await sender.sendInvites(invitees)
    sent = true
  } catch (e) {
    console.error('Error sending invites: ', e)
  }

  // You can modify the returned response
  return {
    data: {
      ...event.data,
      sent,
    },
  }
}
```

### Trigger Response

The value returned by a trigger is allowed two properties: data and errors

```javascript
return {
  data: {
    ...event.data,
  },
  errors: [
    {
      message: 'Error message',
      code: 'error_code',
    },
  ],
}
```
