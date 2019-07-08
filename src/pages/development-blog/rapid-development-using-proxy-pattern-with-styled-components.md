---
title: "Rapid Software Development using the Proxy Pattern with Styled Components"
date: 2019-08-08T01:00:00+00:00
template: development-post
tags: 
image: "./media/python-wsgi-docker.png"
---

Agile frameworks set the basis for increasing speed doing software development, and we started from there to use tools and implement methodologies to increase even further the speed in which we create Software Products.

Our goal is to explain this set of tools and techniques in different posts that work as a reference to really achieve Rapid Software Development using [ReactJS.](https://reactjs.org/)

We summarize this tools and techniques in a [React Conventions](https://cobuildlab.com/development-blog/conventions-to-create-a-react-application/) post, and today we will dive deep in using the [Proxy Pattern](https://cobuildlab.com/development-blog/react-patterns-proxy-pattern-for-components/) with the [Styled Component](https://styled-components.com) library to increase the speed of development.

## Design Patterns

In Software Development, a Design Pattern is a common solution to a common problem. Usually this solution has an structure, components and responsibilities, and usually is offer as a template reference or technique instead of actual code with the purpose of been explained independent of the language or application.

Design patterns have an additional and usually none mention great benefit that is the ability of been recognizable to Software Developers, making the comunication easier in development teams.

[Source](https://sourcemaking.com/design_patterns)


>>>In software engineering, a design pattern is a general repeatable solution to a commonly occurring problem in software design. A design pattern isn't a finished design that can be transformed directly into code. It is a description or template for how to solve a problem that can be used in many different situations.


## The Proxy Pattern

In [Object Oriented Programming](https://medium.freecodecamp.org/object-oriented-programming-concepts-21bb035f7260) the Proxy Pattern belongs to the categories of [Structural Patterns](https://en.wikipedia.org/wiki/Structural_pattern) that are a set of patterns that are used to identify elements or components on your software and how they interact with each other. This interaction can mean how an object or a set of objects interact together to provide a functionality, or can also specify how they expose an interface to be used.


In specific the Proxy Pattern defines an object or structure that works as an interface to a functionality provided by one or a set of elements. The goal of this interface is simplify the use of the functionality to externals entities.


[Wikipedia:](https://en.wikipedia.org/wiki/Proxy_pattern) 


## Styled Components

**Styled Components** is a library that allows you to encapsulate and extend the `css rules` that you use for styling React components. This extension mechanism allows you to customize html or React components based of how they would look or how they will be presented to the user.

Styled Components, let you create css customized components to use across your Software Application.


## How do Styled Components will help me increase speed of development ?

1) Create a visual reference of the Software that you want to built: mockups or prototypes with as much detail as necessary.
2) Create a folder for the components that will be shared, we recommend a `src/shared/components` folder
3) Start by creating forms and text elements like: `buttons`, `input fields`, `titles` or `h1`, `h2`, etc
4) Make sure your components are publicly available to the complete development team.
5) Find a way to communicate the existence of this components and be open to update them regularly while the Software start growing.  


### Examples

**1) Abstract the customization of The Delete Button in a Component to replace it in your React View:**

```javascript

// src/shared/components/buttons/DeleteButton.js
// 
const DeleteButton = ({ text, onClick }) => {
  return (
    <Row>
      <img className="plus-circle-icon" src={plusCircleIcon} alt="plus-circle-icon" />
      <Label
        kind="secondary"
        style={{ marginTop: 13, cursor: 'pointer' }}
        text={text}
        onClick={onClick}
      />
    </Row>
  )
};

const Table = ({ text, onClick }) => {
  return (
    <Table>
      <Row>
        <Column>
          This is a Test Text
        </Column>
      </Row>
      <Row>
        <Column>
          <DeleteButton text='Delete' onClick={() => {
            // So something on Delete
          }} />
        </Column>
      </Row>
    </Table>
)};

```

**2) Back Button**

Instead of:

```javascript
const Form = ({ text, onClick }) => {
  return (
    <div>
      <div className="clickable-label" style={{ height: '100%' }}>
        <img src="http://cdn.onlinewebfonts.com/svg/img_417342.png" alt="test" onClick={() => {
          //do Something
        })} />
        Go Back
      </div>
    </div>
  );
};
```

Create a component with all the Look and Feel Customization

```javascript
const ClickableLabel = ({ text, onClick }) => {
  return (
    <div className="clickable-label" style={{ height: '100%' }}>
      <img src="http://cdn.onlinewebfonts.com/svg/img_417342.png" alt="test" onClick={onClick} />
      {text}
    </div>
  );
};

const Form = ({ text, onClick }) => {
  return (
    <div>
      <ClickableLabel text="Go Back" onClick={() => { }} />
    </div>
  );
};
```

## Why **styled components** would help me increase speed of development

- Reduce Visual Noise and Increase component readability: By quickly understanding the responsibility of a View or a Component resolving bugs or adding features becomes easier. 
- Avoiding design decisions: Frontend developers will avoid the step of deciding how to implement an style
- By isolation of the styling options is easier to maintain the Look and Feel of the Software.
- Reduce errors by avoiding copy and pasting of properties and styles
- Increase reusability creating portable components
