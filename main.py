import jinja2
from flask import Flask
from flask import render_template

app = Flask(__name__)
app.config['DEBUG'] = True


# Note: We don't need to call run() since our application is embedded within
# the App Engine WSGI application server.



@app.route('/')
def home():
    return render_template('index.html')


@app.route('/hallo')
def hello():
    return 'Hello World!'


@app.errorhandler(404)
def page_not_found(e):
    return 'Sorry, nothing at this URL.', 404
