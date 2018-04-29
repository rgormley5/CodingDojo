from flask import Flask, render_template, request, redirect, session
import random
import time
import datetime

app = Flask(__name__)
app.secret_key = 'secret_key'
ts = time.time()
st = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')

@app.route('/')
def index():

    if "number" in session:
        print "in number"
        session['number'] = session['number']
    else:
        session['number'] = 0
        session['text'] = "some text"

    return render_template('index.html', number_html = session['number'], text_html = session['text'])


@app.route('/process_money', methods = ['POST'])
def process_money():
    session['text'] = []
    text = ""

    print "processing money"
    if request.form['action'] == 'farm_input':
        session['number'] += random.randrange(10, 20)
        text = "Earned", session['number'], "gold from the farm!", st
        session['text'].append(text)

    elif request.form['action'] == 'cave_input':
        print "clicked cave button"
        session['number'] += random.randrange(5, 10)
        session['text'] = "Earned", session['number'], "gold from the cave!", st

    elif request.form['action'] == 'house_input':
        print "clicked house button"
        session['number'] += random.randrange(2, 5)
        session['text'] = "Earned", session['number'], "gold from the house!", st

    elif request.form['action'] == 'casino_input':
        print "clicked casino button"
        if random.randrange(1, 11) > 5:
            session['number'] += random.randrange(0, 50)
            session['text'] = "Won", session['number'], "gold from the casino!", st

        else:
            session['number'] -= random.randrange(0, 50)
            session['text'] = "Lost", session['number'], "gold from the casino!", st

    
    return redirect('/')


app.run(debug = True)