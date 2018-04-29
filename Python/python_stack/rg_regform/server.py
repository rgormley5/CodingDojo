from flask import Flask, render_template, redirect, session, request, flash
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

app = Flask(__name__)
app.secret_key = 'secret_key'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods = ['POST'])
def process():
    print "in process()"

    # checks if fields are filled out
    # if len(request.form['email']) < 1:
    #     print "in email length < 1"
    #     flash("email cannot be blank")

    # elif not EMAIL_REGEX.match(request.form['email']):
    #     print "in EMAIL_REGEX"
    #     flash("Invalid Email Address!")
    
    if len(request.form['first_name']) < 1:
        print "in first name length < 1"
        flash("first name cannot be blank")

    elif len(request.form['first_name']) > 0:
        print "first name > 0"
        for i in request.form['first_name']:
            print "iterating through first_name"
            if i == '0' or '1' or '2' or '3' or '4' or '5' or '6' or '7' or '8' or '9':
                print "i is: ", i
                flash("first name cannot have numbers")
            else:
                print "wat"
    
    if len(request.form['last_name']) < 1:
        print "in last name length < 1"
        flash("last name cannot be blank")

    elif len(request.form['last_name']) > 0:
        print "last name > 0"
        for i in request.form['last_name']:
            print "iterating through last_name"
            if i == '0' or '1' or '2' or '3' or '4' or '5' or '6' or '7' or '8' or '9':
                print "i is: ", i
                flash("last name cannot have numbers")
    
    # if len(request.form['password']) < 1:
    #     print "in password length < 1"
    #     flash("password cannot be blank")

    # elif len(request.form['password']) > 0 and len(request.form['password']) < 8:
    #     print "in password length > 0 and < 8"
    #     flash("password cannot be less than 8 chars")
                    
    # if len(request.form['confirm_password']) < 1:
    #     print "in confirm password length < 1"
    #     flash("confirm password cannot be blank")

    # elif request.form['password'] is not request.form['confirm_password']:
    #     print "in matching password"
    #     flash("password and confirm password must match")

    else:
        print "in else statement"
        flash("dope.")

    return redirect('/')




app.run(debug = True)