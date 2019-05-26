---
title: Conventions to create a React or React Native Application
date: 2019-05-26T01:00:00+00:00
tags: 
template: development-post
permalink: /conventions-to-create-a-react-web-or-mobile-application/
image: null
---

This document aims to reduce the friction between patterns and ways of doing common tasks during the development of a React Web or React Native Mobile Application.

This document is heavily based on the Convention proposed by [Airbnb](https://github.com/airbnb/javascript), [StandardJs](https://standardjs.com/) and our own experience developing front end javascript applications since 2008 and React Applications since late 2016.

Here, we explain the problem, choose a convention, and explain the reasons:

# 1) General Best Practices

## **1.1) Always prefer constants over variables**

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

#### Justification:

* Code readability, constants values by definition cannot change, making the code easier to read and to debug.
* Efficiency: Many Runtimes promise faster access to constant values than to variables values.


## **1.2) Use constructor to initialize state instead of `static` members**

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

* Code readability
* Consistency: Initialization should always be in the constructor

## **1.3) Components should not include styling props**

Avoid using `style` or `className` for Components in Views to reduce visual noise, unless it is completely necessary.

Rely on abstractions for defining styles for your components.

See: [Proxy Pattern](https://cobuildlab.com/development-blog/react-patterns-proxy-pattern-for-components/)



*PREFER THIS:*

```javascript
const NormalText = ({children}) => (
    <p className='blue-text'>
        {children}
    </p>
);

const H1 = ({children, icon}) => (
    <div className='inline-block'>
        <h1 className='header-note'>
            {children}
            <span class='icon-header-note'>
                <img src={icon} />
            </span> 
        </h1>
    </div>
);

export class View extends Component {
    render(){
        <section>
            <H1 icon={plus}>Note Header</H1>
            <NormalText>Note Text</NormalText>
        </section>
    }
}
...
```

*AND NOT THIS:*

```javascript
export class View extends Component {
    render(){
        <section>
            <div className='inline-block'>
                <h1 className='header-note'>
                    Note Header
                    <span class='icon-header-note'>
                        <img src={plus} />
                    </span> 
                </h1>
            </div>
        <p className='blue-text'>
            Note Text
        </p>
        </section>
    }
}
...
```
### Justification:

* Reduce Visual Noice
* Increase component reusability
* Increase speed of development avoinding design decisions
* Maintenalbility by isolation of the styling options

## **1.4) Return Early pattern for methods and functions instead of conditionals**


Enforce  **Return Early** pattern in functions and methods, including the render method of React components.

Return early pattern forces you to first consider exceptional situations or error conditions in your functions like validations and variables or input inconsistencies on the first lines of a function or method.


*PREFER THIS:*

```javascript
const isValidString = (text, allowEmpty = false) => (
	if(text === null) 
		return false;
	if(text === undefined) 
		return false;
	if(text === '' && allowEmpty === false) 
		return false;
	return true;
);

const isDivisibleBy = (value, divisor) => (
	if(value === 0) 
		return true;
	if(divisor === 0) 
		return false;
	if(value === divisor) 
		return true;
	return value % divisor === 0;
);

const TableView = ({children, loading}) => {
	if(loading)
		return <Loading size={10} />;

	//... logic
	return (
	    <div className='inline-block'>
	        <h1 className='header-note'>
	            {children}
	            <span class='icon-header-note'>
	                <img src={icon} />
	            </span> 
	        </h1>
	    </div>
	);
}
```

*AND NOT THIS:*

```javascript
const isValidString = (text, allowEmpty = false) => (
	if(text !== null){
		if(text !== undefined){
			if(allowEmpty === false){
				if (text === ''){
					return false;
				}else{
					return true
				}					
			}
			else...
		}
	}else{
		return false;
	}
);

const TableView = ({children, loading}) => {
	//	... logic
	return (
		{loading ? <Loading size={10}> :
	    <div className='inline-block'>
	        <h1 className='header-note'>
	            {children}
	            <span class='icon-header-note'>
	                <img src={icon} />
	            </span> 
	        </h1>
	    </div>}
	);
}
```
### Justification:

* Reduce Visual Noice
* Reduce complexity of conditionals
* Increase readibility by excluding error and edge conditions early on the code and letting focusing on the complex part of the function


## **1.5) **

Reduce visual noice by proxy components using the [Proxy Pattern]([https://cobuildlab.com/development-blog/react-patterns-proxy-pattern-for-components/](https://cobuildlab.com/development-blog/react-patterns-proxy-pattern-for-components/))


## **1.5) Pure functions**
## **1.4) util functions over methods**

# 2) File Structure

Organizing files are one of the most important conventions, especially for large codebases and large teams, specially remote teams.

We will only consider the structure under the `src` folder, the project structure depends of other factors like the platform, linting tools, enviroment files, version control tools, react version, etc.

We use the terms **App Specific** to resources that can be used across the entire app, and **Module Specific** to resources that can only be used inside a module folder.

Based on our experience for the last years working with React, we propose this file Structure with examples:

```
src/ 
└───assets/
│   └───images/
|	|	└───logo.png
|	|	└───background_main.jpg
|	|	└───...
└───modules/
│   └───login/
|	│   └───components/
|	|	|	└───LoginForm.js
|	|	└───LoginView.js
|	|	└───login-actions.js
|	|	└───login-models.js
|	|	└───login-permissions.js
|	|	└───login-queries.js
|	|	└───login-store.js
|	|	└───...
│   └───management/						// Nested modules
|	│   └───school/
| 	|	│   └───components/
|	|	|	|	└───DashboardGraph.js
|	|	|	|	└───NavitationBar.js
|	|	|	└───SchoolDetailView.js
|	|	|	└───SchoolUpdateView.js
|	|	|	└───SchoolCreateView.js
|	|	|	└───school-actions.js
|	|	|	└───school-utils.js
|	|	|	└───school-permissions.js
|	|	|	└───school-queries.js
|	|	|	└───school-store.js
|	|	|	└───...
|	│   └───another-module/
| 	|	│   └───components/
|	|	|	|	└───...
|	|	|	└───AnotherView.js
|	|	|	└───another-store.js
|	|	|	└───...
└───shared/
│   └───components/
│	|   └───buttons/
│	|   └───text/
│	|   └───forms/
|   │   SomeComponent.js
|   │   AnotherUnclassifiedComponent.js
│   └───constants/
│       │   user-types.json
│   └───typings/
│       │   ...
└───graphql/							// Others App specific folders
|	│   types.js
│   string-utils.json
│   validation-utils.json
│   index.js
│   App.js
│   index.css
 ```

## *assets* folder
App Specific folder that contains images files like png, svg, jpg, etc

## *modules* folder
Main folder to hold the the Module Specific folders

## *shared* folder
App Specific folder to hold any asset that is not an image and that it should be shared across modules.

Think about this folder as any potential code that could be put in a node package and be distributed as a library.

## *components* folder
React componets that can be App specific under `shared/components/` or module specific under: `modules/<module-name>/components/`

## *\*-actions* files
Module specific files that holds Actions of the module. (See Architecture)

## *\*-models* files
Module specific files that holds constants and Model Objects or Classes.

## *\*-store* files
Module specific files that that holds the store components. (See Architecture)

## *\*-permissions* files
Module specific files that that holds functions related to permissions.

## *\*-utils* files
Functions or Classes that can be App specific under `shared/` or module specific under: `modules/<module-name>/`

## *\*.css* files
As of this conventions the project should only have one `index.css` file, that holds general purpose styles like: Text, body styles, etc.

Component specific styles should be handled using [Styled Components]([https://www.styled-components.com/](https://www.styled-components.com/))



# 3) Architecture
<TODO:>
# 4) Application Starter
<TODO:>
# 5) Naming Conventions

Naming is important for quickly understand the purpose of an element: Classes, constants, variables or methods.

## General Rules:
- For React Components file names, use <Entity Name><Purpose><Object Type>. Example: `UserCreateView.js`, `TaskEditView.js`, `CompanyMembersListComponent.js`
- For non React Components file names, use <entity-name>-<object-type>. Example: `user-actions.js`, `user-store.js`, `company-permissions.js`
- For Module names follow file name convetions separating words using the hyppen `-`
- Don't use short or ambiguous names like: `q`, `search`, `getById`, `Member`, be specific
- A filename must always be exact to its default export
- Acronyms and initialisms should always be all uppercase or all lowercase. [Reference](https://github.com/airbnb/javascript#naming--Acronyms-and-Initialisms)

## React components

React components are divided into [Views and Components](https://cobuildlab.com/development-blog/react-patterns-container-and-presentational-components/)

- All React components, both [functional or class based](https://cobuildlab.com/development-blog/react-patterns-functional-components-vs-class-components/) must be name PascalCase. 

Example: `LoginView`, `CompanyMembersView`

- Container components are suffixed with the word `View` and presentational components can optionally be suffixed with the word `Component`. 

Example: `MyProfileView`, `ListItemComponent`

## Classes 

- Classes should always be PascalCase. 

Example: `AdminUser`, `Alliance`, `Company`

## Methods, Functions, and Instances

- Methods, functions, and instances must be always camelCase. 
- Events should always start with `on` prefix
- Non events should start with a verb

Example: `onSubmit`, `activateUser`

## Variables and Constansts

- Variables must always be on camelCase.

Example: `user`, `someCalculation`

- Module level Constants must always be Uppercase with underscores for readability.

Example: `API_KEY`, `INITIAL_STATUS`, `PI`

- Function level constants adopt the rules of Variables.

## Files

- React components should live on a File with the same name of the Component with `.js` extensions

Example: `MyProfileView`, `ListItemComponent`

- Any other file must be named lowercase with hyphens for clarity

Example: `user-actions.js`, `user-store.js`, `company-permissions.js`

## Private members

- Private names of a module adopt the same previous rules of naming. In addition to this, an underscore `_` can be prefixed to explicitly indicate its condition.

Example: `_extractKeys`, `_compute`

## Events name

- Event names literals and functions callbacks to events must be named on camelCase prefixed by the word `on`

Example: `onClick`, `onLoad`, `onListMembers`


# 6) Linting and Code Formatting

# 7) Github templates

# 8) State Management
<TODO>
# 9) Props validation
<TODO>
# 10) Css and Theme
<TODO>
# 11) HOC vs Composition
<TODO>
# 12) API communication
<TODO>
# 13) Notifications
<TODO>
# 14) Routing
<TODO>
# 15) State intialization
# 16) Data Validation
# 17) Testing
# 18) Testing
<TODO>
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTE4MzY2OTIwNiwyOTA4NTQ4MjQsMjE0Mz
k4MjQxNSw1NTgyMTk5OTEsOTMxMzk0MTM5XX0=
-->