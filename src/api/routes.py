"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Character, Signets, Weapon, User
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)


@api.route('/')
def sitemap():
    return generate_sitemap(app)


@api.route('/user', methods=['GET'])
def handle_hello():
    users = User.query.all()
    all_users = list(map(lambda x: x.serialize(), users))
    return jsonify(all_users)

@api.route('/signup', methods=['POST'])
def post_user():
    request_body = request.get_json()
    new_user = User(email=request_body['email'], password=request_body['password'], first_name=request_body['first_name'], last_name=request_body['last_name'], dob=request_body['dob'])
    db.session.add(new_user)
    db.session.commit()
    return f"The new user {request_body['email']} was created sucessfully", 200

@api.route('/user/<int:user_id>', methods=['GET'])
def one_user(user_id):
    user1 = User.query.get(user_id)
    return jsonify(user1.email), 200


@api.route("/login", methods=["POST"])
def login():
    body = request.get_json()
    if "email" not in body or body['email'] =="":
        raise APIException("username or password error", status_code=400)
    if "password" not in body or body['password'] == "":
        raise APIException("username or password error", status_code=400)

    user = User.query.filter_by(email=body['email']).first()

    if user == None:
        raise APIException("User not found", status_code=404)
    if body['email'] != user.email:
        raise APIException("User not found", status_code=404)
    else:
        access_token = create_access_token(identity=body['email'])
        return jsonify(access_token=access_token)

@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()
    return jsonify({"first_name": user.first_name, "email":user.email, "auth": True}), 200

@api.route('/character/<int:character_id>', methods=['GET'])
def handle_character(character_id):
    character = Character.query.filter_by(id=character_id).first()
    char_detail = character.serialize()
    weapon = Weapon.query.filter_by(weapon_name=char_detail['best_weapon']).first()
    signet = Signets.query.filter_by(signet_name=char_detail['best_signets']).first()
    character_detail = {
        "character": character.serialize(),
        "signet": signet.serialize(),
        "weapon": weapon.serialize()
    }
    return jsonify(character_detail), 200

@api.route('/character', methods=['GET'])
def get_characters():

    character = Character.query.all()
    character_list = list(map(lambda t: t.serialize(), character))
    return jsonify(character_list), 200

@api.route('/character', methods=['POST'])
def create_character():
    request_body = request.get_json()
    if type(request_body) == dict:
        new_character = Character(name=request_body['name'], image=request_body['image'], description=request_body['description'], best_signets=request_body['best_signets'], best_weapon=request_body['best_weapon'])
        db.session.add(new_character)
        db.session.commit()
        return f"the new character {request_body['name']} was created successfully", 200
    elif type(request_body) == list:
        for item in request_body:
            new_character = Character(name=item['name'], image=item['image'], description=item['description'], best_signets=item['best_signets'], best_weapon=item['best_weapon'])
            db.session.add(new_character)
            db.session.commit()
        return f"the new characters was created successfully", 200


@api.route('/signets', methods=['GET'])
def get_signets():

    signets = Signets.query.all()
    signets_list = list(map(lambda i: i.serialize(), signets))
    return jsonify(signets_list), 200


@api.route('/signets/<int:signet_id>', methods=['GET'])
def get_single_signets(signet_id):

    signet = Signets.query.get(signet_id)
    return jsonify(signet.serialize()), 200


@api.route('/signets', methods=['POST'])
def create_signets():
    request_body = request.get_json()
    if type(request_body) == dict:
        new_signets = Signets(signet_name=request_body['signet_name'], signet_image=request_body['signet_image'], signet_description=request_body['signet_description'])
        db.session.add(new_signets)
        db.session.commit()
        return f"the new signets {request_body['signet_name']} was created successfully", 200
    elif type(request_body) == list:
        for item in request_body:
            new_signets = Signets(signet_name=item['signet_name'], signet_image=item['signet_image'], signet_description=item['signet_description'])
            db.session.add(new_signets)
            db.session.commit()
        return f"the list of signets was created successfully", 200  

@api.route('/weapon', methods=['GET'])
def get_weapons():

    weapons = Weapon.query.all()
    weapons_list = list(map(lambda x: x.serialize(), weapons))
    return jsonify(weapons_list), 200


@api.route('/weapon/<int:weapon_id>', methods=['GET'])
def get_single_weapons(weapon_id):

    weapons = Weapon.query.get(weapon_id)
    return jsonify(weapons.serialize()), 200


@api.route('/weapon', methods=['POST'])
def create_weapons():
    request_body = request.get_json()
    if type(request_body) == dict:
        new_weapons = Weapon(weapon_name=request_body['weapon_name'], weapon_image=request_body['weapon_image'], weapon_description=request_body['weapon_description'], abilities=request_body['abilities'])
        db.session.add(new_weapons)
        db.session.commit()
        return f"the new weapons {request_body['weapon_name']} was created successfully", 200
    elif type(request_body) == list:
        for item in request_body:
            new_weapons = Weapon(weapon_name=item['weapon_name'], weapon_image=item['weapon_image'], weapon_description=item['weapon_description'], abilities=item['abilities'])
            db.session.add(new_weapons)
            db.session.commit()
        return f"the list of weapons was created successfully", 200