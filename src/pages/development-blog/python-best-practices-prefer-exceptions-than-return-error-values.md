---
title: "Python Best Practices: Prefer raise Exceptions than return error values"
date: 2019-01-28T01:00:00+00:00
template: development-post
tags: 
image: "./media/blocks.jpg"
---


Usually, developers create helper functions or utilities or services providing meaningful error codes or Null or None values (Depending on the language). 


In the next section, we will enumerate why this is a bad practice, and it should be avoided at all cost. Usually, programming languages offer a special and dedicated way to work with errors. In the case of Python, there are Exceptions.


## Why prefer Exceptions instead of special values for error handling:

### 1. Exceptions are built-in, Meaning that are language construct designed for handling errors. Also, the compiler understands them as Exceptional situations.

### 2. Numerical values for errors require additional knowledge to understand what's happening

### 3. Exceptions are typed, so they are OO friendly: Extension, polymorphism, overload

### 4. Exceptions provide more information that error codes or None values

### 5. None values are evaluated as False in Python

### 6. Make the code more verbose

### 7. Exceptions can be propagated

### 8. Exceptions stop the execution of the code, so they are safer