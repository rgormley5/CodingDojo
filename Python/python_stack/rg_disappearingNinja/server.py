from flask import Flask, render_template, redirect, request

app = Flask (__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ninja')
def ninja():
    return render_template('ninja.html')

@app.route('/ninja/<color>')
def specify(color):
    if color == "blue":
        abc = "leonardo.jpg"
        return render_template("ninja.html", pic = abc)
    if color == "orange":
        abc = "michelangelo.jpg"
        return render_template("ninja.html", pic = abc)
    if color == "red":
        abc = "raphael.jpg"
        return render_template("ninja.html", pic = abc)
    if color == "purple":
        abc = "donatello.jpg"
        return render_template("ninja.html", pic = abc)
    else:
        abc = "notapril.jpg"
        return render_template("ninja.html", pic = abc)


app.run(debug = True)