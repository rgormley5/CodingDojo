from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
from datetime import datetime
now = datetime.now()
app = Flask(__name__)
mysql = MySQLConnector(app,'friendsdb')
@app.route('/')
def index():
    # friends = mysql.query_db("SELECT name, age, concat(monthname(created_at), " ", day(created_at) AS Friend_Since) FROM friends")
    friends = mysql.query_db("SELECT * FROM friends")
    print friends
    return render_template('index.html', all_friends=friends)

@app.route('/friends', methods=['POST'])
def create():
    # add a friend to the database!

    query = "INSERT INTO friends (first_name, last_name, created_at, age) VALUES (:first_name, :last_name, :created_at, :age)"

    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'created_at': now,
        'age': request.form['age'],
    }

    mysql.query_db(query, data)

    return redirect('/')
app.run(debug=True)
