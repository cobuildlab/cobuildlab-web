---
title: React Patterns Functional Components vs Class Components
date: 2019-01-21T01:00:00+00:00
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

function BoldParagraph(props){
  return (
    <p className='some-class'><strong>{props.text}</strong></p>
  );
}

// And how it used within another react component:

function WelcomePage(props){
  return (
      <h1>Welcome</h1>
      <BoldParagraph text="Text on Bold"/>
  );
}
```

Components on React are designed to favor Composition as a mechanism of Extension, so it's property and functionality are built having reusability in mind.


## Class Components and Functional Components

React provide 2 ways to declare or create a Component:

### A) Functional Component:

Is a simple function definition that receives a single argument, often named `props` for convention, and return a valid React Component or a valid JSX Html (also called React Component):

```javascript

function Clock(props) { // single props argument
  const localDate = props.date.toLocal();
  return ( // Valid JSX React Component
    <div>
      <p>{localDate}</p>
      <span>{props.time}</span>
    </div>
  );
}

```

### B) Class Component:

A Class Component is a ES6 class that has a render method and extends the `Component` Class from the React library.

Note: this component is equivalent to the presented in the Functional Component example


```javascript
import React from 'react';

class Clock extends React.Component{
  function render() { // single props argument
    const localDate = props.date.toLocal();
    return ( // Valid JSX React Component
      <div>
        <p>{props.date}</p>
        <span>{props.time}</span>
      </div>
    );
  }
}

```

## Class Components vs Functional Components


Some developers prefer using one above the other, some prefer a mix between them, but the truth is that it is possible to achieve the same results using Class or Functional components. Our opinion is that a mix of then is the best approach to build a complete an extensible application.


The main difference between a Functional Component and a Class Component is the ability of the last one to hold a state and the functionality that this provides. Also, a class component has direct access to the lifecycles methods of a Component.


### State Management

State means the local value of all the properties within a Class or a Component (whether is a React Component or no). It is useful to handle information on the component that is not relevant to the outside world.


Common scenarios of state management are: Values to store information about show or hide pieces of the component, internal or intermedium values in the component that are not relevant outside, lists of value for a Select type field, etc.


A Class Component offers a `setState` method to update the internal state, forcing a re-rendering of the component.


### Lifecycle Methods

React provides different methods on a Class Component to leverage the power to the user to do specific tasks. Some of these methods are:


#### constructor(props)

Called by React when the component its gonna be used before rendering. Usefull to initialize values and the initial state of the component.

#### componentDidMount

Called after the component is rendered for the first time. Useful for subscriptions.

#### componentWillUnmount

Called right before the component it's gonna be removed from the DOM. Useful for remove subscriptions and cleaning.


NOTE: these methods can be used also from Functional Components, but how to do it takes a little more understanding of Javascript core features


## Functional vs Class components: A simple guide

This is a simple guide of when to use one or the other:

1) Functional Components usually keeps your code cleaner and maximizes reusability and composition because it forces you to minimize the logic on a component
2) Class Components enable the use of state which makes easier to control a Component internal state
3) Use a Functional Component if the purpose of your component is just present information and response to events
4) Use a Class Component is your component is gonna use helper values and variables that are irrelevant outside its scope
5) Use Class Components if you handle subscriptions, meaning that your UI needs to respond to events in different parts of the application.
6) One useful way to choose between Class and Functional Components is to use the pattern: `Containers vs Components` Containers can also be referred to `Views` or `Screens`. In this pattern, Containers components handle data state and behavior and Components components or just Components deal only with presentation logic.


