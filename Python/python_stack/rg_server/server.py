from flask import Flask, render_template, request, redirect

app = Flask(__name__)

# our index route will handle rendering our form
# @app.route('/')
# def index():
#     return render_template("index.html")

@app.route('/users/<username>')
def show_user_profile(username):
    print username
    return render_template("user.html")

# this route will handle our form submission 
# notice how we defined which HTTP methods are allowed by this route
# @app.route('/users', methods = ['POST'])
# def create_user():
#     print "Got Post Info"
#     # We'll talk abou thte following two lines after we learn a little more about forms
#     name = request.form['name']
#     email = request.form['email']
#     # redirects back to the '/' route
#     # Here's the line that changed.  We're rendering a template from a post route
#     return render_template('/success.html')
    

app.run(debug = True) # run our server