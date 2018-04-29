from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
from datetime import datetime
import re
import md5

app = Flask(__name__)
app.secret_key = 'dope'

now = datetime.now()
mysql = MySQLConnector(app,'thewalldb')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


@app.route('/')
def index():
    print "in index"

    print "about to redirect to index"
    return render_template('index.html')


@app.route('/register', methods = ['POST'])
def register():
    print "in register"

    query = "INSERT INTO users (first_name, last_name, email, password, confirm_password, created_at, updated_at) VALUES (:first_name, :last_name, :email, :password, :confirm_password, :created_at, :updated_at)"

    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email'],
        'password': request.form['password'],
        'confirm_password': request.form['confirm_password'],
        'created_at': now,
        'updated_at': now
    }

    print "data is: ", data

    mysql.query_db(query, data)

    print "about to redirect to root"
    return redirect('/wall')

@app.route('/login', methods = ['POST'])
def login():
    print "in login view"

    # if request.form['email'] is in db and matches password for that user, user redirects to /wall
    query = "SELECT * FROM users WHERE email = :email AND password = :password"

    data = {
        'email': request.form['login_email'],
        'password': request.form['login_password']
    }
    print "data is: ", data

    # this returns a list, if the query has something in it, the list contains that thing, 
    # therefore, if the list contains something, the query is true,
    # therefore, the email/password match
    # if the query is empty, there is nothing in log, so there is no match
    log = mysql.query_db(query, data)
    session['log'] = log
    print "log is: ", log

    if len(log) > 0:
        print "about to redirect to wall"

         
        print "session log is: ", session['log']

        return redirect('/wall')

    else: 
        flash("incorrect login")
        return redirect('/')

@app.route('/wall')
def wall():
    print "in wall view"

    if 'message' not in session:
        print "message not is session"
        session['message'] = "post a message"

    else:
        print "message in session"
        # query2 = "SELECT * FROM messages ORDER BY message DESC"
        # query2 = "SELECT * FROM users LEFT JOIN messages ON users.id = messages.user_id LEFT JOIN comments ON messages.id = comments.message_id ORDER BY message DESC"
        # query = "SELECT * FROM users JOIN messages ON users.id = messages.user_id JOIN comments ON messages.id = comments.message_id ORDER BY message DESC"
        query = "SELECT messages.id AS msg_id, messages.message AS msg_message, messages.created_at AS msg_created_at, users.first_name AS msg_first_name, users.last_name AS msg_last_name FROM messages JOIN users ON messages.user_id = users.id ORDER BY message DESC"
        query2 = "SELECT comments.id AS cmt_id, comments.comment AS cmt_comment, comments.created_at AS cmt_created_at, messages.user_id AS cmt_msg_user_id, messages.message AS cmt_msg_message, messages.id AS cmt_msg_id FROM comments JOIN messages ON comments.message_id = messages.id ORDER BY comment"

        varmessage = mysql.query_db(query)
        varcomment = mysql.query_db(query2)

        print "varmessage is: ", varmessage
        print "varcomment is: ", varcomment
        
    print "about to render wall.html"
    return render_template('wall.html', name = session['log'][0]['first_name'], post = varmessage, comment = varcomment)

@app.route('/process_message', methods = ['POST'])
def process_message():
    print "in process message"

    # message insert into db
    query = "INSERT INTO messages (message, created_at, user_id) VALUES (:message, :created_at, :user_id)"

    data = {
        'message': request.form['message'],
        'created_at': now,
        'user_id': session['log'][0]['id']
    }

    session['message_id'] = mysql.query_db(query, data)
    print "session message_id is: ", session['message_id']


    return redirect('/wall')

@app.route('/comment', methods = ['POST'])
def comment():

    query = "INSERT INTO comments (comment, created_at, message_id, user_id) VALUE (:comment, :created_at, :message_id, :user_id) "

    data = {
        'comment': request.form['comment'],
        'created_at': now,
        'message_id': session['message_id'],
        'user_id': session['log'][0]['id']
    }

    mysql.query_db(query, data)

    # session['comment'] = mysql.query_db(query, data)
    # print "session comment is: ", session['comment']

    return redirect('/wall')

@app.route('/logout')
def logout():
    session.clear()
    print "session log is: ", session
    return redirect('/')


app.run(debug = True)