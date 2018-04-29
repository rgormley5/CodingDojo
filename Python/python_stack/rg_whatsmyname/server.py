from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods = ['POST'])
def process():
    name = request.form['name']
    return render_template('success.html')


app.run(debug = True)