---
title: "Python 3 Data Structures: Lists"
date: 2019-07-16T01:00:00+00:00
tags: 
template: development-post
image: ./media/blocks.jpg
---

In Python 3 exists 5 fundamentals data structures to store multiple values:

- Lists: a sequence or collection of elements with a zero-based indexing
- Tuples: an immutable sequence or collection of elements with a zero-based indexing
- Sets: A set is an unordered collection with no duplicate elements. Basic uses include membership testing and eliminating duplicate entries
- Dictionaries: a key value store 
- Ranges: a sequence like object that doesnt store all the values, rather stores the generator function to create the elements on the sequence

Is important to understand each one of them to use them correctly depending on the situation.

## Python 3 Lists:

Python 3 lists are a collection of values of any type, including other lists. Lists are mutable, unlike tuples, lists can be changed after creation.

Lists are also ordered by the order of insertion of the elements, and have a known length.


### List methods

- **Creating a List**

```python
my_list = [] # Literal
my_other_list = list() # List constructor
populated_list = [1,2,3,4, 'test', [], True]
```

- **Reading, adding, replacing, deleting**

```python
# accessing a element by position
a = populated_list[0]
print(a)
b = populated_list[3]
print(b)
# by value
b = populated_list[populated_list.index(3)]
print(b)

# adding elements to the list
my_list.append("A New element")
print(my_list)
my_list.append(False)
my_list.append(9999)
print(my_list)
my_list.insert(0 , "New")
print(my_list)
my_list.insert(4 , "New")
print(my_list)

# replacing / updating elements
my_list[0] = 5
print(my_list)
my_list[0] = 55
print(my_list)
my_list[0] = 555
print(my_list)

# deleting elements
populated_list = [1,2,3,4, 'test', [], True]
# By Value
populated_list.remove(1)
print(populated_list)
# By position
populated_list.pop(1)
print(populated_list)
# or last
populated_list = [1,2,3,4, 'test', [], True]
print(populated_list)
populated_list.pop()
print(populated_list)
# By position using del
print(populated_list)
del populated_list[1]
print(populated_list)
# Empty the list
populated_list = [1,2,3,4, 'test', [], True]
print(populated_list)
populated_list.clear()
print(populated_list)
```

- **Size and looping**

```python
# Size
populated_list = [1,2,3,4, 'test', [], True]
print(len(populated_list = [1,2,3,4, 'test', [], True]))

# Looping
for item in populated_list:
    print(item)
```

### Slicing

#### s[i]: ith item of s, origin 0
#### s[i:j]: slice of s from i to j
#### s[i:j:k]: slice of s from i to j with step k

If i or j is negative, the index is relative to the end of sequence s: len(s) + i or len(s) + j is substituted. But note that -0 is still 0.

The slice of s from i to j is defined as the sequence of items with index k such that i <= k < j. If i or j is greater than len(s), use len(s). If i is omitted or None, use 0. If j is omitted or None, use len(s). If i is greater than or equal to j, the slice is empty.

The slice of s from i to j with step k is defined as the sequence of items with index x = i + n*k such that 0 <= n < (j-i)/k. In other words, the indices are i, i+k, i+2*k, i+3*k and so on, stopping when j is reached (but never including j). When k is positive, i and j are reduced to len(s) if they are greater. When k is negative, i and j are reduced to len(s) - 1 if they are greater. If i or j are omitted or None, they become “end” values (which end depends on the sign of k). Note, k cannot be zero. If k is None, it is treated like 1.

[Source](https://docs.python.org/3/library/stdtypes.html#typesseq)

```python
a = [1,2,3,4,True,'a']
print(a[-1])      # last item in the array
print(a[-2:])     # last two items in the array
print(a[:-2])     # everything except the last two items
print(a[::-1])    # all items in the array, reversed
print(a[1::-1])   # the first two items, reversed
print(a[:-3:-1])  # the last two items, reversed
print(a[-3::-1])  # everything except the last two items, reversed
```

### Common operations on lists

```python
# Copying a List
populated_list = [1,2,3,4, 'test', [], True]
new_list = populated_list.copy()
print(populated_list)
print(new_list)
print(populated_list === new_list)
# Extend
new_list = [5,6,7]
populated_list.extend(new_list)
print(populated_list)
# reverse
populated_list.reverse()
print(populated_list)
# Count : counts the ocurrences of an element
print(populated_list.count(1))
# Sort elements on natural order or with a function
populated_list.sort()
print(populated_list)

```


### list comprehensions 

List comprehensions provide a concise way to create lists. Common applications are to make new lists where each element is the result of some operations applied to each member of another sequence or iterable, or to create a subsequence of those elements that satisfy a certain condition.

A list comprehension consists of brackets containing an expression followed by a for clause, then zero or more for or if clauses. The result will be a new list resulting from evaluating the expression in the context of the for and if clauses which follow it. For example, this listcomp combines the elements of two lists if they are not equal:

[Source](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions)

```python
squares = []
for x in range(10):
    squares.append(x**2)
print(squares)    
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
squares = list(map(lambda x: x**2, range(10)))
print(squares)
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
squares = [x**2 for x in range(10)]
print(squares)
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

>A list comprehension consists of brackets containing an expression followed by a for clause, then zero or more for or if clauses. The result will be a new list resulting from evaluating the expression in the context of the for and if clauses which follow it. For example, this listcomp combines the elements of two lists if they are not equal:

```python 
l = [(x, y) for x in [1,2,3] for y in [3,1,4] if x != y]
print(l)
# [(1, 3), (1, 4), (2, 3), (2, 1), (2, 4), (3, 1), (3, 4)]
# it’s equivalent to:
combs = []
    for x in [1,2,3]:
        for y in [3,1,4]:
            if x != y:
               combs.append((x, y))
print(combs)
# [(1, 3), (1, 4), (2, 3), (2, 1), (2, 4), (3, 1), (3, 4)]

# call a method on each element
freshfruit = ['  banana', '  loganberry ', 'passion fruit  ']
l = [weapon.strip() for weapon in freshfruit]
print(l)
# ['banana', 'loganberry', 'passion fruit']

# create a list of 2-tuples like (number, square)
l = [(x, x**2) for x in range(6)]
print(l)
#[(0, 0), (1, 1), (2, 4), (3, 9), (4, 16), (5, 25)]
```
