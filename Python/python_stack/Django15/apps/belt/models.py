from __future__ import unicode_literals
from django.db import models
import re
from django.contrib import messages
import bcrypt

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your models here.

class UserManager(models.Manager):
    def registration_validator(self, postData):
        errors = {}
        if len(postData['name']) < 1:
            errors["name"] = "name cannot be blank"
        if len(postData['alias']) < 1:
            errors["alias"] = "alias cannot be blank"
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
        if len(User.objects.filter(email = postData['email'])) > 0:
            errors["email"] = "invalid email"
        if len(errors) == 0:
            hash_pw = bcrypt.hashpw(postData['password'].encode(), bcrypt.gensalt())
            new_user = User.objects.create(name = postData['name'], alias = postData['alias'], email = postData['email'], password = hash_pw)
            errors['new_user'] = new_user
        return errors

    def login_validator(self, postData):
        errors = {}
        hash1 = User.objects.filter(email = postData['login_email'])

        if hash1:
            if bcrypt.checkpw(postData['login_password'].encode(), hash1[0].password.encode()):
                errors['user'] = hash1[0]
            else:
                errors['invalid_password'] = "invalid email or password"
        else:
            errors['invalid_email'] = "invalid email or password"
        return errors

    def book_adder(self, postData):
        book_adder_data = {}
        errors = {}
        checkbook = Book.objects.filter(title = postData['title'])
        print "postData is: ", postData
        uploader = User.objects.get(id = postData['uploader_id'])
        print "checkbook is: ", checkbook

        if checkbook:
            print "in c"
            book_adder_data['exists'] = "This book already exists"
            return book_adder_data

        else:
            if len(postData['add_author']) > 0:
                print "in a"
                new_book = Book.objects.create(title = postData['title'], author = postData['add_author'], uploader = uploader)
                new_review = Review.objects.create(review = postData['review'], rating = int(postData['rating']), review_user = uploader, book = new_book)
                book_adder_data['new_book_id'] = new_book.id
                book_adder_data['new_review_id'] = new_review.id
                
            else:
                print "in b"
                new_book = Book.objects.create(title = postData['title'], author = postData['author'], uploader = uploader)
                new_review = Review.objects.create(review = postData['review'], rating = int(postData['rating']), review_user = uploader, book = new_book)
                book_adder_data['new_book_id'] = new_book.id
                book_adder_data['new_review_id'] = new_review.id
            
            return book_adder_data

    def review_adder(self, postData):
        print "in review_adder"
        review_adder_data = {}
        reviewer_id = User.objects.get(id = postData['reviewer_id'])
        book_id = Book.objects.get(id = postData['book_id'])
        print "reviewer_id is: ", reviewer_id
        print "book_id is: ", book_id

        new_review = Review.objects.create(review = postData['review'], rating = postData['rating'], review_user = reviewer_id, book = book_id)
        return new_review

    def review_delete(self, postData):
        print "in review_delete"
        
        delete_review = Review.objects.get(id = postData['review_id'])
        return delete_review.delete()

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
    uploader = models.ForeignKey(User, related_name = "uploaded_by")
    created_at = models.DateTimeField(auto_now_add = True)

class Review(models.Model):
    review = models.TextField(default = "")
    rating = models.IntegerField(default = 1)
    review_user = models.ForeignKey(User, related_name = "reviews")
    book = models.ForeignKey(Book, related_name = "reviews")
    created_at = models.DateTimeField(auto_now_add = True)