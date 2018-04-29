from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
from datetime import datetime
import re
import md5

now = datetime.now()
app = Flask(__name__)
mysql = MySQLConnector(app,'logandregdb')
app.secret_key = 'dope'
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
check_nums = re.compile(r'^[a-zA-Z.+_-]')

@app.route('/')
def index():
    print "in index"


    return render_template('index.html')


@app.route('/process_registration', methods = ['POST'])
def email_validation():
    print "in process registration", request.form


    if (len(request.form['first_name']) or len(request.form['last_name'])) < 2:
        print "in name length check"
        flash("First Name and Last Name must each be longer than 2 chars")
        return redirect('/')
    elif not check_nums.match(request.form['first_name']):
        print "in name numbers check"
        flash("Name cannot have numbers")
        return redirect('/')
    elif not EMAIL_REGEX.match(request.form['reg_email']):
        print "in email check"
        flash("Invalid Email Address!")
        return redirect('/')
    elif len(request.form['reg_password']) < 8:
        print "in password check" 
        flash("password needs to be atleast 8 chars")
        return redirect('/')
    elif not request.form['reg_password_confirm'] == request.form['reg_password']:
        print "in passwords match check"
        flash("passwords don't match")
        return redirect('/')
    else:
        print "in success condition"
        query = "INSERT INTO users (first_name, last_name, email, password, password_confirm) VALUES (:first_name, :last_name, :email, :password, :password_confirm)"

        data = {
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'email': request.form['reg_email'],
            'password': md5.new(request.form['reg_password']).hexdigest(),
            'password_confirm': request.form['reg_password_confirm'],
        }

        mysql.query_db(query, data)
        print "about to return redirect"
        return redirect('/success')

@app.route('/process_login', methods = ['POST'])
def processLogin():
    print "in process login"

    # query = "SELECT * FROM users WHERE email = :specific_email"

    # data = {'specific_email': }

    query = "SELECT email FROM users WHERE email = :specific_email"
    data = {
        'specific_email': request.form['login_email']
    }
    mysql.query_db(query, data)

    print "specific email is: ", request.form['login_email']
    print "query returns: ", mysql.query_db(query, data)
    
    # for i in users.email

    if query is not request.form['login_email']:
        print "check if email is in db"
        flash("Email is not in db")
        return redirect('/')

    else:
        print "in login success path"
        return redirect('/success')

@app.route('/success')
def success():
    print "in success page"

    return render_template('success.html')

app.run(debug=True)