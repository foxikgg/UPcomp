import sqlalchemy.exc
from flask import Flask, render_template, redirect, url_for, request, jsonify
from flask_login import LoginManager, logout_user, login_user, current_user
from data.forms import LoginForm, RegistrationForm
from data.orm import User, Build
from data.db_session import create_session, global_init

app = Flask(__name__)
app.config['SECRET_KEY'] = open('secret.env', 'r').readlines()[0].split('=')[1]
login_manager = LoginManager()
login_manager.init_app(app)


@login_manager.user_loader
def load_user(id):
    return create_session().query(User).get(id)


@app.route('/', methods=['GET', 'POST'])
def home():
    return render_template('index.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    print(current_user.is_authenticated)
    if current_user.is_authenticated:
        return redirect(url_for('profile'))
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
    print(current_user.is_authenticated)
    if current_user.is_authenticated:
        return redirect(url_for('profile'))
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
def profile():
    if current_user.is_authenticated:
        data = current_user.__str__().split()
        builds = create_session().query(Build).filter(Build.user_id == int(current_user.__str__().split()[1]))
        return render_template('profile.html', username=data[2], email=data[3], builds=builds)
    return redirect(url_for('login'))


@app.route('/logout')
def logout():
    if current_user.is_authenticated:
        logout_user()
    return redirect(url_for('home'))


@app.route('/create_build', methods=['POST'])
def create_build():
    if current_user.is_authenticated:
        db = create_session()
        data = request.json
        build = Build(
            cpu=data['cpu'],
            gpu=data['gpu'],
            motherboard=data['mb'],
            ram=data['ram'],
            price=int(data['cost']),
            user_id=int(current_user.__str__().split()[1])
        )
        db.add(build)
        db.commit()
        return jsonify(success=True)
    return jsonify(success=False)


if __name__ == '__main__':
    global_init('db.db')
    a = 1
    app.run(debug=True)
