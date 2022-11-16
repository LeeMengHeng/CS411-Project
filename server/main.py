from flask import Flask, request
import requests

url = "https://images-api.nasa.gov/search"

app = Flask(__name__)

@app.route('/search/<keyword>')
def search(keyword):
    if request.method == "GET":
        return requests.get(f"{url}?q={keyword}&media_type=image").json()
    
if __name__ == "__main__":
    app.run(debug=True)