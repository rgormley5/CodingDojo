from django.shortcuts import render, HttpResponse, redirect
from .models import Course

# Create your views here.

def index(request):
    print "in index route"

    context = {
        "all": Course.objects.all
    }

    return render(request, 'index.html', context)

def process(request):
    print "in process route"
    print "request.POST is: ", request.POST
    print "request.POST['name'] is: ", request.POST['name']
    print "request.POST['description'] is: ", request.POST['description']

    # add new course from form data
    Course.objects.create(name = request.POST['name'], description = request.POST['description'])

    return redirect('/')

def destroy(request, id):
    print "in destroy"

    context = {
        "course": Course.objects.get(id = id)
    }

    return render(request, 'destroy.html', context)

def no(request, id):
    print "in no route"

    return redirect('/')

def yes(request, id):
    print "in yes route"

    temp = Course.objects.get(id = id)
    temp.delete()

    return redirect('/')