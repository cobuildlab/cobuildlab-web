---
title: Conventions for Javascript / Typescript source code
date: 2020-12-31T01:00:00+00:00
tags: 
template: development-post
image: null
---

This document aims to reduce the friction between patterns and ways of doing common tasks during the development of Javascript applications.

This document is heavily based on the Convention proposed by [Airbnb](https://github.com/airbnb/javascript), [StandardJs](https://standardjs.com/) and our own experience developing front end javascript applications since 2008 and React Applications since late 2016.

Here, we explain the problem, choose a convention, and explain the reasons:


# **1) Avoid import/export from `index.js` on modules**

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


# 2) File Structure

Organizing files are one of the most important conventions, especially for large codebases and large teams, specially remote teams.

We will only consider the structure under the `src` folder, the project structure depends of other factors like the platform, linting tools, enviroment files, version control tools, react version, etc.

We use the terms **App Specific** to resources that can be used across the entire app, and **Module Specific** to resources that can only be used inside a module folder.

Based on our experience for the last years working with React, we propose this file Structure with examples:

```
src/ 
└───modules/
│   └───login/
|	│   └───components/
|	|	|	└───LoginForm.js
|	|	└───LoginView.js
|	|	└───login-actions.js
|	|	└───login-models.js
|	|	└───login-permissions.js
|	|	└───login-services.js
|	|	└───login-handlers.js
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
|	|	|	└───school-services.js
|	|	|	└───school-handlers.js
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
    └───assets/
│   |   └───images/
|	|   |	└───logo.png
|	|   |	└───background_main.jpg
|	|   |	└───...
│   string-utils.json
│   validation-utils.json
│   index.js
│   routes.js
│   App.js
│   index.css
 ```

## *assets* folder
App Specific folder that contains images files like png, svg, jpg, etc

## *modules* folder
Main folder to hold the Module Specific folders

## *shared* folder
App Specific folder to hold any asset that is not an image and that it should be shared across modules.

Think about this folder as any potential code that could be put in a node package and be distributed as a library.

## *components* folder
React components that can be App specific under `shared/components/` or module specific under: `modules/<module-name>/components/`

## *\*-actions* files
Module specific files that holds Actions of the module. (See Architecture)

## *\*-models* files
Module specific files that holds constants and Model Objects or Classes.

## *\*-store* files
Module specific files that that holds the store components. (See Architecture)

## *\*-events* files
Module specific files that that holds the events constants. (See Architecture)

## *\*-permissions* files
Module specific files that that holds functions related to permissions.

## *\*-utils* files
Functions or Classes that can be App specific under `shared/` or module specific under: `modules/<module-name>/`

## *\*.css* files
As of these conventions the project should only have one `index.css` file, that holds general purpose styles like: Text, body styles, etc.

Component specific styles should be handled using [Styled Components]([https://www.styled-components.com/](https://www.styled-components.com/))


# 3) Formatting and Linting:

We use one of the most populars libraries for javascript linting (eslint)[https://eslint.org/], along with (prettier)[https://prettier.io/] for code formatting.

We enforce this tools by using (husky + lint-staged)[https://github.com/okonet/lint-staged] for files on the staging area when you do a commit to git.

To set it up:

## 1) place `.eslintrc.js` and `.prettierrc.json` 

The rules on these files depend on whether you are coding on javascript or typescript, for Frontend applications or for Backend projects.

## 2) And Add the following sections to your `package.json`:

```json
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{ts,tsx,js,jsx}": [
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

# 4) Naming Conventions

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
