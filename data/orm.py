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

    def is_authenticated(self):
        return True

    def __repr__(self):
        return f'<User> {self.id} {self.username}'

    def set_password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.hashed_password, password)


class Build(SqlAlchemyBase):
    __tablename__ = 'builds'
    id = alc.Column(alc.Integer, primary_key=True, autoincrement=True)
    # job = alc.Column(alc.String, nullable=True)
    # work_size = alc.Column(alc.Integer, nullable=True, default=0)
    # collaborators = alc.Column(alc.String, nullable=True)
    # start_date = alc.Column(alc.DateTime, default=datetime.datetime.now)
    # end_date = alc.Column(alc.DateTime, default=datetime.datetime.now)
    # is_finished = alc.Column(alc.Boolean, default=True)
    # team_leader = alc.Column(alc.Integer, alc.ForeignKey("users.id"))
    # user = orm.relationship('User')

    def __repr__(self):
        return f'<Build> {self.id}'
