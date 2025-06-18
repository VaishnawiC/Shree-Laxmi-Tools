
from flask import Flask, render_template, request, redirect, url_for
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return redirect(url_for('contact'))

@app.route('/contact', methods=['POST'])
def contact():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')

    with open("messages.txt", "a") as f:
        f.write(f"Name: {name}\nEmail: {email}\nMessage: {message}\n---\n")

    return "Thank you for contacting us!"

if __name__ == '__main__':
    app.run(debug=True)
