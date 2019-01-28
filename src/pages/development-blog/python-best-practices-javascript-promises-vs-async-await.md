---
title: "Javascript: Promises vs Async / Await"
date: 2019-01-28T01:00:00+00:00
template: development-post
tags: 
image: "./media/blocks.jpg"
---

[PEP 8 or Python Enhancement Proposal #8](https://www.python.org/dev/peps/pep-0008/) is the Style Guide propose to write Python code.

This is not enforced by the Python compiler or any runtime, but the Python Community encouraged to use it to keep your code consistent with the rest of the Python ecosystem (Community, libraries, examples, etc).

## The Style Guide can be divided into these big pieces:

### Code Layout:

This is rules about how the code should be written in a file. Indentation, spaces, blank lines, etc

### Quoting

How to use quotes for strings

### Whitespaces

When and how to use whitespaces with operators

### Trailing Commas

When and how to use trailing commas

### Comments

How to properly comment your code

### Naming Conventions

The naming of module members, class members, variables, etc

### Programing Recomendations

General Recommendations to write Python readable code



## When not to use PEP8

[Source](https://www.python.org/dev/peps/pep-0008/#a-foolish-consistency-is-the-hobgoblin-of-little-minds)

> However, know when to be inconsistent -- sometimes style guide recommendations just aren't applicable. When in doubt, use your best judgment. Look at other examples and decide what looks best. And don't hesitate to ask!
>
>In particular: do not break backward compatibility just to comply with this PEP!

Some other good reasons to ignore a particular guideline:

1. When applying the guideline would make the code less readable, even for someone who is used to reading code that follows this PEP.
2. To be consistent with surrounding code that also breaks it (maybe for historic reasons) -- although this is also an opportunity to clean up someone else's mess (in true XP style).
3. Because the code in question predates the introduction of the guideline and there is no other reason to be modifying that code.
4. When the code needs to remain compatible with older versions of Python that don't support the feature recommended by the style guide.


## Tools for checking Style:


### flake8:

Linter tool that runs several checks as Syntaxis check, Circular dependencies, and Pep 8 style

### pep8:

Just check for pep8 style guidelines

### pylint

Check syntaxis as other styles guidelines like unused imports
