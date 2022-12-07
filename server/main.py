from flask import Flask, request, make_response
from bson.json_util import dumps
import requests
import os
import pymongo


url = "https://images-api.nasa.gov/search"

ATLAS_URI = os.environ.get("ATLAS_URI")
client = pymongo.MongoClient(ATLAS_URI)
db = client.get_database("star")


app = Flask(__name__)

@app.route('/search/', defaults={'keyword': None}, methods=['GET', 'POST'])
@app.route('/search/<keyword>', methods=['GET'])
def search(keyword):
    collection = db.get_collection("search")

    response = make_response()
    response.access_control_allow_origin = "http://localhost:3000"
    response.content_type = "application/json"

    if keyword != None:
        if request.method == "GET":
            data = requests.get(f"{url}?q={keyword}&media_type=image").json()
            response.status_code = 200
            response.response = (
                '{' 
                    f'"title": "{data["collection"]["items"][0]["data"][0]["title"]}",'
                    f'"href": "{data["collection"]["items"][0]["links"][0]["href"]}",'
                    f'"description": "{data["collection"]["items"][0]["data"][0]["description"]}"'
                '}'
            )
            
            return response
    else: 
        if request.method == "GET":
            response.response =  dumps(collection.find())
            response.status_code = 200
            return response
        elif request.method == "POST":
            try:
                data = request.get_json()
                inserted_id = collection.insert_one({
                    "title": data["title"],
                    "description": data["description"],
                    "href": data["href"]
                }).inserted_id

                response.status_code = 200
                response.response = (
                    '{' 
                        f'"inserted_id": {str(inserted_id)}'
                    '}'
                )
        
                return response
            except KeyError:
                response.response = "BAD_REQUEST"
                response.status_code = 400
                return response
            except:
                response.response = "Failed to insert object into database."
                response.status_code = 400
                return response

@app.route('/username/<username>/<password>', methods = ['GET'])
def username(username, password):
    collection = db.get_collection('username')

    response = make_response()
    response.access_control_allow_origin = "http://localhost:3000"
    response.content_type = "application/json"
    result = collection.find_one({'username': username})

    if not result:
        inserted_id = collection.insert_one({
            'username': username,
            'password': password
        }).inserted_id
        response.status_code = 200
        response.response = (
            '{'
                f'"inserted_id": {str(inserted_id)}'
            '}'
        )
        return response
    else:
        return response
        

            
if __name__ == "__main__":
    app.run(debug=True)