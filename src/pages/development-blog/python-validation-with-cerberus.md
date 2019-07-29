---
title: "Python 3: Validation with Cerberus"
date: 2018-07-29T01:00:00+00:00
template: development-post
tags: 
image: "./media/blocks.jpg"
---


## Validation

Data validation is an important piece on every Software Applications. It consist of different types of checks to an specific data structure. This checks are commonly but not limited to: data types, data ranges, domains, etc. 

Tools that performs validations usually are capable of doing a process of Normalization. This process changes or transform the data according to another set of specific rules

## Common Applications of Validation:

### Frontend Development:

- Forms validation
- Service validations

### Backend Development:

- API endpoints validations
- Services Validations 
- Data Normalization

## Cerberus

> CERBERUS, n. The watch-dog of Hades, whose duty it was to guard the entrance; everybody, sooner or later, had to go there, and nobody wanted to carry off the entrance. - Ambrose Bierce, The Devil’s Dictionary

[Cerberus](https://docs.python-cerberus.org/en/stable/#) is an extensible and lightweight validation library for Python.

```python
from cerberus import Validator
schema = {'name': {'type': 'string'}}
v = Validator(schema)
# Then you simply invoke the validate() to validate a dictionary against the schema. If validation succeeds, True is returned:
document = {'name': 'john doe'}
result = v.validate(document) 
print(result) # True
```

### Installing cerberus

```bash
pip install cerberus
```

### Basic Usage

```python
from cerberus import Validator
schema = {'name': {'type': 'string'}, 'age': {'type': 'integer', 'min': 10}}
document = {'name': 'Little Joe', 'age': 5}
v = Validator(schema)
result = v.validate(document)
print(result)
print(v.errors) # {'age': ['min value is 10']}
```

### Allowing undefined fields

As a default, `cerberus` does not allow unknown fields:

```python
from cerberus import Validator
schema = {'name': {'type': 'string', 'maxlength': 10}}
v = Validator(schema)
result = v.validate({'name': 'john', 'sex': 'M'})
print(result) # False
print(v.errors) # {'sex': ['unknown field']}
```

You can change that behaviour:

```python
from cerberus import Validator
v = Validator({}, allow_unknown=True)
result = v.validate({'name': 'john', 'sex': 'M'})
print(result)
v.allow_unknown = False
reuslt = v.validate({'name': 'john', 'sex': 'M'})
print(result)
print(v.errors) # {'sex': ['unknown field']}
```

### Common Validation Rules

#### ALLOWED

```python
from cerberus import Validator
v = Validator()
v.schema = {'role': {'type': 'list', 'allowed': ['agent', 'client', 'supplier']}} # ALLOWED
result = v.validate({'role': ['agent', 'supplier']})
print(result)
```

#### CHECK WITH

```python
def oddity(field, value, error):
    if not value & 1:
        error(field, "Must be an odd number")
```

```python
from cerberus import Validator
schema = {'amount': {'check_with': oddity}}
v = Validator(schema)
result = v.validate({'amount': 10})
print(result)
print(v.errors) # {'amount': ['Must be an odd number']}
```

#### CONTAINS

```python
from cerberus import Validator
v = Validator()
v.schema = {'states': {'contains': 'peace'}}
document = {'states': ['peace', 'love', 'inity']}
result = v.validate(document)
print(result)
```

#### EMPTY

```python
from cerberus import Validator
v = Validator()
v.schema = {'name': {'type': 'string', 'empty': False}}
document = {'name': ''}
result = v.validate(document)
print(result)
```

### Normalization

### Renaming

```python
from cerberus import Validator
v = Validator({'foo': {'rename': 'bar'}})
print(v.normalized({'foo': 0}))
{'bar': 0}
```

### Value Coercion

```python
from cerberus import Validator
v = Validator()
v.schema = {'amount': {'type': 'integer', 'coerce': int}}
result = v.validate({'amount': '1'})
print(v.document) #{'amount': 1}

```


### Custom Rules


```python
from cerberus import Validator

class MyValidator(Validator):
    def _validate_isodd(self, isodd, field, value):
        """ Test the oddity of a value.

        The rule's arguments are validated against this schema:
        {'type': 'boolean'}
        """
        if isodd and not bool(value & 1):
            self._error(field, "Must be an odd number")
```


```python
schema = {'amount': {'isodd': True, 'type': 'integer'}}
v = MyValidator(schema)
result = v.validate({'amount': 10})
print(result)
print(v.errors) # {'amount': ['Must be an odd number']}
```

NOTE: This post is based on https://docs.python-cerberus.org/en/stable/#   
