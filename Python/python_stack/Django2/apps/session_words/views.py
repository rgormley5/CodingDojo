from django.shortcuts import render, HttpResponse, redirect
from datetime import datetime
from time import gmtime, strftime

now = strftime("%Y-%m-%d %H:%M:%S", gmtime())
print "now is: ", now

# Create your views here.

def index(request):
    print "in index route"
    context = {
        "word_list": request.session['all_data'],
        "created_at": now
    }
    return render(request, 'index.html', context)

def process(request):
    print "in process route"
    print "request.POST is: ", request.POST

    if 'form_data' not in request.session:
        request.session['all_data'] = []
        print "request.session['all_data'] is: ", request.session['all_data']

    else:
        request.session['new_word'] = {}
        request.session['new_word']['word'] = request.POST['word']
        request.session['new_word']['created_at'] = now
        request.session['new_word']['color'] = request.POST['color']
        request.session['new_word']['font'] = request.POST['font']
        print "new_word is: ", request.session['new_word']
        request.session['all_data'].append(request.session['new_word'])
        print "request.session['all_data'] is now: ", request.session['all_data']
    
    # all_data = []
    # print "all_data is: ", all_data

    # request.session['form_data'] = request.POST
    # abc = {request.session['form_data']}
    # print "abc is: ", abc

    # all_data.append(request.POST)
    # print "all_data is now: ", all_data

    print "redirecting to index route"
    return redirect('/')