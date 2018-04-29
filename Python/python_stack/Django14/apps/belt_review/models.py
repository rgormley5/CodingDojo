from __future__ import unicode_literals
from django.db import models
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your models here.

class UserManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['name']) < 1:
            errors["name"] = "name cannot be blank"
        if len(postData['email']) < 1:
            errors["email"] = "email cannot be blank"
        if len(postData['password']) < 1:
            errors["password"] = "password cannot be blank"
        if len(postData['confirm']) < 1:
            errors["confirm"] = "confirm cannot be blank"
        if not EMAIL_REGEX.match(postData['email']):
            errors["email"] = "invalid email format"
        if not postData['password'] == postData['confirm']:
            errors["password"] = "passwords must match"
        # check for registering an email that's already in the db
        #   if User.objects.filter(email = request.POST['email']) > 0, then say email taken
        return errors

class User(models.Model):
    name = models.CharField(max_length = 100)
    alias = models.CharField(max_length = 100)
    email = models.CharField(max_length = 100)
    password = models.CharField(max_length = 100)
    created_at = models.DateTimeField(auto_now_add = True)
    objects = UserManager()

class Book(models.Model):
    title = models.CharField(max_length = 100)
    author = models.CharField(max_length = 100)
    created_at = models.DateTimeField(auto_now_add = True)
    uploader = models.ForeignKey(User, related_name = "uploaded_by")

class Review(models.Model):
    review = models.TextField(default = "")
    rating = models.IntegerField(default = 1)
    review_user = models.ForeignKey(User, related_name = "reviews")
    book = models.ForeignKey(Book, related_name = "reviews")
    created_at = models.DateTimeField(auto_now_add = True)