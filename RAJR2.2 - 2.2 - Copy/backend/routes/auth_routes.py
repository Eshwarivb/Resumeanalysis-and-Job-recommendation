from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from utils.auth_helper import generate_token
from models.user_model import create_user, get_user

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/signup", methods=["POST"])
def signup():
    data = request.json
    user = create_user(data["name"], data["email"], generate_password_hash(data["password"]))
    if not user:
        return jsonify({"error": "User already exists"}), 400
    return jsonify({"message": "Signup successful", "token": generate_token(data["email"])})

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.json
    user = get_user(data["email"])
    if not user or not check_password_hash(user["password"], data["password"]):
        return jsonify({"error": "Invalid credentials"}), 401
    return jsonify({"message": "Login successful", "token": generate_token(data["email"])})
