import sqlalchemy.exc
from flask import Flask, render_template, redirect, url_for, request
'''from flask_login import LoginManager, login_required, logout_user, login_user
from data.forms import LoginForm, RegistrationForm
from data.orm import User, Build
from data.db_session import create_session, global_init'''

app = Flask(__name__)
app.config['SECRET_KEY'] = 'yandexlyceum_secret_key'  # temp
'''login_manager = LoginManager()
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_id):
    return User

'''
@app.route('/')
def home():
    return render_template('index.html')
    #return render_template('login 2.html')

'''
@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        db = create_session()
        user = db.query(User).filter(User.username == form.username.data).first()
        if user and user.check_password(form.password.data):
            login_user(user, remember=form.remember.data)
            return redirect(url_for('profile'))
        return render_template('login.html', form=form, message='login or password is incorrect')
    return render_template('login.html', form=form)


@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User()
        user.username = form.username.data
        user.email = form.email.data
        user.set_password(form.password.data)
        db = create_session()
        db.add(user)
        try:
            db.commit()
        except sqlalchemy.exc.IntegrityError:
            return render_template('register.html', form=form,
                                   message='user with this username or email already exists')
        login_user(user, remember=True)
        return redirect(url_for('profile'))
    return render_template('register.html', form=form)


@app.route('/profile')
@login_required
def profile():
    return render_template('profile.html')


@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('home'))
'''

if __name__ == '__main__':
    #global_init('db/db.db')
    app.run(debug=True)
