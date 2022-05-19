from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Character(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    image = db.Column(db.String(300), unique=False, nullable=False)
    description = db.Column(db.String(80), unique=False, nullable=False)
    best_sigils = db.Column(db.String(80), unique=False, nullable=False)
    best_weapon = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return '<Character %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "image": self.image,
            "description": self.description,
            "best_sigils": self.best_sigils,
            "best_weapon": self.best_weapon,
        }

class Sigils(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sigil_name = db.Column(db.String(120), unique=False, nullable=False)
    sigil_image = db.Column(db.String(120), unique=True, nullable=False)
    sigil_description = db.Column(db.String(80), unique=False, nullable=False)
    best_used = db.Column(db.String(80), unique=False, nullable=False)
    
    def __repr__(self):
        return '<Sigils %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "sigil_name": self.sigil_name,
            "sigil_image": self.sigil_image,
            "sigil_description": self.sigil_description,
            "best_used": self.best_used,
        }

class Weapon(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    weapon_name = db.Column(db.String(120), unique=False, nullable=False)
    weapon_image = db.Column(db.String(120), unique=True, nullable=False)
    weapon_description = db.Column(db.String(80), unique=False, nullable=False)
    abilities = db.Column(db.String(80), unique=False, nullable=False)
    
    def __repr__(self):
        return '<Weapon %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "weapon_name": self.weapon_name,
            "weapon_image": self.weapon_image,
            "weapon_description": self.weapon_description,
            "abilities": self.abilities,
        }
