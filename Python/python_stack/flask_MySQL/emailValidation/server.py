from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
from datetime import datetime
import re


now = datetime.now()
app = Flask(__name__)
mysql = MySQLConnector(app,'emailValidationdb')
app.secret_key = 'dope'
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/')
def index():


    return render_template('index.html')


@app.route('/email_validation', methods = ['POST'])
def email_validation():
    print "in email validation"


    if len(request.form['email']) < 1:
        print "in email < 1"
        flash("Email cannot be blank")
        return redirect('/')
    elif not EMAIL_REGEX.match(request.form['email']):
        print "in invalid email"
        flash("Invalid Email")
        return redirect('/')
    else:
        print "in success"
        # flash("Success!")

        query = "INSERT INTO emails (value, created_at, updated_at) VALUES (:value, :created_at, :updated_at)"

        data = {
            'value': request.form['email'],
            'created_at': now,
            'updated_at': now
        }

        mysql.query_db(query, data)

        return redirect('/success')


@app.route('/success')
def success():
    print "in success page"

    query = "SELECT * FROM emails"
    dope = mysql.query_db(query)
    print "dope is: ", dope

    return render_template('success.html', all_emails = dope)

@app.route('/delete', methods = ['POST'])
def delete():
    print "in delete"

    query = "DELETE FROM emails WHERE value = :value"
    data = {'value': request.form['delete_value']}
    mysql.query_db(query, data)

    return redirect('/success')


app.run(debug=True)