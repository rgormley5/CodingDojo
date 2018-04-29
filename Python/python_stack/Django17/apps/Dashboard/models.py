from __future__ import unicode_literals
from django.db import models

# Create your models here.



class User(models.Model):
    fname = models.CharField(max_length = 100)
    lname = models.CharField(max_length = 100)
    email = models.CharField(max_length = 100)
    user_level = models.CharField(max_length = 20)
    desc = models.TextField(default = "")
    created_at = models.DateTimeField(auto_now_add = True)

class Message(models.Model):
    content = models.TextField(default = "")
    user = models.ForeignKey(User, related_name = "messages")
    created_at = models.DateTimeField(auto_now_add = True)

class Comment(models.Model):
    content = models.TextField(default = "")
    commenter = models.ForeignKey(User, related_name = "comments")
    message = models.ForeignKey(Message, related_name = "comment")
    created_at = models.DateTimeField(auto_now_add = True)