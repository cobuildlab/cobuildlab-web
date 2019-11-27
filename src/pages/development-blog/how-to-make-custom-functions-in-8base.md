---
title: How to Do Custom Functions
date: 2019-26-16T01:00:00+00:00
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

On this occasion we will see that create a Webhooks type functions

A webhook allows you to call Custom Functions as regular RESTful endpoints. They can be very useful if you integrate with a 3rd party service that posts data back to your app using a specified URL. For example, enabling a payment processing service such as Stripe or Coinbase Commerce to notify your app of a successful payment by calling X URL.

<https://docs.8base.com/8base-console/custom-functions/webhooks>

### 1. Install the 8base CLI and Authenticate

    npm install -g 8base-cli
    8base login

### 2. Creating the project and custom functions

    8base init . --functions=resolver:myCustomResolver

### 3. Installing dependencies and configuring the workspace

    npm install
    8base configure

### 3. Webhooks function

```javascript
    /**
 * Import any dependencies. All deployed functions can utilize any dependency
 * that was declared in the projects package.json file.
 */
import gql from 'graphql-tag';

/**
 * Custom modules can get imported (and shared between functions)
 * by importing/requiring them using relative paths.
 */
import { sendMail, GMAIL_USER } from '../../mailer';

/**
 * Inside the webhook, API calls can be executed against your
 * workspace and 3rd party API's.
 */
const INVOICE_MUTATION = gql`
  mutation Invoice($id: ID!, $state: STRING!) {
    invoiceUpdate(data: {
        id: $id
        state: $state
    }) {
      id
      state
      customer {
          name
          email
      }
    }
  }
`;

/**
 * Webhook response objects require a statusCode attribute to be specified.
 * A response body can get specified as a stringified JSON object and any
 * custom headers set.
 */
const responseBuilder = (code=200, message=undefined, headers={}) => ({
  body: JSON.stringify({ message }),
  statusCode: code,
  headers
})

/**
 * The webhook function's handler can be synchronous or asynchronous and
 * is always passed the event, and context (ctx) arguments.
 */
module.exports = async (event, ctx) => {
  let response

  try {
    /**
     * Access posted data on the event object:
     * {
     *   "invoiceId": <invoiceID>,
     *   "chargeType": <chargeType>
     * }
     */
    response = await ctx.api.gqlRequest(INVOICE_MUTATION, {
        id: event.data.invoiceId
        state: event.data.chargeType
    })
  /* Handle errors for failed GraphQL mutation */
  } catch (e) {
    return responseBuilder(422, "Failed to update invoice")
  }

  try {
      /**
     * If the update was successful, send an email to the
     * app user notifying them.
     */
    const { invoiceUpdatenv: { customer } } = response

    /* Add email event to logs */
    console.log(`Sending email to ${customer.email}...`)

    /* Send email using imported module */
    await sendMail({
      from: GMAIL_USER,
      to: customer.email,
      subject: 'An update about your invoice',
      html: `
          Hi ${customer.name},
          You're invoice was just marked ${invoiceUpdate.state}
          Thanks!
      `
    })

  /* Handle error for failed email */
  } catch (e) {
    return responseBuilder(400, 'Failed to notify user')
  }

  /* Return final success response */
  return responseBuilder(200, 'Success')
};
```
