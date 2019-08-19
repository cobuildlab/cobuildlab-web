---
title: "Introduction to React Hooks Part III: useReducer"
date: 2019-08-19T01:00:00+00:00
tags:
template: development-post
image: null
---

React Hooks introduced in version 16.8.0 is a set of features that enable [React Functional Components](https://cobuildlab.com/development-blog/react-patterns-functional-components-vs-class-components/) to manage stateful logic.

Continuing our previous post on [React Hooks](https://cobuildlab.com/development-blog/introduction-to-react-hooks-useState/) and the `useState` hook, today we will explain the `useReducer` hook.


## `useReducer` Hook

The `useReducer` hook is a more powerful alternative to the `useState` hook. Both have the same purpose: maintaining state values, the difference with the `useReducer` hook is that it uses a `reducer` function to mutate the state when any action or state change is "dispatched".


>An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. (If you’re familiar with Redux, you already know how this works.)

>useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

[Source:](https://reactjs.org/docs/hooks-reference.html#usereducer)


### Common use cases for the `useReducer` hook

- When you want to hold several values in the same state variable
- When your new state depends on your last state
- If you prefer the dispatch -> reducer like flow of [Redux](https://react-redux.js.org/)


### `useReducer` API:

The `useReducer` function accepts 3 parameters:

1) The function to be executed after a `dispatch` is called. This function will receive the previous state and the action information and should return the new state: `(state, action) => newState`  
2) The initial value for the state, or `initialState`
3) A function to initialize the state, this function will receive the second argument as parameter, and should return the `initialState`

And returns an array with 2 values:

1) The `currentState` of the component
2) A `dispatch` function

## Example: 

```javascript 1.8
import React, {useReducer} from 'react';

function init(initialCount) {
  return {count: initialCount};
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

function Counter({initialCount}) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>

        Reset
      </button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}
``` 

## Example

```javascript 1.8
import React, {useReducer} from 'react';

function MouseTracker() {  
  const [state, dispatch] = useReducer((prevState, action) => {
    return {...action};
  }, {x:0,y:0}, (initState)=> initState);
  
  const logMousePosition = e => {
    dispatch({
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
      <p>x: {state.x}</p>
      <p>y: {state.y}</p>
      </div>
    </div>
  )
}
```

## [Bailing out a dispatch](https://reactjs.org/docs/hooks-reference.html#bailing-out-of-a-dispatch)

>If you return the same value from a Reducer Hook as the current state, React will bail out without rendering the children or firing effects. (React uses the Object.is comparison algorithm.)

>Note that React may still need to render that specific component again before bailing out. That shouldn’t be a concern because React won’t unnecessarily go “deeper” into the tree. If you’re doing expensive calculations while rendering, you can optimize them with useMemo.


Source: (https://reactjs.org/docs/hooks-intro.html)[https://reactjs.org/docs/hooks-intro.html] 

