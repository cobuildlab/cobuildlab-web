---
title: "React Patterns: Simplify React views with a Proxy Pattern for Components"
date: 2019-02-18T01:00:00+00:00
template: development-post
tags: 
image: "./media/blocks.jpg"
---

We keep our series of React Patterns, and today we are gonna talk about a pattern to simplify your views and remove unnecessary complexity on components.

As we discuss in our [previous post on React](https://cobuildlab.com/development-blog/react-patterns-functional-components-vs-class-components/), this is a libreary based on Components to build User Interfaces and their behavior.


According to the [React documentation](https://reactjs.org/docs/components-and-props.html):

>>>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.


However a good framework is not enough to build good, efficient and maintainable code, best practices and design patterns are always important to keep your code readable, maintenable and scalable, especially in large code bases.


## Design Patterns

In Software Development, a Design Pattern is a common solution to a common problem. Usually this solution has an structure, components and responsabilities, and usually is offer as a template reference or technique instead of actual code with the purpose of been explained independent of the language or application.

Design patterns have an additional and usually none mention great benefit that is the ability of been recognizable to Software Developers, making the comunication easier in development teams.

https://sourcemaking.com/design_patterns


>>>In software engineering, a design pattern is a general repeatable solution to a commonly occurring problem in software design. A design pattern isn't a finished design that can be transformed directly into code. It is a description or template for how to solve a problem that can be used in many different situations.


## The Proxy Pattern

In [Object Oriented Programming](https://medium.freecodecamp.org/object-oriented-programming-concepts-21bb035f7260) the Proxy Pattern belongs to the categories of [Structural Patterns](https://en.wikipedia.org/wiki/Structural_pattern) that are a set of patterns that are used to identify elements or components on your software and how they interact with each other. This interaction can mean how an object or a set of objects interact together to provide a functionality, or can also specify how they expose an interface to be used.


In specific the Proxy Pattern defines an object or structure that works as an interface to a functionality provided by one or a set of elements. The goal of this interface is simplify the use of the functionality to externals entities.


[Wikipedia:](https://en.wikipedia.org/wiki/Proxy_pattern)

>>>In computer programming, the proxy pattern is a software design pattern. A proxy, in its most general form, is a class functioning as an interface to something else. The proxy could interface to anything: a network connection, a large object in memory, a file, or some other resource that is expensive or impossible to duplicate. In short, a proxy is a wrapper or agent object that is being called by the client to access the real serving object behind the scenes.

<p align="center">
<img src="./media/show-me-the-code.jpeg" />
</p>

## The Proxy Pattern for React Components

In React this pattern is used with three main purposes:

### 1) To simplify the use of components and its customization

Often we encounter our selves with highly customazible componentes, specially from third party libraries and Frameworks. Moving, copying and pasting this type of components can be error prone, and many times cumbersome.

Instead of:

```javascript

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
          <img className="plus-circle-icon" src={plusCircleIcon} alt="plus-circle-icon" />
          <Label
            kind="secondary"
            style={{ marginTop: 13, cursor: 'pointer' }}
            text={'Delete'}
            onClick={() => {
              //Do Something on Delete
            })}
          />
        </Column>
      </Row>
    </Table>);

```

Absctract the customization of The Delete Button in a Component to replace it in your React View:

```javascript

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

### 2) To encapsulate behavior that otherwise is not relevant on the views where the component is been used

This case is similar to the previos one, logic and behaviour that are only relevant to the internal state of the component can be abstracted and used via a Proxy Component.

Instead of:

```javascript
class BusinessCaseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formattedAnticipatedCost: '$' + this.props.data.anticipatedCost,
    };
  }
  
  render() {
    const {
      formattedAnticipatedCost,
      formattedExpectedCost,
      formattedExpectedRevenue,
    } = this.state;

    return (
      <React.Fragment>
        <Row growChildren>
          <Column stretch>
            ... Rest of the Form
            {/* Anticipated Cost Input */}
            <NumberFormat
              style={{ display: 'none' }}
              value={dirtyAnticipatedCost}
              thousandSeparator={true}
              allowNegative={false}
              prefix={'$'}
              onValueChange={(values) => {
                onChange('anticipatedCost', values.floatValue);
                this.setState({ formattedAnticipatedCost: values.formattedValue });
              }}
            />
            <InputField
              disabled={isDisabled}
              style={{ width: '100%' }}
              label="Anticipated Cost ($)"
              input={{
                name: 'anticipatedCost',
                value: formattedAnticipatedCost,
                onChange: (value, e) => this.setState({ dirtyAnticipatedCost: value }),
              }}
            />
          </Column>
        </Row>
    );
  }
}
```

Create a Component and Extract the formatting logic of the input, and use that instead in your Forms:

```javascript
class MoneyInputField extends React.Component {
  render() {
    const { onChange, label } = this.props;
    const value = numeral(this.props.value).format(NUMERAL_FORMAT);

    return (
      <InputField
        style={{ width: '90%' }}
        label={label}
        input={{
          value,
          onChange: (value, e) => {
            onChange(numeral(value).value());
          },
        }}
      />
    );
  }
}

class BusinessCaseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formattedAnticipatedCost: '$' + this.props.data.anticipatedCost,
    };
  }
  
  render() {
    const {
      formattedAnticipatedCost,
      formattedExpectedCost,
      formattedExpectedRevenue,
    } = this.state;

    return (
      <React.Fragment>
        <Row growChildren>
          <Column stretch>
            ... Rest of the Form
            {/* Anticipated Cost Input */}
            <MoneyInputField ... />
          </Column>
        </Row>
    );
  }
}

```

### 3) To encapsulate styles or look and feel customization

This often happens when we are defining how things are going to look like. The goal here is to encapsulate style props that are related to look and feels, and let position and layout props exposed to be modified if necesary:

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

## Benefits of the Proxy Pattern

* Reduce errors by avoiding copy and pasting of properties and styles
* Increase resusbility creating portable components
* Increase speed of development avoiding taking customization and style decisions
* Increase speed of development providing a set of well defined components to create a User Interface
* Increase readability in your React Views
