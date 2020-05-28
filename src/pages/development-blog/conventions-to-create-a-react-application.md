---
title: Conventions to create a React or React Native Application
date: 2021-12-31T01:00:00+00:00
tags: 
template: development-post
permalink: /conventions-to-create-a-react-web-or-mobile-application/
image: null
---

This document aims to reduce the friction between patterns and ways of doing common tasks during the development of a React Web or React Native Mobile Application.

This document is heavily based on the Convention proposed by [Airbnb](https://github.com/airbnb/javascript), [StandardJs](https://standardjs.com/) and our own experience developing front end javascript applications since 2008 and React Applications since late 2016.

Here, we explain the problem, choose a convention, and explain the reasons:

## **1) Use constructor to initialize state instead of `static` members**

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

## **2) Components should not include styling props**

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

## **3) Separate LAYOUT Components from UI Components**

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

## **4) Keep complex rendering logic on the render method with local variables**

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


## **5) Enforce the difference Between Presentational Components and Container Components (Views)**

Reference: [React Patterns Presentational and Container Components]([https://cobuildlab.com/development-blog/react-patterns-container-and-presentational-components/](https://cobuildlab.com/development-blog/react-patterns-container-and-presentational-components/))

React components can be clasified in 2 major groups depending on how they fit in the Architecture of your application, and how they interact with the App and the User:

1) **Presentational Components** or just Components are responsible present or render the user interface, they interface the communication between the User and the Application State only through the **Container Components**.
2) **Container Componets** or Views are responsible of "connecting" the application state with the User Interface by listening to changes to the Application State and rendering **Presentational Components**. The way they interact with the Application State or stores depends of the technology used (Redux, Flux, MobX, Context API)


| Feature |   Presentational Components (Components) |  Container Components (Views) |
|---|---|---|
| **External Communication** |  Thet are not connected directly to the Application State. Their communication in handled via props | They subscribe and react to the Application State and its changes  |
| **Internal State** |Normally relies on the Store connection|Handle internally with Component level state or Hooks|
| **Renders**| Mostly understands **WHAT** to render   | It understands **WHAT** and **HOW** to render  |


## **6) Architecture**
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

## **7) Formatting and Linting:**

For installation see: [Formatting and Linting for Javascript and Typescript applications](/conventions-for-javascript-typescript-source-code) 

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

## **8) Prefer `Session` pattern for managing protected routes instead of `ProtectedRoute` pattern**

For declarative routers like [React Router](https://reacttraining.com/react-router/) or [React Reach](https://reach.tech/router) prefer a Parent `Session` component that individuals `ProtectedRoute` components.

*PREFER THIS*

```javascript

const App = ()=> {
  return (
    <Provider>
        <Switch>
            {/*Public Routes*/}
            <Route path="/auth" component={AuthCallback} />
            <Route>
                <Session>
                {/*Protected Routes*/}
                      <Route path="/management" component={ManagementView} />
                      <Route path="/reports" component={ReportsView} />
                      <Route path="/active-items" component={ActiveItemsView} />
                      <Route path="/settings" component={SettingsView} />
                </Session>
            </Route>
        </Switch>
    </Provider>  
)
sddsf}
```

*AND NOT THIS*

```javascript

const App = ()=> {
  return (
    <Provider>
        <Switch>
            {/*Public Routes*/}
            <Route path="/auth" component={AuthCallback} />
            {/*Protected Routes*/}
            <ProtectedRoute path="/management" component={ManagementView} />
            <ProtectedRoute path="/reports" component={ReportsView} />
            <ProtectedRoute path="/active-items" component={ActiveItemsView} />
            <ProtectedRoute path="/settings" component={SettingsView} />
        </Switch>
    </Provider>  
)
sddsf}
```

### Justification:

* Single point of control over a user session over redirects, on-boardings, profile completion, etc 
* In React the Session component can be used for [Error Boundaries](https://reactjs.org/docs/error-boundaries.html). 


## **9) Use shared permission functions to control access to features and business operations:**

- Isolate permission logic in functions that are easy to share.
- A permission function should only depend dynamically on Business Objects.
- All permission functions should maintain the same signature:

```typescript
export const canApproveProject = (user:User, project:Project): [boolean, string?] => {
  if(project.status === FROZEN){
    return [false, "Project is on invalid status and can't be approved"];  
  }

  if(user.role === ROLE)
    return [true];

  return [false, "User can't approve this project"];
}; 
```
