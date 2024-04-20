from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, EmailField, BooleanField, SubmitField
from wtforms.validators import InputRequired, Length, EqualTo


class LoginForm(FlaskForm):
    username = StringField('Username', validators=[InputRequired()])
    password = PasswordField('Password', validators=[InputRequired()])
    remember = BooleanField("Remember Me")
    submit = SubmitField(label='Enter')


class RegistrationForm(FlaskForm):
    username = StringField('Username', validators=[InputRequired(), Length(min=4, max=24)])
    email = EmailField('Email', validators=[InputRequired(), Length(min=6, max=36)])
    password = PasswordField('Password', validators=[InputRequired(), Length(min=8, max=32)])
    repeat_password = PasswordField('Repeat password', validators=[
        InputRequired(), EqualTo('password', message='Passwords do not match')])
    submit = SubmitField(label='Register')
