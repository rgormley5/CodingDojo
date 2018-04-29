from flask import Flask, render_template, request, redirect, session

app = Flask (__name__)
app.secret_key = 'secret_key'

# @app.route('/')
# def index():
#     # session['count'] = request.form['count']
#     # if "count" in session:
#     #     session["count"] += 1
#     # else:
#     #     session["count"] = 1
#     # return render_template('index.html', count = session['count'])

#     # session["count"] = request.form["count"]
   
   
#     if "count" in session:
#         session["count"] += 1
#     else: 
#         # session["count"] = 0

#         def reset():
#             session['count'] = 0
#             return redirect('/show')
    
#     # session['count'] = 0
#     # session['count'] += 1
#     return redirect('/show')

#     # if request.form['action'] == 'one':
#     #     session['count'] += 1
#     #     return render_template('index.html', count = session['count'])
#     # elif request.form['action'] == 'two':
#     #     session['count'] = 0
#     #     return render_template('index.html', count = session['count'])

# @app.route('/show')
# def show():
#     return render_template('index.html', count = session['count'])

# # @app.route('/reset')
# # def reset():
# #     session["count"] = 0
# #     return render_template('index.html', count = session['count'])


@app.route('/')
def index():
    if "count" in session:
         session['count'] += 1
    else:
        session["count"] = 0
    return render_template("index.html", count = session['count'])

# @app.route('/add2')
# def add2():
#     session['count'] += 1
#     return redirect('/')

@app.route('/reset')
def reset():
    session['count'] = 0
    return redirect('/')




app.run(debug = True)