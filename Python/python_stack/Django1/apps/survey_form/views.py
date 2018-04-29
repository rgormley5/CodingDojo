from django.shortcuts import render, HttpResponse, redirect

# Create your views here.

def index(request):
    print "in index route lalalala"
    return render(request, 'Django1/index.html')

def process_form(request):
    print "processing form"
    print "request.method is: ", request.method
    print "request.POST is: ", request.POST
    request.session['form_data'] = request.POST

    if 'count' not in request.session:
        request.session['count'] = 0

    else: request.session['count'] += 1

    return redirect('/result')

def result(request):
    print "in result route"
    print "form_data_name is: ", request.session['form_data']['name']
    context = {
        'name': request.session['form_data']['name'],
        'location': request.session['form_data']['location'],
        'language': request.session['form_data']['language'],
        'comment': request.session['form_data']['comment'],
        'count': request.session['count']
    }  

    return render(request, 'Django1/result.html', context)