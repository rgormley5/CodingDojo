from flask import Flask, render_template, request, redirect, session, flash

app = Flask(__name__)
app.secret_key = 'banana'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods = ['POST'])
def process_form():
    print "in process_form()"
    if len(request.form['name']) < 1:
        print "checking if name is empty"
        flash("Name cannot be empty!")
        if len(request.form['comment']) < 1:
            print "checking if comment is empty"
            flash("Comment is actually mandatory, sorry not sorry")
        if len(request.form['comment']) > 120:
            print "checking if comment is longer than 120 chars"
            flash("Comment is longer than 120 chars")
    
    else:
        print "name is not empty"
        flash("Success!  Your name is {}".format(request.form['name']))

        name = request.form['name']
        dojo_location = request.form['dojo_location']
        language = request.form['language']
        comment = request.form['comment']

    return redirect('/')
    # return render_template('result.html', name = request.form['name'], dojo_location = request.form['dojo_location'], language = request.form['language'], comment = request.form['comment'])

app.run(debug = True)