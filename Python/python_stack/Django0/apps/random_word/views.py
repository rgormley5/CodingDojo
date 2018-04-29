from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string

get_random_string(length=14)

# Create your views here.

print "in views.py"

def index(request):
    print "in index route"

    if not "count" in request.session:
        request.session['count'] = 0
        print "request.session['count'] is: ", request.session['count']
        return render(request, 'Django0/index.html')

    else:
        request.session['count'] += 1
        context = {
            "random_string": request.session['random_string'],
            "number": request.session['count']
        }
        return render(request, 'Django0/index.html', context)

def process_form(request):
    request.session['random_string'] = get_random_string(length=14)
    print "request.method is: ", request.method
    print "request.POST is: ", request.POST
    print "request.session['random_string']", request.session['random_string']
    print "request.session['count'] is: ", request.session['count']
    print "get_random_string is: ", get_random_string
    return redirect('/')

def reset(request):
    print "in reset route"
    request.session['count'] = 0
    return redirect('/')