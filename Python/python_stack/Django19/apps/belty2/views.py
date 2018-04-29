from django.shortcuts import render, HttpResponse, redirect
from .models import User, Item
from django.contrib import messages
import bcrypt

def index(request):
    print "in index route"

    return redirect('/main')

def main(request):
    print "in main route"

    return render(request, 'belty2/index.html')

def registration(request):
    print "in registration route"
    if request.method == "POST":
        print "request.POST is: ", request.POST
        errors = User.objects.basic_validator(request.POST)
        if 'new_user' in errors:
            request.session['id'] = errors['new_user'].id
            request.session['action'] = request.POST['action']
            return redirect('/dashboard')
        else:
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags = tag)

            return redirect('/')
    else:
        print "request.method == request.GET"
        return redirect('/')

def login(request):
    print "in login route"

    if request.method == "POST":
        errors = User.objects.login_validator(request.POST)
        if 'user' in errors:
            request.session['id'] = errors['user'].id
            request.session['name'] = errors['user'].name
            request.session['action'] = request.POST['action']
            return redirect('/dashboard')
        else:
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags = tag)

            return redirect('/')

    else:
        print "redirecting to index"
        return redirect('/')

def logout(request):
    print "in logout route"

    request.session.clear()

    return redirect('/')

def dashboard(request):
    print 'in dashboard route'



    return render(request, 'belty2/home.html')