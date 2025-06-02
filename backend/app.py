from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/')
def home():
    return "Flask backend is running!"

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    # Process the data here
    return jsonify({"message": "Data received", "data": data})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
