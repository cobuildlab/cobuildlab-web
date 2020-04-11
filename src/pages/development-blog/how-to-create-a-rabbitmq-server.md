---
title: 'How to create a RabbitMQ User'
date: 2018-09-24T15:31:26+00:00
tags: 
template: development-post
permalink: /how-to-create-a-rabbitmq-user/
image: ./media/04/1_6WSm4DEcxYwf4-wDuh_wLQ.png
---

# How to create a RabbitMQ user

After you install the rabbitmq-server it is normal that you secure the service and create a new user for accessing the service.

I usually use rabbitmq for celery tasks. So this is a normal step to do.

Remember that RabbitMQ comes with a admin command: `rabbitmqctl` and this is what we are gonna use.

## 1. Deleting the default GUEST user

As a default rabbit comes with a `guest` user that can connect from localhost without a password. So we delete that first:

`rabbitmqctl delete_user guest`

## 2. Now, we create a virtual host for our purposes

`rabbitmqctl add_vhost my_app`

## 3. Create the new user

`rabbitmqctl add_user my_user my_password`

## 4. create permissions for the user in the vhost

`rabbitmqctl set_permissions -p my_app my_user ".*" ".*" ".*"`

About permissions and access control, you can find more information here:

https://www.rabbitmq.com/rabbitmqctl.8.html
