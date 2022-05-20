"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Character, Signets, Weapon, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)



@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/character', methods=['GET'])
def get_characters():

    character = Character.query.all()
    character_list = list(map(lambda t: t.serialize(), character))
    return jsonify(character_list), 200

@api.route('/character', methods=['POST'])
def create_character():
    request_body = request.get_json()
    new_character = Character(name=request_body['name'], image=request_body['image'], description=request_body['description'], best_signets=request_body['best_signets'], best_weapon=request_body['best_weapon'])
    db.session.add(new_character)
    db.session.commit()
    return f"the new character {request_body['name']} was created successfully", 200

@api.route('/signets', methods=['GET'])
def get_signets():

    signets = Signets.query.all()
    signets_list = list(map(lambda i: i.serialize(), signets))
    return jsonify(signets_list), 200

@api.route('/signets', methods=['POST'])
def create_signets():
    request_body = request.get_json()
    new_signets = Signets(signet_name=request_body['signet_name'], signet_image=request_body['signet_image'], signet_description=request_body['signet_description'], best_used=request_body['best_used'])
    db.session.add(new_signets)
    db.session.commit()
    return f"the new signets {request_body['signet_name']} was created successfully", 200

@api.route('/weapon', methods=['GET'])
def get_weapons():

    weapons = Weapon.query.all()
    weapons_list = list(map(lambda x: x.serialize(), weapons))
    return jsonify(weapons_list), 200

@api.route('/weapon', methods=['POST'])
def create_weapons():
    request_body = request.get_json()
    new_weapons = Weapon(weapon_name=request_body['weapon_name'], weapon_image=request_body['weapon_image'], weapon_description=request_body['weapon_description'], abilities=request_body['abilities'])
    db.session.add(new_weapons)
    db.session.commit()
    return f"the new weapons {request_body['weapon_name']} was created successfully", 200