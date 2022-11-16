from flask import Flask

app = Flask(__name__)

@app.route('/')
def start():
    r = requests.get('https://github.com/orbitalindex/awesome-space#astronomy-apis')
    return r.text