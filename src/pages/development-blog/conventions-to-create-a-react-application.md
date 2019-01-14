---
title: Conventions to create a ReactJS Web Application
date: 2018-11-22T01:00:00+00:00
tags: 
template: development-post
permalink: /conventions-to-create-a-reactjs-web-application/
image: null
---

This document aims to reduce the friction between patterns and ways of doing common tasks during the development of a ReactJS Web Application.

Here, we explain the problem, choose a convetion, and explain the reasons:

## 1) Application Starter
<TODO>
## 2) Architecture
<TODO>
## 3) State Management
<TODO>
## 4) File Structure
<TODO>
## 5) Props validation
<TODO>
## 6) Css and Theme
<TODO>
## 7) HOC vs Composition
<TODO>
## 8) API communication
<TODO>
## 9) Notifications
<TODO>
## 10) Routing
<TODO>
## 11) State intialization

Use constructor to initialize state instead of `static` members:

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

- Code redeability
- Consistency: Initialization should always be in the constructor




## 12) Testing
<TODO>