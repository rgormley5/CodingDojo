from django.shortcuts import render, HttpResponse, redirect
from .models import User, Book, Review
from django.contrib import messages
import bcrypt
# Create your views here.

def index(request):
    print "in index route"

    return render(request, 'belt/index.html')

def register(request):
    print "in register route"

    if request.method == "POST":
        print "in here"
        errors = User.objects.registration_validator(request.POST)
        print "errors is: ", errors
        if 'new_user' in errors:
            request.session['id'] = errors['new_user'].id
            print "request.POST is: ", request.POST
            request.session['action'] = request.POST['action']
            return redirect('/home')
        else:
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags = tag)
            return redirect('/')

def login(request):
    print "in login route"

    if request.method == "POST":
        errors = User.objects.login_validator(request.POST)
        if 'user' in errors:
            print "user in errors"
            request.session['id'] = errors['user'].id
            return redirect('/home')
        else:
            print "user not in errors"
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags = tag)
            return redirect('/')

def logout(request):
    print "in logout route"

    request.session.clear()

    return redirect('/')

def home(request):
    print "in home route"
    user = User.objects.get(id = request.session['id'])

    context = {
        "user": user
    }

    return render(request, 'belt/home.html', context)

def add_book(request):
    print "in add_book route"



    return render(request, 'belt/add.html')

def process_book(request):
    print "in process_book route"

    if request.method == "POST":
        book_adds = User.objects.book_adder(request.POST)
        print "book_adds['new_book'] is: ", book_adds['new_book']

        return redirect('/books/' + str(book_adds['new_book'].id))

def display_book(request, id):
    print "in display_book route"

    book = Book.objects.get(id = id)
    all_reviews = Review.objects.all()

    context = {
        "book": book,
        "all_reviews": all_reviews
    }

    return render(request, 'belt/book.html', context)

def process_review(request, id):
    print "in process_review route"

    if request.method == "POST":
        review_adds = User.objects.review_adder(request.POST)

    return redirect('/books/' + id )

def delete_review(request, id):
    print "in delete_review route"

    if request.method == "POST":
        delete_review = User.objects.delete_review(request.POST)
        return redirect('/books/' + id )