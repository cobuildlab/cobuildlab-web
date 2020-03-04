---
title: Solid principles in Python and Django
date: 2018-10-28T01:00:00+00:00
tags: 
template: development-post
image: /media/blocks.jpg
---

## SOLID

```
We can't say that a software always changes, we just know that 99% of the time does... 
```

**S.O.L.I.D.** is an acronym for the 5 most popular **Object Oriented Principles** promoted by [Robert Martin] (https://en.wikipedia.org/wiki/Robert_C._Martin)

**Object Oriented Principles** are a set of common practices in Object Oriented Programming (not exclusively) to make software more decoupled, maintainable, extensible, testable, debuggable and easier to change.

### These Principles are:

1. Single responsibility principle:

A class should have only a single responsibility (i.e. changes to only one part of the software's specification should be able to affect the specification of the class).

2. Open/closed principle:

"software entities … should be open for extension, but closed for modification."

3. Liskov substitution principle

"objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program." See also design by contract.

4. Interface segregation principle

"many client-specific interfaces are better than one general-purpose interface."

5. Dependency inversion principle

one should "depend upon abstractions, not concretions."

> [Wikipedia] (https://en.wikipedia.org/wiki/SOLID)


## Object Oriented Programming

OOP is a paradigm or pattern fo software programming that models the solution to a problem with objects interacting with each other. 

These objects are composed by a state or attributes and behavior or functionality and the interaction between them is often referred as messaging.

### Common elements of OOP

1. **Object:** A set of related state (data) and behavior (functions)
2. **Class:** Is a template, blueprint or prototype from which the objects are created
3. **Inheritance and Composition:** Extension mechanisms to share and extend behavior between classes and objects
4. **Interface:** A contract that a class or object conveys with the outside world for a set of functionality or behavior
5. **Method:** Is a piece of code or function scoped within an object or class
6. **Client:** An external entity or system that make uses of an object or a class, it could be also another object or class.
7. **Abstraction, Generalization or Super Type**: It is a relationship between objects and classes to denote an "is a" relationship.

`Show me the code`

## Single Responsibility Principle

> A class should have one and only one reason to change, meaning that a class should have only one job.

The more responsibilities a class has, the more change requests it will get, and the harder those changes will be to implement.

A responsibility can be defined as a reason for change. Whenever we think that some part of our code is potentially a responsibility, we should consider separating it from the class. [Source] (https://hackernoon.com/solid-principles-made-easy-67b1246bcdf)

> Not very good

```python
class Survery_Stats(APIView):

    def post(self, request):
    	# Auth
		if request.data.user is None:
			return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

		# Validation
		if request.data.get("answer1",None) is None:
			return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

		# Business Logic		
		survey = Survey.objects.create(answer1=request.data.get("answer1"))
        serializer = surveys_serializers.Survey_Stats(data=survey, many=False)
        # External Services
        email = Email("localhost", "New survey", survey.email)
        email.send()
        
        # Serialization
        return Response(serializer.data, status=status.HTTP_201_CREATED)

```

> Better

```python
class Survery_Stats(APIView):
	# Auth
	permission = (IsAuthenticaded)
	
    def post(self, request):
		# Validation
		validate_survey(request.data)

		# Business Logic		
		survey_services.create(request.data)
        
	    # Serialization
        return Response(serializer.data, status=status.HTTP_201_CREATED)

```


## Open / Closed Principle

> Objects and entities should be open for extension and closed for modification

One should be available to extend or change the behavior of a class without the necessity of changing the source code.

One way in which this can be achieved understanding the concepts of inheritance and composition.

> Example 1

```python
class SurveryValidator():

    def validate(self):
    	if self.data.answer1 is None:
	    	raise ValidationError("No answer 1 provided")
    	if self.data.answer2 is None:
	    	raise ValidationError("No answer 2 provided")

class SimpleSurveyValidator(SurveryValidator)

    def validate(self):
    	if self.data.answer1 is None:
	    	raise ValidationError("No answer 1 provided")

class ComplexSurveyValidator(SurveryValidator)

    def validate(self):
    	super(ComplexSurveyValidator, self).validate()
    	if self.data.answer3 is None:
	    	raise ValidationError("No answer 3 provided")

```

> Example 2

```python
class Piece():
	def __init__(self, color):
		self.color = color
	
	def move(self):
		raise Exception("Not Implemented")
		
class Horse(Piece):
	
	def move(self):
		# move logic
		pass
		
class Tower(Piece):
	
	def move(self):
		# move logic
		pass
		
		
```


## Liskov substitution principle

> Let q(x) be a property provable about objects of x of type T. Then q(y) should be provable for objects y of type S where S is a subtype of T.

In simpler terms means that a subclass, child or specialization of an object or class must be suitable by its Parent or SuperClass.


> Example 1

```python
class User():

    def __init__(self, color, board):
    	create_pieces()
    	self.color = color
    	self.board = board
	
	def move(self, piece:Piece, position:int):
		piece.move(position)
		chessmate_check()

board = ChessBoard()
user_white = User("white", board)
user_black = User("black", board)
pieces = user_white.pieces
horse = helper.getHorse(user_white, 1)
user.move(horse)
	
```


## Interface Segregation Principle

> Many client-specific interfaces are better than one general-purpose interface

The interface-segregation principle (ISP) states that no client should be forced to depend on methods it does not use. ISP splits interfaces that are very large into smaller and more specific ones so that clients will only have to know about the methods that are of interest to them. Such shrunken interfaces are also called role interfaces. ISP is intended to keep a system decoupled and thus easier to refactor, change, and redeploy. ISP is one of the five SOLID principles of object-oriented design, similar to the High Cohesion Principle of GRASP. [Source] (https://en.wikipedia.org/wiki/Interface_segregation_principle)


> Example 1

```python
class BankAccount():

    def __init__(self, color, board):
		pass
	
	def deposit(self):
		pass
	
	def balance(self):
		pass
	
	def withdraw(self):
		pass


class BankAccountProxy():
	def __init__(self, account:BankAccount):
		self.account = account
	
	def deposit(self):
		pass
	
	def balance(self):
		pass
	
	def withdraw(self):
		pass

class OnlyWithdrawOperator()
	def __init__(self, proxy: BankAccountProxy):
		self.account = account
	def withdraw(self):
		pass
	def balance(self):
		pass


class OnlyDepositOperator()
	def __init__(self, proxy: BankAccountProxy):
		self.account = account
	
	def deposit(self):
		pass

# Then
class POS(OnlyDepositOperator):
	pass
	
```


## Dependency Inversion Principle

> Entities must depend on abstractions not on concretions. It states that the high level module must not depend on the low level module, but they should depend on abstractions.


> Not very good

```python
class AuthenticationForUser():

    def __init__(self, connector:Connector):
		self.connection = connector.connect()
	
	def authenticate(self, credentials):
		pass
	
	def is_authenticated(self):
		pass

class AnonymousAuth(AuthenticationForUser):
	pass

class GithubAuth(AuthenticationForUser):
	def last_login(self):
		pass

class FacebookAuth(AuthenticationForUser):
	pass


class Permissions()
	def __init__(self, auth: GithubAuth)
		self.auth = auth
		
	def has_permissions():
		pass
		

# NOTICE
class IsLoggedInPermissions (Permissions):
	def last_login():
		return auth.last_login()
	
```


> Better

```python
class AuthenticationForUser():

    def __init__(self, connector:Connector):
		self.connection = connector.connect()
	
	def authenticate(self, credentials):
		pass
	
	def is_authenticated(self):
		pass
	
	def last_login(self):
		pass

class AnonymousAuth(AuthenticationForUser):
	pass

class GithubAuth(AuthenticationForUser):
	def last_login(self):
		pass

class FacebookAuth(AuthenticationForUser):
	pass


class Permissions()
	def __init__(self, auth: AuthenticationForUser)
		self.auth = auth
		
	def has_permissions():
		pass
		

# NOTICE
class IsLoggedInPermissions (Permissions):
	def last_login():
		return auth.last_login()
	
```

<br/>
<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=gurupia-20&marketplace=amazon&region=US&placement=1449355730&asins=1449355730&linkId=9921c500f5c33fc2acee6a60b7506f1c&show_border=true&link_opens_in_new_window=true&price_color=333333&title_color=0066c0&bg_color=ffffff">
    </iframe>
<br/>

## References

- <https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design>
- <https://hackernoon.com/solid-principles-made-easy-67b1246bcdf>
