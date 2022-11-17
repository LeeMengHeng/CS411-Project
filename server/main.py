import json
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

@app.route('/search/', defaults={'keyword': None}, methods=['GET', 'POST'])
@app.route('/search/<keyword>', methods=['GET'])
def search(keyword):
    if keyword != None:
        if request.method == "GET":
            return requests.get(f"{url}?q={keyword}&media_type=image").json()
    else: 
        if request.method == "GET":
            return dumps(collection.find())
        elif request.method == "POST":
            try:
                object = request.get_json()
                inserted_id = collection.insert_one({
                    "title": object["description"] if object["description"] else "haha",
                    "description": object["description"],
                    "href": object["href"]
                }).inserted_id

                return { "inserted_id": str(inserted_id) }
            except:
                return "Failed to insert object into database."
        
            
if __name__ == "__main__":
    app.run(debug=True)