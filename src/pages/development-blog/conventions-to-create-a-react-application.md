---
title: Conventions to create a ReactJS Web Application
date: 2019-05-01T01:00:00+00:00
tags: 
template: development-post
permalink: /conventions-to-create-a-react-web-or-mobile-application/
image: null
---

This document aims to reduce the friction between patterns and ways of doing common tasks during the development of a React Web or Mobile Application.

This document is heavily based on the Convention proposed by [Airbnb](https://github.com/airbnb/javascript), [StandardJs](https://standardjs.com/) and our own experience for the last 10 years.

Here, we explain the problem, choose a convetion, and explain the reasons:

## 1) General Best Practices

- Always prefer constants over variables

*PREFER THIS:*

```javascript
export const updateStateFromObject = (state, object) => {
  const newState = {};
  Object.keys(state).forEach((key) => {
    const newValue = object[key];
    const oldValue = state[key];
    if (newValue === undefined) {
      newState[key] = oldValue;
      return;
    }
    newState[key] = newValue;
  }
}
...
```

*AND NOT THIS:*

```javascript
export const updateStateFromObject = (state, object) => {
  let newState = {};
  Object.keys(state).forEach((key) => {
    let newValue = object[key];
    let oldValue = state[key];
    if (newValue === undefined) {
      newState[key] = oldValue;
      return;
    }
    newState[key] = newValue;
  }
}
...
```

### Justification:

* Code redeability, constants values by definition cannot change, making the code easier to read and to debug.
* Efficciency: Many Runtimes promise faster access to constant values than to variables values.


- Use constructor to initialize state instead of `static` members:

*PREFER THIS:*

```javascript
export default class SwiperView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            isLoaded: false,
            latitude: 0,
            longitude: 0,
            numPage: 0,
            urlPage: '',
        };
        this.cardIndex = 0;
    }
...
```

*AND NOT THIS:*

```javascript
export default class SwiperView extends Component {
    static getInitialState() {
        return {
            cards: [],
            isLoaded: false,
            latitude: 0,
            longitude: 0,
            numPage: 0,
            urlPage: '',
        }
    }

    constructor(props) {
        super(props);
        this.state = SwiperView.getInitialState();
        this.cardIndex = 0;
    }
...
```

### Justification:

* Code redeability
* Consistency: Initialization should always be in the constructor


<TODO>
## 2) Application Starter
<TODO>
## 3) Architecture
<TODO>
## 4) File Structure
- React components must be the only and default export of a file
<TODO>
## 5) Naming Conventions

Naming is importarnt for quickly understand the purpose of a element: Classes, constants, variables or methods.

### Things to consider:
- As a general Rule for React Components file names, use <Entity Name><Purpose><Object Type>. Example: `UserCreateView.js`, `TaskEditView.js`, `CompanyMembersListComponent.js`
- As a general Rule for no React Components file names, use <entity-name>-<object-type>. Example: `user-actions.js`, `user-store.js`, `company-permissions.js`
- Don't use short or ambiguos names like: `q`, `search`, `getById`, `Member`, be specific
- A filename must always be exact to its default export
- Acronyms and initialisms should always be all uppercased, or all lowercased. [Reference](https://github.com/airbnb/javascript#naming--Acronyms-and-Initialisms)

### React components

React components are divided in [Views and Components](https://cobuildlab.com/development-blog/react-patterns-container-and-presentational-components/)

- All React components, both [functional or class based](https://cobuildlab.com/development-blog/react-patterns-functional-components-vs-class-components/) must be name PascalCase. 

Example: `LoginView`, `CompanyMembersView`

- Container components are suffixed with the word `View` and presentational components can optinally be suffixed with the word `Component`. 

Example: `MyProfileView`, `ListItemComponent`

### Classes 

- Classes should always be PascalCase. 

Example: `AdminUser`, `Alliance`, `Company`

### Methods, Functions and Instances

- Methods, functions and instances must be always camelCase. 

Example: `onSubmit`, `activeUser`

### Variables and Constans

- Variables must be always be on camelCase.

Example: `user`, `someCalculation`

- Module level Constants must always be Uppercase with underscores for readability.

Example: `API_KEY`, `INITIAL_STATUS`, `PI`

- Funtion level constants adopt the rules of Variables.

### Files

- React components should live on a File with the same name of the Component with `.js` extensions

Example: `MyProfileView`, `ListItemComponent`

- Any other file must be named lowercase with hypens for clarity

Example: `user-actions.js`, `user-store.js`, `company-permissions.js`

### Private members

- Private names of a module adopt the same previous rules of naming. In addition to this an unserscore `_` can be prefixed to explicitly indicate its condition.

Example: `_extractKeys`, `_compute`

### Events name

- Event names literals and functions callbacks to events must be named on camelCase prefixed by the word `on`

Example: `onClick`, `onLoad`, `onListMembers`


## 6) Linting and Code Formatting

## 7) Github templates

## 8) State Management
<TODO>
## 9) Props validation
<TODO>
## 10) Css and Theme
<TODO>
## 11) HOC vs Composition
<TODO>
## 12) API communication
<TODO>
## 13) Notifications
<TODO>
## 14) Routing
<TODO>
## 15) State intialization
## 16) Data Validation
## 17) Testing
## 18) Testing
<TODO>