from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
print "in apps > blog > views"

def index(request):
    print "in blogs views"
    response = "placeholder to later display all the list of blogs"
    return HttpResponse(response)

def new(request):
    response = "placeholder to display a new form to create a new blog"
    return HttpResponse(response)

def create(request):
    return redirect('/')

def show(request, number):
    print "number is: ", number
    return HttpResponse("placeholder to display blog" + number)

def edit(request, number):
    print "number is: ", number
    return HttpResponse("placeholder to edit blog" + number)

def destroy(request, number):
    print "in delete method"
    print "number is: ", number
    return redirect('/')