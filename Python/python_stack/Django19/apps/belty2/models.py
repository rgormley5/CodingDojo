from __future__ import unicode_literals
from django.db import models
import re
import bcrypt

# Create your models here.

class UserManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['name']) < 3:
            errors["name"] = "name must be at least 2 chars"
        if len(postData['username']) < 1:
            errors["username"] = "username cannot be blank"
        if len(User.objects.filter(username = postData['username'])) > 0:
            errors["username"] = "username taken"
        if len(postData['password']) < 8:
            errors["password"] = "password must be at least 8 characters"
        if len(postData['confirm']) < 1:
            errors["confirm"] = "confirm cannot be blank"
        if not postData['password'] == postData['confirm']:
            errors["password"] = "passwords must match"
        if len(errors) == 0:
            hash_pw = bcrypt.hashpw(postData['password'].encode(), bcrypt.gensalt())
            new_user = User.objects.create(name = postData['name'], username = postData['username'], password = hash_pw, date = postData['date'])
            errors['new_user'] = new_user
        return errors

    def login_validator(self, postData):
        errors = {}
        hash1 = User.objects.filter(username = postData['username'])
        if hash1:
            if bcrypt.checkpw(postData['login_password'].encode(), hash1[0].password.encode()):
                errors['user'] = hash1[0]
            else:
                errors['invalid_password'] = "invalid password"
        else:
            errors['no_email'] = "invalid username"
        return errors

class User(models.Model):
        name = models.CharField(max_length = 100)
        username = models.CharField(max_length = 100)
        password = models.CharField(max_length = 100)
        date = models.DateField(default = "")
        created_at = models.DateTimeField(auto_now_add = True)
        objects = UserManager()

class Item(models.Model):
        name = models.CharField(max_length = 100)
        creator = models.ForeignKey(User, related_name = "items")
        wishlists = models.ManyToManyField(User, related_name = "wishlist")
        created_at = models.DateTimeField(auto_now_add = True)
