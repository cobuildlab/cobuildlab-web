---
title: "Introduction to React Hooks: useEffect"
date: 2019-08-05T01:00:00+00:00
tags:
template: development-post
image: null
---

React Hooks introduced in version 16.8.0 is a set of features that enable [React Functional Components](https://cobuildlab.com/development-blog/react-patterns-functional-components-vs-class-components/) to manage stateful logic.

Continuing our previous post on [React Hooks](https://cobuildlab.com/development-blog/introduction-to-react-hooks-useState/) and the `useState` hook, today we will explain the `useEffect` hook.


## `useEffect` Hook

The `useEffect` hook is a React hook that is used to indicate to the React render engine to perform certain actions or `effects` in the lifecycle of a Component.

The lifecycle of a Functional component is composed by 2 states: Render and not Rendered. The `useEffect` hook allows us to execute functions after the component has been rendered, and before it's gonna be removed or unmounted.

Every time a state variable of the component is changed, a re-render of the component is triggered, by doing so, also triggering any functions specified on any `useEffect` hook. Sometimes this is not the desired behaviour, so, the `useEffect` hook allows to specified a set of dependencies for this behaviour to be performed. 

This dependencies instruct the hook to execute their functions only if any of the dependencies change. A common practice is to pass a empty set of dependencies if you want the functions to be executed only the first time it renders and the last time is unmounted.


[According to React Docs on `useEffect`:](https://reactjs.org/docs/hooks-reference.html#useeffect)

```text
Accepts a function that contains imperative, possibly effectful code.

Mutations, subscriptions, timers, logging, and other side effects are not allowed inside the main body of a function component (referred to as React’s render phase). Doing so will lead to confusing bugs and inconsistencies in the UI.

Instead, use useEffect. The function passed to useEffect will run after the render is committed to the screen. Think of effects as an escape hatch from React’s purely functional world into the imperative world.

```  

### Common use cases for the `useEffect` hook

- Subscription to state manager or stores
- Changes to the DOM
- Timers or logging


### `useEffect` API:

The `useEffect` function accepts 2 parameters:

1) The function to be executed after the component has been rendered. Optionally this function can return a function to be executed after the component has been unmounted. 
2) A list of dependencies. This is optional

And it doesnt return any value.

More to Read: [Understanding the useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)

```javascript 1.8
import React from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      console.log(`You clicked ${count} times`);
    }, 3000);
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
``` 

## Example

```javascript 1.8

function MouseTracker() {  
  const [mousePosition, setMousePosition] = React.useState({x:0,y:0});
  
  const logMousePosition = e => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  
  useEffect(() => {
      window.addEventListener("mousemove", logMousePosition);
      console.log("Created");
      return () => {
        console.log("Cleaned up");
        window.removeEventListener("mousemove", logMousePosition);
      };
  }, []);
  
  return (
    <div>
      <h1>Mouse Position</h1>
      <div>
      <p>x: {mousePosition.x}</p>
      <p>y: {mousePosition.y}</p>
      </div>
    </div>
  )
}
```

One More Example:

```javascript 1.8
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [complexCounter, setComplexCounter] = useState({
    counter: 0,
    lastTimeClicked: new Date()
  });
  const [simpleCounter, setSimpleCounter] = useState(0);
  const [mousePosition, setMousePosition] = React.useState({x:0,y:0});

  const logMousePosition = e => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    console.log("AFTER RENDER:complex:", complexCounter.counter);
    return () => {
      console.log("BEFORE UNMOUNT:complex:", complexCounter.counter);
    }
  }, [complexCounter]);

  useEffect(() => {
    console.log("AFTER RENDER:simple:", simpleCounter);
    return () => {
      console.log("BEFORE UNMOUNT:simple", simpleCounter);
    }
  }, [simpleCounter]);

  useEffect(() => {
    document.title = `it has benn ${simpleCounter} clicks!`;
  });

  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);
    console.log("Created");
    return () => {
      console.log("Cleaned up");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          The current mouse position is: X: {mousePosition.x} and Y: {mousePosition.y}
        </p>
        <p>
          The current value for the counter is {complexCounter.counter}
        </p>
        <p>
          Last time updated: {String(complexCounter.lastTimeClicked)}
        </p>
        <a
          onClick={() => {
            setComplexCounter({counter: complexCounter.counter + 1, lastTimeClicked: new Date()})
          }}
          // onClick={()=> setCounter(prevCounter => prevCounter + 1)}
          className="App-link"
          href="#"
          rel="noopener noreferrer"
        >
          Increase Counter
        </a>


        <p>
          The current value for the Simple counter is {simpleCounter}
        </p>
        <a
          onClick={() => {
            setSimpleCounter(simpleCounter + 1);
          }}
          // onClick={()=> setCounter(prevCounter => prevCounter + 1)}
          className="App-link"
          href="#"
          rel="noopener noreferrer"
        >
          Increase Simple Counter
        </a>


      </header>
    </div>
  );
}

export default App;



```

Source: (https://reactjs.org/docs/hooks-intro.html)[https://reactjs.org/docs/hooks-intro.html] 

