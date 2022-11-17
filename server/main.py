from flask import Flask, request
from dotenv import load_dotenv
import os
import pymongo
from bson.json_util import dumps


import requests

url = "https://images-api.nasa.gov/search"

ATLAS_URI = os.environ.get("ATLAS_URI")
client = pymongo.MongoClient(ATLAS_URI)
db = client.get_database("stars")
collection = db.get_collection("search")


app = Flask(__name__)
app.run(debug=True)

@app.route('/search/', defaults={'keyword': None}, methods=['GET'])
@app.route('/search/<keyword>', methods=['GET'])
def search(keyword):
    if keyword != None:
        if request.method == "GET":
            return requests.get(f"{url}?q={keyword}&media_type=image").json()
    else: 
        if request.method == "GET":
            return dumps(collection.find())