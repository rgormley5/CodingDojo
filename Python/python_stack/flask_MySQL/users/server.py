from flask import Flask, render_template, session, request, redirect, flash
from mysqlconnection import MySQLConnector
from datetime import datetime

app = Flask(__name__)
app.secret_key = 'panda'

now = datetime.now()
mysql = MySQLConnector(app, 'friendsdb')

@app.route('/')
def root():
    print "in root route"
    print "redirecting to /users"
    return redirect('/users')

@app.route('/users')
def index():
    print "in /users route"

    # SQL Query to display all the users
    query0 = "SELECT id, concat(first_name, \" \", last_name) AS name, email, created_at FROM friends"

    all_friends = mysql.query_db(query0)
    print "all_friends is: ", all_friends

    print "rendering index.html"
    return render_template('index.html', all_friends = all_friends)

@app.route('/users/new')
def new():
    print "in /users/new"
    # just displaying the create new user form
    # click "Create" button from form, form submits to /users/create

    print "rendering add.html"
    return render_template('add.html')

@app.route('/users/create', methods = ['POST'])
def create():
    print "in create route"

    # SQL query to send form (for new user record) info into friends db
    query = "INSERT INTO friends (first_name, last_name, created_at, email) VALUES (:first_name, :last_name, :created_at, :email)"

    data = {
        'first_name': request.form['create_first_name'],
        'last_name': request.form['create_last_name'],
        'created_at': now,
        'email': request.form['create_email'],
    }

    newadd = mysql.query_db(query, data)
    session['newadd'] = newadd
    print "session['newadd'] is: ", session['newadd']

    print "redirecting to /users/id"
    return redirect('/users/<id>')

@app.route('/users/<id>/edit')
def edit(id):
    print "in /users/id/edit"
    id = session['specific_friend'][0]['id']
    print "id is: ", id

    # just display edit form, edits for specific user (with given id)

    print "rendering edit.html"
    return render_template('edit.html', id = id)

@app.route('/users/<id>', methods = ['GET', 'POST'])
def useridpage(id):
    print "in useridpage(id)"
    id = session['newadd']
    print "id is: ", id
 # request.method >>> check which method used to reach /users/<id>, depending which route, do a certain function

    if request.method == 'GET':
        print "in /users/id --> GET route"

        # SQL to display info for specific user (with given id)
        query = "SELECT id, concat(first_name, \" \", last_name) AS name, email, created_at FROM friends WHERE id = :id"

        data = {
            'id': session['newadd']
        }

        session['specific_friend'] = mysql.query_db(query, data)
        print "specific_friends is: ", session['specific_friend']

        print "rendering show.html"
        return render_template('show.html', specific_friend = session['specific_friend'])

    elif request.method == 'POST':
        print "in users/id --> POST route"

        # SQL to submit form info to friends db
        query = "UPDATE friends SET first_name = :first_name, last_name = :last_name, email = :email WHERE id = :id"

        data = {
            'first_name': request.form['edit_first_name'],
            'last_name': request.form['edit_last_name'],
            'email': request.form['edit_email'],
            'id': session['specific_friend'][0]['id']
        }

        mysql.query_db(query, data)

        print "redirecting to users/id"
        return redirect('/users/<id>')
    
@app.route('/users/<id>/destroy')
def destroy():
    print "in destroy route"

    # delete user from db

    print "redirecting to /users"
    return redirect('/users')




app.run(debug = True)