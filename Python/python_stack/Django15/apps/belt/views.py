from django.shortcuts import render, HttpResponse, redirect
from .models import User, Book, Review
from django.contrib import messages
import bcrypt

# Create your views here.

def index(request):
    print "in index route"

    return render(request, 'index.html')

def register(request):
    print "in register route"

    if request.method == "POST":
        errors = User.objects.registration_validator(request.POST)
        if 'new_user' in errors:
            request.session['id'] = errors['new_user'].id
            request.session['action'] = request.POST['action']
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags = tag)
            
            print "redirecting to home route"
            return redirect('/home')

        else:
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags = tag)
            
            print "redirecting to index route"
            return redirect('/')

def login(request):
    print "in login route"

    if request.method == "POST":
        errors = User.objects.login_validator(request.POST)
        if 'user' in errors:
            request.session['id'] = errors['user'].id
            request.session['alias'] = errors['user'].alias
            return redirect('/home')
        else:
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags = tag)
            return redirect('/')

def home(request):
    print "in home route"

    user = User.objects.get(id = request.session['id'])

    context = {
        "user": user
    }

    return render(request, 'home.html', context)

def logout(request):
    print "in logout route"

    request.session.clear()

    return redirect('/')

def create_book(request):
    print "in add route"


    return render(request, 'add.html')

def process_book(request):
    print "in process book route"
    print "request.POST is: ", request.POST

    if request.method == "POST":
        book_adder_data = User.objects.book_adder(request.POST)
        errors = User.objects.book_adder(request.POST)
                    
        if 'exists' in book_adder_data:
            print "in exists"
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags = tag)
            return redirect('/books/add')
        
        else:
            print "book_adder_data is: ", book_adder_data
            print "book_adder_data['new_book_id'] is: ", book_adder_data['new_book_id']
            print "book_adder_data['new_review_id'] is: ", book_adder_data['new_book_id']
            print "book_adder_data.new_book_id is: ", book_adder_data['new_book_id']


            print "done"
            return redirect('/books/' + str(book_adder_data['new_book_id']))

def show(request, id):
    print "in show route"

    book = Book.objects.get(id = id)
    all_reviews = Review.objects.all()

    context = {
        "book": book,
        "all_reviews": all_reviews
    }

    return render(request, 'show.html', context)

def process_review(request, id):
    print "in process_review route"
    new_review = User.objects.review_adder(request.POST)
    print "added new_review"


    print "redirecting to show/<id>"
    return redirect('/books/' + str(id))

def delete(request, id):
    print "in delete route"
    delete_review = User.objects.review_delete(request.POST)
    print "deleted review"

    return redirect('/books/' + str(id))

def user(request, id):
    print "in user route"
    user = User.objects.get(id = id)
    all_reviews = Review.objects.all()
    user_reviews = user.reviews.all()

    context = {
        "user": user,
        "all_reviews": all_reviews,
        "user_reviews": len(user_reviews)
    }

    return render(request, 'user.html', context)