from flask import Flask, request
from dotenv import load_dotenv
import os
import pymongo
from bson.json_util import dumps


import requests
import json
import time

url = "https://images-api.nasa.gov/search"

ATLAS_URI = os.environ.get("ATLAS_URI")
client = pymongo.MongoClient(ATLAS_URI)
db = client.get_database("star")
collection = db.get_collection("search")


app = Flask(__name__)

@app.route('/search/', defaults={'keyword': None}, methods=['GET', 'POST'])
@app.route('/search/<keyword>', methods=['GET'])
def search(keyword):
    if keyword != None:
        if request.method == "GET":
            data = requests.get(f"{url}?q={keyword}&media_type=image").json()
            return {
                "title": data['collection']['items'][0]["data"][0]["title"],
                "image": data['collection']['items'][0]["links"][0]["href"],
                "description": data['collection']['items'][0]["data"][0]["description_508"]
            }
    else: 
        if request.method == "GET":
            return dumps(collection.find())
        elif request.method == "POST":
            try:
                object = request.get_json()
                inserted_id = collection.insert_one({
                    "title": object["title"],
                    "description": object["description"],
                    "href": object["href"]
                }).inserted_id

                return { "inserted_id": str(inserted_id) }
            except KeyError:
                return 400, "BAD_REQUEST"
            except:
                return "Failed to insert object into database."


@app.route('/uploadurl/', defaults={'url': None}, methods=['GET', 'POST'])
@app.route('/uploadurl/<url>', methods=['GET'])
def uploadurl(url):
    if url != None:
            theurl = url.replace("$%$", "/")
            R = requests.post('http://nova.astrometry.net/api/login',
                              data={'request-json': json.dumps({"apikey": "uoxccbbqsggxrdmc"})})
            session_key = json.loads(R.text)["session"]
            R1 = requests.post('http://nova.astrometry.net/api/url_upload',
                              data={'request-json': json.dumps({"session": session_key, "url": theurl})})
            subid = str(json.loads(R1.text)["subid"])
            while True:
                R2 = requests.post('http://nova.astrometry.net/api/submissions/' + subid)
                if (json.loads(R2.text)["job_calibrations"]) != []:
                    jobid = str(json.loads(R2.text)["jobs"])
                    break
                time.sleep(1)
            jobid = jobid[1:-1]
            while True:
                R3 = requests.post('http://nova.astrometry.net/api/jobs/'+jobid)
                if (json.loads(R3.text)["status"]) == "success":
                    break
                time.sleep(1)
            R4 = requests.post('http://nova.astrometry.net/api/jobs/'+jobid+"/objects_in_field/")
            objects_found = str(json.loads(R4.text)["objects_in_field"])
            return objects_found
    else:
        return "Empty input"

#The little parser I use for parsing url
#def urlparser(url):
    #new = url.replace("/", "$%$")
    #return new











if __name__ == "__main__":
    app.run(debug=True)