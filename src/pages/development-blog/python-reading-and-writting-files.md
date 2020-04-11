---
title: "Python Development: Reading and Writing Files"
date: 2019-09-02T01:00:00+00:00
tags: 
template: development-post
image: ./media/blocks.jpg
---

Today, we will talk about Python way of handling files.

Reading and writing files is a common task in any platform, for transiting information, reporting, parsing data, etc, and today we will how this task can be achieved using Python simple but powerful File API.

The most important tool to manipulating files on Python is the `open()` function. Before we explain how this is used, is important to understand that for Python, the files are categorized in 2 types: Text files, and binary Files.

Text Files are files who's content can be parsed as text characters and are structured as sequences of lines. Any other file that does not compliant with this, is a binary file, and usually requires special type of processing to be parsed or manipulated.

In this article we will talk about Text Files.

## The Open Function:

> The complete reference to the `open` function can be found [here](https://docs.python.org/3/library/functions.html#open). For now we just gonna focus in the most used parameters

- `file`: a [path-like](https://docs.python.org/3/glossary.html#term-path-like-object) object that indicates the location of the file
- `mode`: an optional string that indicates Python how he is gonna open the file. Defaults to `r`:


|Character   | Meaning  |
|---|---|
|'r'  |open for reading (default)|
| 'w' |open for writing, truncating the file first|
| 'x' |open for exclusive creation, failing if the file already exists|
| 'a' |open for writing, appending to the end of the file if it exists|
| 'b' |binary mode|
| 't' |text mode|
| '+' |open a disk file for updating (reading and writing)|

## Opening a file with python 

```python
>>> f = open(“test.csv”) 
>>> print(f)
<_io.TextIOWrapper name='t.csv' mode='r' encoding='UTF-8'>
>>> f.close()
```

NOTE: Don't forget to close the file to avoid memory leaking or use the `with` context manager, that closes the file automatically for you:

```python
>>> with open(“test.csv”) as f: 
>>>     print(f)
<_io.TextIOWrapper name='t.csv' mode='r' encoding='UTF-8'>
```
 
## Writing into a file

```python
>>> with open("test.csv","w") as f:
>>>     f.write("HELLO WORLD") 
>>>     file.write(“Hello World”) 
>>>     file.write(“This is our new text file”) 
>>>     file.write(“and this is another line.”) 
```

>>> NOTE: 'w' mode will override the file

 
## Writing into a file (appending mode)

```python
>>> with open("test.csv","a") as f:
>>>     f.write("HELLO WORLD") 
>>>     file.write(“Hello World”) 
>>>     file.write(“This is our new text file”) 
>>>     file.write(“and this is another line.”) 
```

## Reading into a file

### Full content

```python
>>> with open("test.csv","w") as f:
>>>     full_content = f.read()
>>>     print(full_content) 
```

### Full content as a list of lines

```python
>>> with open("test.csv","w") as f:
>>>     full_content = f.readlines()
>>>     print(full_content) 
```

### An specific number of lines

```python
>>> with open("test.csv","w") as f:
>>>     some_content = f.read(10)
>>>     print(some_content) 
``` 

### An specific line

```python
>>> with open("test.csv","w") as f:
>>>     first_line = f.readline()
>>>     print(first_line) 
>>>     third_line = f.readline(3)
>>>     print(third_line) 
``` 


### Line by line (memory efficient)

```python
>>> with open("test.csv","w") as f:
>>>     for line in f:
>>>         print(line) 
``` 


