from django.shortcuts import render, HttpResponse, redirect
from .models import User
from django.contrib import messages

# Create your views here.

def index(request):
    print "in index route"

    return redirect('/users')

def users(request):
    print "in users route"
    # print "User.objects.all() shows this: ", User.objects.all()

    # for i in User.objects.all():
    #     print "i is: ", i.fname

    context = {
        "all": User.objects.all()
    }

    return render(request, 'index.html', context)

def new(request):
    print "in new route"

    return render(request, 'new.html')

def create(request):
    print "in create route"
    
    errors = User.objects.basic_validator(request.POST)
    print "errors is: ", errors
    print "request.POST is: ", request.POST

    # if request.method = POST
    if len(errors):
        for tag, error in errors.iteritems():
            messages.error(request, error, extra_tags = tag)
        return redirect('/users/new')

    else: 
        print "no create user errors, adding users to db now"
        User.objects.create(fname = request.POST['fname'], lname = request.POST['lname'], email = request.POST['email'])



        print "redirecting to /users"
        return redirect('/users')
        # this needs to redirect to users/<id>

def show(request, id):
    print "in show route"

    context = {
        'all': User.objects.get(id = id)
    }

    return render(request, 'view.html', context)

def edit(request, id):
    print "in edit route"
    # Just displaying form for specific user

    request.session['id'] = id
    print "request.session['id'] is: ", request.session['id']

    context = {
        "id": id
    }

    return render(request, 'edit.html', context)

def update(request):
    print "in update route"
    print "request.POST is: ", request.POST

    temp = User.objects.get(id = request.session['id'])
    temp.fname = request.POST['edit_fname']
    temp.lname = request.POST['edit_lname']
    temp.email = request.POST['edit_email']
    temp.save()

    return redirect('/users/' + request.session['id'])

def destroy(request, id):
    print "in destroy route"

    temp = User.objects.get(id = id)
    temp.delete()

    return redirect('/users')