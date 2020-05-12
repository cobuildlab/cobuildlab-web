---
title: Conventions to create a React or React Native Application
date: 2020-12-31T01:00:00+00:00
tags: 
template: development-post
permalink: /conventions-to-create-a-react-web-or-mobile-application/
image: null
---

This document aims to reduce the friction between patterns and ways of doing common tasks during the development of a React Web or React Native Mobile Application.

This document is heavily based on the Convention proposed by [Airbnb](https://github.com/airbnb/javascript), [StandardJs](https://standardjs.com/) and our own experience developing front end javascript applications since 2008 and React Applications since late 2016.

Here, we explain the problem, choose a convention, and explain the reasons:

# 1) General Best Practices for Code Style

## **1.1)<Placeholder>**

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

* Reduce Visual Noise
* Increase component readability
* Increase speed of development avoiding design decisions
* Maintainability by isolation of the styling options

### **1.4) Separate LAYOUT Components from UI Components**

Avoid mixing in components layout properties with look and feel properties unless is strictly necessary.

*PREFER THIS:*

```javascript 1.8
const View = () => {
    return (<div className='float-right'>
              <OptionButton text='Create' onClick='' icon='new' />
          </div>);
};
```

*AND NOT THIS:*
```javascript 1.8
const View = () => {
    return (
          <Button onClick={this.goToImportDeals} style={{ position: 'absolute', right: '0px' }}>
                Import Deals
          </Button>);
};
```

### **1.5) Keep complex rendering logic on the render method with local variables **

Avoid clutter your rendering markup with complex conditional logic.

const employee = job.employee && job.employee.firstName ? `${job.employee.first_name} ${job.employee.last_name}` : t('JOBS.notAsigned');

**Complex manipulation**

*PREFER THIS:*

```javascript 1.8
const View = () => {
    const employee = job.employee && job.employee.firstName ? `${job.employee.first_name} ${job.employee.last_name}` : t('JOBS.notAsigned');
    return (<Text>
              {employee}
          </Text>);
};
```

*AND NOT THIS:*
```javascript 1.8
const View = () => {
    return (<Text>
              {job.employee && job.employee.firstName ? `${job.employee.first_name} ${job.employee.last_name}` : t('JOBS.notAsigned')}
          </Text>);
};
```


**Complex conditional rendering**

*PREFER THIS:*

```javascript 1.8
const View = () => {
    let content = "No rows to show!";
    
    if(condition){
        // complex calculations
        content = items.map((item, i ) => <Job key={i}></Job>);
    }
    return (<Content>
              {content}
          </Content>);
};
```

*AND NOT THIS:*
```javascript 1.8
const View = () => {

    return (<Content>
              {condition ? {
                // COMPLEX 
                // MULTIPLE
                // CALCULATIONS
                // AND LOGIC
              } : `No rows to show`}
          </Content>);
};
```

### Justification:

* Increase component reusability 
* Increase component  portability


## **1.6) Return Early pattern for methods and functions instead of conditionals**


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


## **1.7) Enforce the difference Between Presentational Components and Container Components (Views) **

Reference: [React Patterns Presentational and Container Components]([https://cobuildlab.com/development-blog/react-patterns-container-and-presentational-components/](https://cobuildlab.com/development-blog/react-patterns-container-and-presentational-components/))

React components can be clasified in 2 major groups depending on how they fit in the Architecture of your application, and how they interact with the App and the User:

1) **Presentational Components** or just Components are responsible present or render the user interface, they interface the communication between the User and the Application State only through the **Container Components**.
2) **Container Componets** or Views are responsible of "connecting" the application state with the User Interface by listening to changes to the Application State and rendering **Presentational Components**. The way they interact with the Application State or stores depends of the technology used (Redux, Flux, MobX, Context API)


| Feature |   Presentational Components (Components) |  Container Components (Views) |
|---|---|---|
| **External Communication** |  Thet are not connected directly to the Application State. Their communication in handled via props | They subscribe and react to the Application State and its changes  |
| **Internal State** |Normally relies on the Store connection|Handle internally with Component level state or Hooks|
| **Renders**| Mostly understands **WHAT** to render   | It understands **WHAT** and **HOW** to render  |


## **1.8) Avoid module exporting from index.js**

**NOTE: This rule is not applicable to libraries shared node packages, just for Application Development**

Avoid module exports from index.js in the codebase. For some developers this is a common practice to avoid long paths of imports, example:

Having these components:

```shell script
modules/A/View1.js
modules/A/View2.js
modules/B/View3.js
```

To use `View1.js` and `View2.js` in `View3.js`

*PREFER THIS:*

`modules/B/View3.js`
```jsx harmony
import {View1} from "../A/View1";
import {View2} from "../A/View2";

const View3 = ()=> {
  return ...
}
```

*AND NOT THIS:*

`modules/A/index.js`
```jsx harmony
import {View1} from "View1";
import {View2} from "View2";
```

`modules/B/View3.js`
```jsx harmony
import {View1, View2} from "../A";

const View3 = ()=> {
  return ...
}
```


### Justification

* Maintaining an unnecessary file is usually a source of errors. Adopting this technique requires creating components and remembering to export them with this technique.
* The real purpose of this technique is `encapsulation`, hiding the intrinsics of a module to the outside world, which is rarely the case for Application Development.
* Keeping this option open to do it or not to do it without a proper set of rules creates inconsistency in the source code of a project. 
* Complete imports give an exact location of the resource, making easier the debugging process.
* Introspection tools like type checkers or IDE navigation don't work well with this approach.
* More than style there is no real gain on do module exporting.

###TODO: 
## **1.9) Pure functions**
## **1.10) util functions over methods**

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
React applications must rely on the [Flux]([https://facebook.github.io/flux/](https://facebook.github.io/flux/)) Architecture propose by Facebook.

The main rules are:
1) Unidirectional flow always: View -> Actions -> Dispatcher -> Store -> View
2) The Application State can be divided in separated stores
3) **Presentational Components** subscribes to changes in any application level state or **store**
4) **Actions** can dispatch events that modify the state of the **store**
5) **Presentational components** can trigger **actions** that affect the state of the **store**
6) **Actions** can be combined in to more complex **actions**
7) **Stores** propagates changes to all subscribers
8) Any part of the application can have read only access to the application current state or **store**
9) Possible events or changes on the application must be declared either on a declarative or programmatically way
10) Consistency checks must always throw errors: a) A view can't subscribe to an event or change that doesnt exist, b) An action can never dispatch an event or change that doesn' exists c) A store can't handle data of an event or change that doesn't exist

Any library that can comply with this rules is a good fit to handle the Architecture. For convenience, a state library has been created with this set of rules in mind: [Flux State]([https://github.com/cobuildlab/flux-state](https://github.com/cobuildlab/flux-state)) with a convenient React Wrapper: [React Flux State]([https://github.com/cobuildlab/react-flux-state](https://github.com/cobuildlab/react-flux-state))

# 4) Formatting and Linting:

We use one of the most populars libraries standard javascript (eslint)[https://eslint.org/], along with (prettier)[https://prettier.io/] for code formatting.

We enforce this tools by using (husky + lint-staged)[https://github.com/okonet/lint-staged] for files on the staging area when you do a commit to git.

To set it up:

## 1) place `.eslintrc.js` and `.prettierrc.json`

>>> .eslint.json

```javascript 1.6
module.exports = {
 "plugins": ["jsdoc"],
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    'eslint-config-prettier',
    'plugin:jsdoc/recommended',
  ],
  rules: {
    indent: ['error', 2],
    semi: [2, 'always'],
    'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
    camelcase: {"properties": "always", "ignoreDestructuring": false, "ignoreImports": false},
    'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
    'react/require-default-props': [2, { forbidDefaultForRequired: true }],
    'react/no-unused-prop-types': [2],
    'jsdoc/check-alignment': 1, // Recommended
    'jsdoc/check-param-names': 1, // Recommended
    'jsdoc/check-tag-names': 1, // Recommended
    'jsdoc/check-types': 1, // Recommended
    'jsdoc/implements-on-classes': 1, // Recommended
    'jsdoc/newline-after-description': 1, // Recommended
    'jsdoc/no-undefined-types': 1, // Recommended
    'jsdoc/require-description-complete-sentence': 1,
    'jsdoc/require-hyphen-before-param-description': 1,
    'jsdoc/require-jsdoc': 1, // Recommended
    'jsdoc/require-param': 1, // Recommended
    'jsdoc/require-param-description': 1, // Recommended
    'jsdoc/require-param-name': 1, // Recommended
    'jsdoc/require-param-type': 1, // Recommended
    'jsdoc/require-returns': 1, // Recommended
    'jsdoc/require-returns-check': 1, // Recommended
    'jsdoc/require-returns-description': 1, // Recommended
    'jsdoc/require-returns-type': 1, // Recommended
    'jsdoc/valid-types': 1, // Recommended
  },
};
```

>>> .prettierrc.json

```json
{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "jsxSingleQuote": false,
  "bracketSpacing": true,
  "jsxBracketSameLine": true,
  "arrowParens": "always",
  "trailingComma": "all"
}
```

## 2) And Add the following sections to your `package.json`:

```json
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.js": [
      "prettier --write",
      "eslint --fix",
      "git add"
    ]
  },
  "eslintConfig": {
    "extends": "react-app"
  }
```

## 3) Install the following libraries:

```bash
npm i --save-dev eslint-config-prettier husky lint-staged prettier
``` 

## 4) Run `npm i` 

# 5) Naming Conventions

Naming is important for quickly understand the purpose of an element: Classes, constants, variables or methods.

## General Rules:
- For React Components file names, use <Entity Name><Purpose><Object Type>. Example: `UserCreateView.js`, `TaskEditView.js`, `CompanyMembersListComponent.js`
- For non React Components file names, use <entity-name>-<object-type>. Example: `user-actions.js`, `user-store.js`, `company-permissions.js`
- For Module names follow file name conventions separating words using the hyphen `-`
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

## Variables and Constants

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


#TODO:

# 6) Application Starter
# 7) Linting and Code Formatting
# 8) Github templates
# 9) State Management
# 10) Props validation
# 10) Css and Theme
# 11) HOC vs Composition
# 12) API communication
# 13) Notifications
# 14) Routing
# 15) State initialization
# 16) Data Validation
# 17) Testing
# 18) Testing
