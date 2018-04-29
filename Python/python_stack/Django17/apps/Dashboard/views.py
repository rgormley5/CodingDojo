from django.shortcuts import render, HttpResponse, redirect

# Create your views here.

def index(request):
    print "in index route"

    return render(request, 'Dashboard/index.html')

def signin(request):
    print "in signin route"


    return render(request, 'Dashboard/signin.html')

def process_signin(request):
    print "in process_signin route"



    return redirect('/')

def home(request):
    print "in home route"


    return render(request, 'Dashboard/')