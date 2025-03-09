from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/recherche')
def recherche():
    return render_template('recherche.html')

@app.route('/createurs')
def createurs():
    return render_template('createurs.html')

@app.route('/membres')
def membres():
    return render_template('membres.html')

@app.route('/api/students')
def get_students():
    import json
    with open('static/data/students.json', 'r', encoding='utf-8') as file:
        students = json.load(file)
    return jsonify(students)

if __name__ == "__main__":
    app.run(debug=True)
