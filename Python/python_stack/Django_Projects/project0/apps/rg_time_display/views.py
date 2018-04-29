from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime
from datetime import datetime

# Create your views here.

print "in project0 > apps > views.py"

def index(request):
    print "in index route"
    context = {
        "time": strftime("%Y-%m-%d %H:%M %p", gmtime())
    }
    print "context", context['time']
    return render(request,'rg_time_display/index.html', context)