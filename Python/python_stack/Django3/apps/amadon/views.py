from django.shortcuts import render, HttpResponse, redirect

# Create your views here.

def index(request):
    print "in index route"
    return redirect('/amadon')

def store(request):
    print "in store route"
    # just renders the index.html page
    return render(request, 'amadon/index.html')

def process_checkout(request):
    print "in process_checkout route"
    # process form data

    if 'count' not in request.session:
        request.session['all_data'] = []
        print "request.session['all_data'] is: ", request.session['all_data']
        request.session['count'] = 0
        request.session['sum'] = 0
        print "request.session['buy_data']['count'] is: ", request.session['buy_data']['count']

    else: 
        request.session['form_data'] = request.POST
        print "request.session['form_data'] is: ", request.session['form_data']

        request.session['buy_data'] = {}
        print "buy_data is: ", request.session['buy_data']

        request.session['buy_data']['id'] = request.POST['product_id']
        request.session['buy_data']['quantity'] = request.POST['quantity']

        if request.POST['product_id'] == '1':
            print "id is 1"
            request.session['buy_data']['price'] = 19.99 * int(request.session['buy_data']['quantity'])
            # request.session['sum'] += int(request.session['buy_data']['price'])
            request.session['sum'] += int(request.session['buy_data']['price'])
            print "request.session['buy_data']['price'] is: ", request.session['buy_data']['price'] 

        elif request.POST['product_id'] == '2':
            print "id is 2"
            request.session['buy_data']['price'] = 29.99 * int(request.session['buy_data']['quantity'])
            request.session['sum'] += int(request.session['buy_data']['price'])
            print "request.session['buy_data']['price'] is: ", request.session['buy_data']['price'] 

        elif request.POST['product_id'] == '3':
            print "id is 3"
            request.session['buy_data']['price'] = 4.99 * int(request.session['buy_data']['quantity'])
            request.session['sum'] += int(request.session['buy_data']['price'])
            print "request.session['buy_data']['price'] is: ", request.session['buy_data']['price'] 

        elif request.POST['product_id'] == '4':
            print "id is 4"
            request.session['buy_data']['price'] = 49.99 * int(request.session['buy_data']['quantity'])
            request.session['sum'] += int(request.session['buy_data']['price'])
            print "request.session['buy_data']['price'] is: ", request.session['buy_data']['price']

        request.session['count'] += int(request.POST['quantity'])
 


    print "request.session['buy_data'] is now: ", request.session['buy_data']
    print "request.session['all_data'] is now: ", request.session['all_data']
    print "redirecting to amadon/checkout"
    return redirect('/amadon/checkout/')

def checkout_page(request):
    print "in checkout_page route"
    # render the results.html page with context

    context = {
        'price': request.session['buy_data']['price'],
        'number': request.session['count'],
        'total': request.session['sum']
    }

    return render(request, 'amadon/result.html', context)
