from django.shortcuts import render, HttpResponse, redirect
from random import randint

# Create your views here.

def index(request):
    print "in index route"
    context = {
        'gold': request.session['gold'],
        'place': request.session['form_data']['place'],
        # 'html_place': request.session['all']
    }
    print "context is: ", context
    return render(request, 'ninja_gold/index.html', context)

def process_money(request):
    print "in process money route"

    print "request.POST is: ", request.POST
    request.session['form_data'] = request.POST


    if 'gold' not in request.session:
        request.session['gold'] = 0
        # request.session['all'] = []
        # request.session['words'] = {}
    
    else:
        if request.session['form_data']['place'] == 'farm':
            print "in farm"
            request.session['gold'] += randint(10, 20)
            print "gold is: ", request.session['gold']

        if request.session['form_data']['place'] == 'cave':
            print "in cave"
            request.session['gold'] += randint(5, 10)
            print "gold is: ", request.session['gold']

        if request.session['form_data']['place'] == 'house':
            print "in house"
            request.session['gold'] += randint(2, 5)
            print "gold is: ", request.session['gold']

        if request.session['form_data']['place'] == 'casino':
            print "in casino"
            num = randint(1, 3)
            if num == 2:
                request.session['gold'] += randint(0, 50)
            else: 
                request.session['gold'] -= randint(0, 50)
            print "gold is: ", request.session['gold']

    return redirect('/')