from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods = ['POST'])
def process_form():
    name = request.form['name']
    dojo_location = request.form['dojo_location']
    language = request.form['language']
    comment = request.form['comment']
    return render_template('result.html', name = request.form['name'], dojo_location = request.form['dojo_location'], language = request.form['language'], comment = request.form['comment'])

app.run(debug = True)