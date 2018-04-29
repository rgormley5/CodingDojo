from django.shortcuts import render, HttpResponse, redirect
from .models import User, Book, Review
from django.contrib import messages
import bcrypt
# Create your views here.

def index(request):
    print 'in index route'

    return render(request, 'belt_review/index.html')

def home(request):
    print "in home route"

    context = {
        "user": User.objects.get(id = request.session['id'])
    }

    return render(request, "belt_review/home.html", context)

def add(request):
    print "in add route"

    return render(request, "belt_review/add.html")

def register(request):
    print "in register route"

    if request.method == "POST":
        errors = User.objects.basic_validator(request.POST)
        if len(errors):
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags = tag)
            print "redirecting to index route"
            return redirect('/')

        else:
            request.session['action'] = request.POST['action']
            pw = request.POST['password']
            hash_pw = bcrypt.hashpw(pw.encode(), bcrypt.gensalt())
            new_user = User.objects.create(name = request.POST['name'], alias = request.POST['alias'], email = request.POST['email'], password = hash_pw)
            request.session['id'] = new_user.id
            print "request.session['id'] is: ", request.session['id']

            print "redirecting to home route"
            return redirect('/books')
    else:
        print "request.method == GET, redirecting to index route"
        return redirect('/')

def login(request):
    print "in login route"
    if request.method == "POST":
        current_user = User.objects.get(email = request.POST['login_email'])
        request.session['id'] = current_user.id
        pw = request.POST['login_password']
        if bcrypt.checkpw(pw.encode(), current_user.password.encode()):
            request.session['id'] = current_user.id
            return redirect('/books')
        else: 
            return redirect('/')
    else:
        print "redirecting to index"
        return redirect('/')

        print "redirecting to home route"
        return redirect('/books')

def logout(request):
    print "in logout"

    request.session.clear()

    return redirect('/')

def add_book(request):
    print "in add_book route"
    uploader = User.objects.get(id = request.session['id'])

    if request.method == "POST":
        print "request.POST is: ", request.POST
        if request.POST['author'] == "Add Author":
            new_book = Book.objects.create(title = request.POST['title'], author = request.POST['add_author'], uploader = uploader)
            # book_reviewed = Book.objects.get(id = new_book.id)
            new_review = Review.objects.create(review = request.POST['review'], rating = int(request.POST['rating']), review_user = uploader, book = new_book)
            # request.session['review_count'] += 1
        else:
            new_book = Book.objects.create(title = request.POST['title'], author = request.POST['author'], uploader = uploader)
            # book_reviewed = Book.objects.get(id = new_book.id)
            new_review = Review.objects.create(review = request.POST['review'], rating = int(request.POST['rating']), review_user = uploader, book = new_book)
            # request.session['review_count'] += 1
        request.session['review_id'] = new_review.id
        print "new_book.id is: ", new_book.id
        print "new_review.id is: ", new_review.id
        return redirect('/books/' + str(new_book.id))

def show_book(request, id):
    print "in show_book route"
    book = Book.objects.get(id = id)

    review = Review.objects.all()

    context = {
        "book": book,
        "all_review": review
    }

    return render(request, 'belt_review/show_book.html', context)

def add_review(request, id):
    print "in add_review route"

    uploader = User.objects.get(id = request.session['id'])
    book_reviewed = Book.objects.get(id = id)
    
    if request.method == "POST":
        new_review = Review.objects.create(review = request.POST['add_review'], rating = int(request.POST['add_rating']), review_user = uploader, book = book_reviewed)
        # request.session['review_count'] += 1

        return redirect('/books/' + id)

def display_user(request, id):
    print "in display_user route"
    print "Review.objects.all() is: ", Review.objects.all()
    reviews = Review.objects.all()

    context = {
        "user": User.objects.get(id = id),
        "reviews": Review.objects.all()
    }

    return render(request, 'belt_review/user.html', context)