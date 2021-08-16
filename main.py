from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask_bootstrap import Bootstrap


app = Flask(__name__)
Bootstrap(app)


@app.route('/')
def home():
    return render_template('index.html')



@app.route('/game')
def game():
    return render_template('page_guess_game.html')


if __name__ == '__main__':
    app.run(debug=True)
