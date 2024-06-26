import datetime
import sqlalchemy as alc
from sqlalchemy import orm
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .db_session import SqlAlchemyBase


class User(SqlAlchemyBase, UserMixin):
    __tablename__ = 'users'
    id = alc.Column(alc.Integer, primary_key=True, autoincrement=True)
    username = alc.Column(alc.String, unique=True)
    email = alc.Column(alc.String, index=True, unique=True)
    hashed_password = alc.Column(alc.String)
    modified_date = alc.Column(alc.DateTime, default=datetime.datetime.now)
    # builds = orm.relationship('Builds')

    def __repr__(self):
        return f'<User> {self.id} {self.username} {self.email}'

    def set_password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.hashed_password, password)


class Build(SqlAlchemyBase):
    __tablename__ = 'builds'
    id = alc.Column(alc.Integer, primary_key=True, autoincrement=True)
    cpu = alc.Column(alc.String)
    gpu = alc.Column(alc.String)
    motherboard = alc.Column(alc.String)
    ram = alc.Column(alc.String)
    # hdd = alc.Column(alc.String, nullable=True)
    # ssd = alc.Column(alc.String, nullable=True)
    # psu = alc.Column(alc.String)
    price = alc.Column(alc.Integer)
    modified_date = alc.Column(alc.DateTime, default=datetime.datetime.now)
    user_id = alc.Column(alc.Integer, alc.ForeignKey('users.id'))
    # user = orm.relationship('User')

    def __repr__(self):
        return f'<Build> {self.id}'
