from __future__ import unicode_literals
from django.db import models

# Create your models here.

class UserManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['fname']) < 1:
            errors["fname"] = "fname cannot be blank"
        if len(postData['lname']) < 1:
            errors["lname"] = "lname cannot be blank"
        if len(postData["email"]) < 1:
            errors["email"] = "email cannot be blank"
        return errors

# class UserCreator(models.Manager):
#     def create_user(self, postData):
#         new_user = {}


class User(models.Model):
    fname = models.CharField(max_length = 40)
    lname = models.CharField(max_length = 40)
    email = models.CharField(max_length = 100)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UserManager()

