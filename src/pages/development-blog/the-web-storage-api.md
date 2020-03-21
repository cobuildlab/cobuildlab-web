---
title: "Introduction to the Web Storage API"
date: 2019-06-10T01:00:00+00:00
template: development-post
tags: 
image: "./media/blocks.jpg"
---

The Web Storage API is a set of interfaces and protocols to access client side browser storage capabilities for web applications.

It was presented as an improvement of [Cookies Storage](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies) mainly due to the storage capacity and server side tie.

## Main Features

It exposes 2 objects on the main `window` object on the browser: `window.sessionStorage` and `window.localStorage`

- Both Session Storage and Local Storage provide the same methods and properties, the only difference being that `sessionStorage` provides persistence only on a tab/windows basis, meaning that when you close the tab / windows the data get loss, meanwhile `localStorage` persist the data until is manually deleted.
- Major browsers offer at least 4Mb of Storage capacity
- Stores data on a per origin basis (domain + protocol)
- Stores data only on the client side
- Is a non indexed key/value store, that only supports **strings** as keys and more importantly as values, meaning that any value put into the store is forced to string upon saving
 

## Where can be used?

- Keep a session Token
- Save user preferences
- Save a shopping cart
- Caching Data to reduce server calls or work offline
- Caching Images


## A Simple Example:

Open the Browser console:

```javascript
localStorage.setItem('user', 'alacret') // undefined
localStorage.setItem('name', 'Angel') // undefined
localStorage.getItem('name') // "Angel"
localStorage.name //"Angel"
localStorage.length // 3
localStorage.key(3) //null
localStorage.key(2) //"name"
localStorage.key(1) // "user"
localStorage.removeItem('name') // undefined
localStorage.length // 2
localStorage.getItem('name') //null
```

## Reference

### setItem(key, value)

Adds or updates an item to the storage.

- param `key` : String The key of the item
- param `value`: String The value of the item
- returns `undefined`

```javascript
localStorage.setItem('username', 'alacret')
localStorage.setItem('id', '123')
localStorage.setItem('test', 123) //stored as the '123' string
localStorage.setItem('test', { id: 1 }) //stored as "[object Object]"
```

### getItem(key)

Retrieves the value of an item by key or null if doesn't exist.

- param `key` : String The key of the item
- returns `value` : The value fot

```javascript
localStorage.getItem('username') // 'alacret' (String)
localStorage.setItem('id') // '123'
```

### removeItem(key)

Removes the key from the storage.

- param `key` : String The key of the item
- returns: `undefined`

```
localStorage.removeItem('id')
```

### key(n)

Every item you store has an index number. So the first time you use setItem(), that item can be referenced using key(0). The next with key(1) and so on.
If you reference a number that does not point to a storage item, it returns null.

Every time you remove an item with removeItem(), the index consolidates:

- param `key` : number The position of the item on the index
- returns: `value` or null if the items doesn'e exist

```
localStorage.setItem('a', 'a')
localStorage.setItem('b', 'b')
localStorage.key(0) //"a"
localStorage.key(1) //"b"
localStorage.removeItem('b')
localStorage.key(1) //null

localStorage.setItem('b', 'b')
localStorage.setItem('c', 'c')
localStorage.key(1) //"b"
localStorage.removeItem('b')
localStorage.key(1) //"c"
```

### clear()

clear() removes everything from the storage object you are manipulating:

- returns: `undefined`

```javascript
localStorage.setItem('a', 'a')
localStorage.setItem('b', 'b')
localStorage.length //2
localStorage.clear()
localStorage.length //0
```
