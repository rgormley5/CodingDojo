from flask import Flask, render_template, request, redirect, session
import random

app = Flask(__name__)
app.secret_key = 'secret_key'

@app.route('/')
def index():

    if "number" in session:
        # user has entered a guess, session number should persist
        print "this is happening now"
        # if user_guess > number:
        #     print "user_guess > number"

    else:
        # first time user has landed on page, randnum should be generated and stored in session
        number = random.randrange(1, 11)
        session['number'] = number
        print "first time on page"
        if "user_guess" not in session or "text" not in session:
            session['user_guess'] = 0
            session['text'] = "enter a guess"
        

    return render_template('index.html', number = session['number'], guess_html = session['user_guess'], text_html = session['text'])

@app.route('/guess', methods = ['POST'])
def guess():
    user_guess = int(request.form['guess'])
    session['user_guess'] = user_guess
    print "user guess is: ", session['user_guess']

    if session['user_guess'] > session['number']:
        session['text'] = "too high!"

    elif session['user_guess'] < session['number']:
        session['text'] = "too low!"

    else:
        session['text'] = "nice!"

    return redirect('/')

@app.route('/reset', methods = ['POST'])
def reset():
    print "in here"
    number = random.randrange(1, 11)
    session['number'] = number
    return redirect('/')

app.run(debug = True)