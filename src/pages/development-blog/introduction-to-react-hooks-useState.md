---
title: "Introduction to React Hooks: useState"
date: 2019-07-23T01:00:00+00:00
tags:
template: development-post
image: null
---

React Hooks introduced in version 16.8.0 is a set of features that enable [React Functional Components](https://cobuildlab.com/development-blog/react-patterns-functional-components-vs-class-components/) to manage stateful logic.

## Primarily with the goal of:

- Provide a out of the box mechanism to share and reuse behaviour between components. Currently solved now with HOCs
- Reduce verbosity on complex components
- Reduce the complexity of learning React by promoting the use of Functional bases Components instead of Class based components
 

## Hook Rules

- Hooks can only be used on React Functional Components
- Hooks can be composed: you can create your own Hooks using React Hooks
- Hooks should always be called in the same order inside a component
- Hooks only persist state within the same component

## Hooks provided by React:

- `useState`: To handle state variables
- `useEffect`: To handle lifecycle actions. ex: Mount and Unmount of components on the DOM
- `useContext`: To subscribe to contexts
- `useReducer`:  similar to `useState` accepts also a reducer function
- `useCallback`: create a Memoized function, that is only called if a dependency changes
- `useMemo`: creates a Memoized value, that only is calculated if the dependencies changes
- `useRef`:  create a React mutable ref object
- `useImperativeHandle`: Customize the `ref` value passed to parents that use the `useRef` Hook
- `useLayoutEffect`: The same effect that `useEffect` but synchronously 
- `useDebugValue`: To display variables on Rect Dev Tools


## `useState` Hook

The `useState` hook is a function that is used to create a state that can be persisted trough the renders of a React Functional Component.

The `useState` function accepts 1 parameter, that can be 1 of 2:

1) The initial value to be returned for the initial render
2) A function to be execute when the initial value is required

and returns 2 values: 

1) The current value of the state
2) A function to mutate the state, that receives the new state, or a function that receive the previous state and should return the new state.

```javascript 1.8
import React from 'react';

const MyComponent = (props) => {
  const [step, setStep] = React.useState(0);
};
``` 

## Example

```javascript 1.8
const initialCandies = ['snickers', 'skittles', 'twix', 'milky way'];

function CandyDispenser() {  
  const [candies, setCandies] = React.useState(initialCandies)
  const dispense = candy => {
    setCandies(allCandies => allCandies.filter(c => c !== candy))
  }
  return (
    <div>
      <h1>Candy Dispenser</h1>
      <div>
        <div>Available Candy</div>
        {candies.length === 0 ? (
          <button onClick={() => setCandies(initialCandies)}>refill</button>
        ) : (
          <ul>
            {candies.map(candy => (
              <li key={candy}>
                <button onClick={() => dispense(candy)}>grab</button> {candy}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
```
Source: (https://kentcdodds.com/blog/usememo-and-usecallback)[https://kentcdodds.com/blog/usememo-and-usecallback]


Source: (https://reactjs.org/docs/hooks-intro.html)[https://reactjs.org/docs/hooks-intro.html] 

