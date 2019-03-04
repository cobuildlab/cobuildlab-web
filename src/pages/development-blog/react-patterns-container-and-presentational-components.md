---
title: React Patterns Presentational and Container Components
date: 2019-03-04T01:00:00+00:00
template: development-post
tags: 
image: "./media/blocks.jpg"
---

At this moment, according to Github, [React](https://reactjs.org/) is one of the most popular libraries for building web interfaces with javascript.

The core element of React is their **component** elements.


## React components:

A React Component is a piece of the interface that you want to control or a piece of behavior that you want to isolate. This piece can be visible as List, or a Form, or can also be invisible like a component to show a message or to handle Location functionality.

React develop its own extension of the javascript syntax called [JSX](https://reactjs.org/docs/introducing-jsx.html) to incorporate the Component syntax in regular javascript code.


According to the [React documentation](https://reactjs.org/docs/components-and-props.html):

>>>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.


The simplest example of a React Component can be:

```javascript

function Comment(props){
  return (
    <p className='some-class'><strong>{props.text}</strong></p>
  );
}

// And how it used within another react component:

function BlogPost(props){
  return (
      <div>
        <h1>Welcome</h1>
        <Comment text="Text on Bold" />
      </div>        
  );
}
```

Components on React are designed to favor Composition as a mechanism of Extension, so it's property and functionality are built having reusability in mind.


## Container and Presentational Components

Starting with React is not difficult, but once you start developing an application with any tool, several questions start to arise. In React for example, as everything is a component, then we start wondering:

- Where to put my data?
- How do I manage state?
- How and Where I communicate with the server?
- How to communicate changes between my components?


First of all, the most used architecture to develop a React application in terms of responsibilities is [Flux](https://cobuildlab.com/development-blog/single-way-communication-architecture-pattern-for-frontend-applications/), following this we know that we will have: View, Stores, and Actions. So:

- Where to put my data? **Store**
- How do I manage state? **Store**
- How and Where I communicate with the server? **Actions**
- How to communicate changes between my components? **???**

Among others, a common problem by using React Components is which components are gonna **subscribe** to the Stores? All? or Some? if some, which ones?

Luckily there are patterns to solve this type of problems in a glance. The Container and Presentational Components pattern help you separate the responsibilities on your components with easy to follow rules.


### A) Container Component:

The Container components are designed to hold high-level logic and subscriptions to the Stores, and usually, represent abstractions of high-level Views like Pages in a Web Application and Screens in a Mobile Application. Example:

```javascript
/**
*
*/
class HomePage extends React.Component{
  constructor (props) { }

  componentDidMount(){
    // Handle subscription logic
  }

  render (){
    return ( 
      <html>
        <body>
          <h1>title</h1>
          <span>{props.time}</span>
          <p>
            Some Text
          </p>
          <Tabs>
            <Tab>
              <h1>Comments</h1>
              <Comment text="" />
              <Comment text="" />
            </Tab>
          </Tabs>
        </body>
      </html>
    );
  }
}
```

So, a Container Component:

- Manage subscriptions to the Store or any Datasource
- Manage Routing
- Could be coupled to any other Component on the system
- Understands **what** to render but not **how** to render


### B) Presentational Component:

A presentational component basically holds logic only on **how to render** the data that is received in the component. It may occasionally hold an internal state, just to handle logic that only makes sense for it.


```javascript
import React from 'react';

/**
* 
*/
const Comment = (props){  
  const localDate = props.date.toLocal();
  return (
    <div>
      <p>{props.date}</p>
      <span>{props.text}</span>
    </div>
  );
}

/**
*
*/
const InputField = (props){  
  const localDate = props.date.toLocal();
  return (
    <div>
      <p>{props.label}</p>
      <input value={props.value} onChange={props.onChange}/>
    </div>
  );
}
```

So a Presentational Component:

- It understands how to present it's state or props to the User
- It does not holds [state](https://cobuildlab.com/development-blog/react-patterns-functional-components-vs-class-components/) unless this state is absolutely necessary for its normal behavior and only makes sense within the component itself
- Does not interact directly with other React Components that are not Presentational Components as Well
- Does not handle event handling logic, it delegates this to Container Components


## Conclusions:

The main benefit of using this patterns is that it forces you to write components that are highly reusable for the Presentational part of the application, and clearly, it defines responsibilities into different React parts of the application/


