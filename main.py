import jinja2
from flask import Flask
from flask import render_template, redirect, url_for, request

app = Flask(__name__)
app.config['DEBUG'] = True


# Note: We don't need to call run() since our application is embedded within
# the App Engine WSGI application server.



@app.route('/')
def home():
    return render_template('index.html')

@app.route('/monday_nl', methods=['POST'])
def monday():
    if request.method == 'POST':
        print "+++++++++++++++++++++++++++++++++++++++++++++++"
        # return redirect(url_for('newsletter'))
        # print request.data
        products = request.data
        print products
        return render_template('monday_nl.html', products=products)
        # return products


@app.route('/monday', methods = ["GET", "POST"])
def newsletter():
    if request.method == 'GET':
        products = [{
            'name': 'Samsung Galaxy A5',
            'url': 'http://www.letstango.com/product/samsung-galaxy-a5',
            'image_id': 1,
            'price': '2,000'
        },
        {
            'name': 'Samsung Galaxy A5',
            'url': 'http://www.letstango.com/product/samsung-galaxy-a5',
            'image_id': 1,
            'price': '2,000'
        },
        {
            'name': 'Samsung Galaxy A5',
            'url': 'http://www.letstango.com/product/samsung-galaxy-a5',
            'image_id': 1,
            'price': '2,000'
        },
        {
            'name': 'Samsung Galaxy A5',
            'url': 'http://www.letstango.com/product/samsung-galaxy-a5',
            'image_id': 1,
            'price': '2,000'
        },
        {
            'name': 'Samsung Galaxy A5',
            'url': 'http://www.letstango.com/product/samsung-galaxy-a5',
            'image_id': 1,
            'price': '2,000'
        },
        {
            'name': 'Samsung Galaxy A5',
            'url': 'http://www.letstango.com/product/samsung-galaxy-a5',
            'image_id': 1,
            'price': '2,000'
        }]
        print "RENDER...."
        # print products
        return render_template('monday.html')
        # return render_template('monday.html', products=products)

@app.route('/hallo')
def hello():
    return 'Hello World!'


@app.errorhandler(404)
def page_not_found(e):
    return 'Sorry, nothing at this URL.', 404
