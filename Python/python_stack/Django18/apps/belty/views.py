from django.shortcuts import render, HttpResponse, redirect
from .models import User, Item
from django.contrib import messages
import bcrypt

# Create your views here.

def index(request):
    print "in index route"

    return redirect('/main')

def main(request):
    print "in main route"

    return render(request, 'belty/index.html')

def registration(request):
    print "in registration route"
    if request.method == "POST":
        print "request.POST is: ", request.POST
        errors = User.objects.basic_validator(request.POST)
        if 'new_user' in errors:
            request.session['id'] = errors['new_user'].id
            request.session['action'] = request.POST['action']
            return redirect('/dashboard')
        else:
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags = tag)

            return redirect('/')
    else:
        print "request.method == request.GET"
        return redirect('/')

def login(request):
    print "in login route"

    if request.method == "POST":
        errors = User.objects.login_validator(request.POST)
        if 'user' in errors:
            request.session['id'] = errors['user'].id
            request.session['name'] = errors['user'].name
            request.session['action'] = request.POST['action']
            return redirect('/dashboard')
        else:
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags = tag)

            return redirect('/')

    else:
        print "redirecting to index"
        return redirect('/')

def logout(request):
    print "in logout route"

    request.session.clear()

    return redirect('/')

def dashboard(request):
    print "in success route"


    this_user = User.objects.get(id = request.session['id'])
    user_list = this_user.wishlist.all()
    other_list = Item.objects.all().exclude(creator_id = request.session['id']).exclude(wishlists = request.session['id'])

    print "***** user_list is: ", user_list
    print "***** other_list is: ", other_list

    if 'id' in request.session:
        if request.session['action'] == "registration":
            context = {
                "user": User.objects.get(id = request.session['id']),
                "message": "Successfully registered!",
                "user_list": user_list ,
                "other_list": other_list
            }
        if request.session['action'] == "login":
            context = {
                "user": User.objects.get(id = request.session['id']),
                "message": "Successfully logged in!",
                "user_list": user_list,
                "other_list": other_list
            }

        return render(request, 'belty/success.html', context)
    return redirect('/')

def add_item(request):
    print "in add_item route"

    return render(request, 'belty/add.html')

def process_item(request):
    print "in process_item route"

    if request.method == "POST":
        errors = User.objects.item_adder(request.POST)
        if 'new_item' in errors:
            return redirect('/dashboard')
        else:
            for tag, error in errors.iteritems():
                messages.error(request, error, extra_tags = tag)

            return redirect('/wish_items/create')

def remove(request):
    print "in remove route"


    return redirect('/dashboard')

def delete(request, id):
    print "in delete route"

    item = Item.objects.get(id = id)
    item.delete()

    return redirect('/dashboard')

def view_item(request, id):
    print "in show_item route"

    this_item = Item.objects.get(id = id)
    users = this_item.wishlists.all()

    print "this_item is: ", this_item
    print "users is: ", users

    context = {
        "item": this_item,
        "users": users
    }

    return render(request, 'belty/view.html', context)

def add_list(request, id):
    print "in add_list route"

    this_item = Item.objects.get(id = id)
    this_user = User.objects.get(id = request.session['id'])
    this_user.wishlist.add(this_item)

    return redirect('/dashboard')

def remove_list(request, id):
    print "in remove_list route"

    this_item = Item.objects.get(id = id)
    this_user = User.objects.get(id = request.session['id'])
    remove_item = this_user.wishlist.remove(this_item)
    this_item.save()

    return redirect('/dashboard')