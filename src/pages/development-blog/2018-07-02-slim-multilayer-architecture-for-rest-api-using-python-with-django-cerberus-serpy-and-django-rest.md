---
id: 771
title: SLIM Multilayer Architecture for REST API using Python with Django, Cerberus, Serpy and Django Rest
date: 2018-07-02T17:32:18+00:00
tags: 
template: development-post
image: ./media/04/1_6WSm4DEcxYwf4-wDuh_wLQ.png
---
This is a very SLIM architecture proposal for API REST with Python using Django.

Personally, i like the use of Django REST. At the beginning make things very simple, but when you have a large application this way of doing things just wouldn&#8217;t work.

So, I propose a new, scalable and pluggable way of doing things based on 4Geeks experience these last few years using Django Rest Framework.

Some of the decisions that I make for doing this are based on the SOLID principles: https://en.wikipedia.org/wiki/SOLID\_(object-oriented\_design) especially separation of Concerns.

## SLIM Multilayer Proposal

So my layers would be like this:

  1. Presentation Layer: Used for translation from HTTP to Python and Python to HTTP
  2. Authentication and Authorization Layer: for identifying the user and his information and permissions
  3. Service Layer: For executing the Business Logic
  4. Validation Layer: For validating the integrity and constraint of the data that is gonna be store
  5.  Data Layer: Orm layer

### Presentation Layer:

Represented by a URL of the router function of DRF and a ViewSet of DRF as well:

_**urls.py**_

<pre class="prettyprint">router.register(r'bank-account', BankAccountUserView)</pre>

_**views.py**_

<pre class="prettyprint">class BankAccountUserView(viewsets.ViewSet):
    """
    Bank Account View for the Users
    """
    permission_classes = [permissions.IsAuthenticated, permissions.IsPilot]
    queryset = BankAccount.objects.all()
    serializer_class = BankAccountUserSerializer

    def create(self, request):
        service = BankAccountService()

        try:
            data = service.create(request.data, request.user)
        except Exception as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

        return Response(BankAccountUserSerializer(data, many=False).data, status=status.HTTP_201_CREATED)

    def list(self, request):
        service = BankAccountService()
        try:
            data = service.list(request.user)
        except Exception as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

        return Response(BankAccountUserSerializer(data, many=True).data, status=status.HTTP_200_OK)

    def retrieve(self, request, pk=None):
        obj = BankAccount.objects.filter(pk=pk).first()

        if obj is None:
            return Response("Not Found", status=status.HTTP_404_NOT_FOUND)

        serializer = BankAccountUserSerializer(obj)
        data = serializer.data
        return Response(data, status=status.HTTP_200_OK)

    def update(self, request, pk=None):
        service = BankAccountService()
        try:
            data = service.update(pk, request.data, request.user)
        except Exception as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

        return Response(BankAccountUserSerializer(data, many=False).data, status=status.HTTP_200_OK)

    def partial_update(self, request, pk=None):
        return self.update(request, pk)

    def destroy(self, request, pk=None):
        service = BankAccountService()
        try:
            service.delete(pk, request.user)
        except BankAccount.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

        return Response("Deleted", status=status.HTTP_200_OK)</pre>

One of the good things that I like about DRF is the router function combine with the ViewSet for URLs resolution:

GET /bank-account/ maps to **list** function

GET /bank-account/1/ maps to **retrieve** function

POST /bank-account/ maps to **create** function

and so on, more info on: http://www.django-rest-framework.org/api-guide/viewsets/

(in addition, you can extend easily this behavior using detail\_rout and list\_route decorator)

Notice that for Serialization (Python to JSON) I use serpy[ library](https://github.com/clarkduvall/serpy), a faster alternative to DRF Serializers:

_**serializers.py**_

<pre class="prettyprint">class BankAccountUserSerializer(serpy.Serializer):
    """
    Serializer for the Bank Account Model, for the User purposes
    """
    id = serpy.Field()
    bank_name = serpy.Field()
    number = serpy.Field()
    address = serpy.Field()
    holder_name = serpy.Field()
    swift = serpy.Field()
    aba = serpy.Field()
    phone_number = serpy.Field()
    user_id = serpy.MethodField()
    status = serpy.Field()

    def get_user_id(self, obj):
        if obj.user is not None:
            return obj.user.id</pre>

### Authentication and Authorization Layer:

Django Rest makes a really good proposal using his permissions classes on a ViewSet level:

_**permissions.py**_

<pre class="prettyprint">class TermsAccepted(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in ['POST', 'PUT']:
            return request.user.is_accept_terms()
        return True

    def has_permission(self, request, view):
        if request.method in ['POST', 'PUT']:
            return request.user.is_accept_terms()
        else:
            return True
</pre>

It&#8217;s important to notice that, even if you are implementing a URL / ViewSet permissions that&#8217;s not enough and this is where I start to deviate my self from DRF.

if you implement functions or Business Logi Methods outside the Views then these are unprotected, meaning that your application is not extensible anymore. Pain **point for DRF.**

### Service Layer:

For executing the Business Logic we choose to create separated services.py where you can arrange and combine business logic as you want.

A complex example of DataBase transactions is presented here:

_**services.py**_

<pre class="prettyprint">class BuyFlightServices:
    """
    Services for buying flights
    """

    def buy_as_vip(self, data: dict, user: User) -&gt; PaymentHistory:
        """
        Buy a flight as a VIP Payment Method (only for VIP Users)
        This method fails if the Notification service is not available

        :param data: the flight data
        :param user: The user who performs the action
        :return: the Payment Information
        """
        if user is None or user.is_active is False:
            raise ValueError("A Valid and Active User must be provided")

        if user.is_vip is False:
            raise ValueError("Must be a VIP User to buy a Fligh as VIP")

        flight_id = data.get('flight_id', None)

        if flight_id is None:
            raise ValueError("The field 'flight_id' is required")

        with transaction.atomic():
            flight = Flight.objects.select_for_update().get(id=flight_id)

            if flight.disponibility not in ['di', 'rb']:
                raise ValueError("Flight not available: {}".format(flight.get_disponibility_display()))

            flight.buyer = user

            payment_service = PaymentHistoryServices()
            payment = payment_service.create_vip_payment(float(flight.price), user)

            flight.payment = payment
            flight.disponibility = PAGADO
            flight.save()

            flightPurchase.delay(payment.id)

        return payment</pre>

Notice the Use of Errors, Exceptions, Transactions, And Validation.

In a later revision, this validation should be the same use in the ViewSet level for staying to the DRY principle.

### Validation Layer:

For validating the integrity and constraint of the data that is gonna be stored. I tried before DRF serializers and Django Forms, both too heavy to only do validation, so I tested [Cerberus library](http://docs.python-cerberus.org/en/stable/) and so far so good

_**validators.py**_

<pre class="prettyprint">class PaymentHistoryVIPValidator:
    """
        Validator Class for VIP Payment
    """

    schema = {
        'buyer_id': {'type': 'integer', 'empty': False, 'nullable': False},
        'status': {'type': 'string', 'allowed': [i[0] for i in STATUS_PAYMENT]},
        'commission_id': {'type': 'integer', 'empty': False, 'nullable': False},
        'payerID': {'type': 'string', 'empty': True, 'nullable': True},
        'paymentId': {'type': 'string', 'empty': True, 'nullable': True},
        'paymentMethod': {'type': 'string', 'allowed': [i[0] for i in PAYMENT_METHOD], 'nullable': False},
        'typeTransaction': {'type': 'string', 'allowed': [i[0] for i in TYPE_TRANSACTION], 'nullable': False},
        'amount': {'type': 'number', 'empty': False, 'nullable': False},
        'liable': {'type': 'string', 'empty': True, 'nullable': True},
        'code': {'type': 'string', 'empty': False, 'nullable': False},
    }

    def __init__(self, data):
        self.validator = Validator()
        self.data = data
        self.schema = self.__class__.schema

    def validate(self):
        return self.validator.validate(self.data, self.schema)

    def errors(self):
        return self.validator.errors</pre>

Just a Wrapper, to be improved in next iteration

### Data Layer:

Orm layer. Just plain old Django ORM (which i love)

<pre class="prettyprint">return PaymentHistory.objects.create(**data)</pre>

## Conclusions:

&nbsp;

  * This is just a Draft that we are testing in the office for improving extension in our code base
  * We remove almost every barrier that we have encountered so far using DRF, but i&#8217;m sure that we generate some new ones to be conquered.
  * I hope in a couple of weeks to improve all of this.

&nbsp;

&nbsp;

&nbsp;
