---
title: "Python Best Practices: Helper functions over complex expressions"
date: 2019-01-14T01:00:00+00:00
template: development-post
tags: 
image: "./media/blocks.jpg"
---

Python powerfull syntaxis and List Comprehensions allows creating one-lined expressions that can do many things at once.

This is not always good, in Python, we favor readability instead of obscure bodoo. Remember:

> Code gets read many more times that is written

Take this example as consideration

```
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
filtered = [[x for x in row if x % 3 == 0] for row in matrix if sum(row) >= 10]
print(filtered)
```

>Excerpt From Brett Slatkin. “Effective Python: 59 Specific Ways to Write Better Python (Effective Software Development Series).” Apple Books. 

What does it do? Not easy to tell. 

Take this other code, that does exactly the same thing:

```
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
filtered = filter_sum_more_than(matrix, 10)
divisible_by_3 = get_divisable_by(filtered, 3)
print(divisible_by_3)
```

Powerful expressions are cool to show off a little bit with other programmers, but increase unnecessarily the readability of the code.

Other example:


```
a = [...]
ven_squares = map(lambda x: x**2, filter(lambda x: x % 2 == 0, a))

```

Can you guess quickly what this does?

Can you find a better way to write this?


Remember:

> Explicit is better than implicit

[The Zen of Python] (https://www.python.org/dev/peps/pep-0020/)

## Good conventions to reduce complexity and increase readability

Split into different functions if:

1. Your List Comprehensions expressions have more than 2 operations
2. If your functions are solving more than one problem
3. If your functions do not fit your screen
4. If some part of the code can be potentially reused
5. If you see code that you have already written someplace else

### Let's see some real-world examples
