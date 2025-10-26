from flask import Blueprint, request, jsonify, session
from werkzeug.utils import secure_filename
import csv, io, smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
from api.config import db
from werkzeug.security import generate_password_hash
from bson.objectid import ObjectId

flag_routes = Blueprint("flag_routes", __name__)

admins_db = db["admins"]
tests_db = db["tests"]
invites_db = db["invites"]
flags_db = db["flags"]

@flag_routes.route("/postflag", methods=["POST"])
def post_flag():
    try:
        data = request.json
        mis_id = data.get("mis_id")
        parenturl = data.get("parenturl")
        flag_type = data.get("flag_type")
        details = data.get("details")  # can be text or S3 URL

        if not mis_id or not parenturl or not flag_type or not details:
            return jsonify({"status": "error", "message": "Missing required fields"}), 400

        # 1️⃣ Find the student document
        student_doc = admins_db.find_one({"mis_id": mis_id})
        if not student_doc:
            return jsonify({"status": "error", "message": "Student not found"}), 404

        # 2️⃣ Find the registered test in student's tests_registered
        registered_test = next(
            (t for t in student_doc.get("tests_registered", []) if t.get("parenturl") == parenturl),
            None
        )
        if not registered_test:
            return jsonify({"status": "error", "message": "Test not registered for this student"}), 400

        # 3️⃣ Get test_id from tests_db
        test_doc = tests_db.find_one(
            {"name": registered_test.get("testname"), "parenturl": parenturl},
            {"_id": 1}
        )
        if not test_doc:
            return jsonify({"status": "error", "message": "Test not found"}), 404

        test_id = str(test_doc["_id"])

        # 4️⃣ Insert flag
        flag_doc = {
            "test_id": test_id,
            "student_id": mis_id,
            "flag_type": flag_type,
            "timestamp": datetime.utcnow(),
            "details": details,
            "to_review": False
        }

        flags_db.insert_one(flag_doc)

        return jsonify({"status": "success", "message": "Flag posted successfully"}), 201

    except Exception as e:
        print("Error in /postflag:", e)
        return jsonify({"status": "error", "message": str(e)}), 500


@flag_routes.route("/getflag", methods=["POST"])
def getflag():
    data = request.get_json()
    test_id = data.get("test_id")

    if not test_id:
        return jsonify({"status": "error", "message": "Missing test_id"}), 400

    # Determine role and student from session
    user_session = session.get("user", {})
    role = user_session.get("role")
    mis_id = user_session.get("mis_id")

    query = {"test_id": test_id}
    if role == "student":
        query["student_id"] = mis_id  # only that student's flags

    flags_cursor = flags_db.find(query)
    flags_list = []

    for f in flags_cursor:
        # Optional: fetch student info if admin
        student_info = None
        if role == "admin":
            student_info = admins_db.find_one(
                {"mis_id": f.get("student_id")},
                {"_id": 0, "name": 1, "email": 1}
            )

        #to deletelater
        #print("Found student_info:", student_info)


        # Build response object
        flag_obj = {
            "test_id": f.get("test_id"),
            "student_id": f.get("student_id"),
            "flag_type": f.get("flag_type"),
            "timestamp": str(f.get("timestamp", "")),
            "details": f.get("details", ""),
            "to_review": f.get("to_review", False),
        }

        # If admin, append student info too
        if student_info:
            flag_obj["student_name"] = student_info.get("name", "Unknown")
            flag_obj["student_email"] = student_info.get("email", "Unknown")

        flags_list.append(flag_obj)

    return jsonify({"status": "success", "flags": flags_list}), 200
