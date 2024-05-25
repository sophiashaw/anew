from flask import Flask, request, jsonify

app = Flask((__name__))

#Members API Route
money = {"balance": 0}

@app.route("/members")
def members():
    return jsonify(money)

@app.route("/add_money", methods=["POST"])
def add_money() -> None:
    print(money)
    data = request.get_json()
    amount = data.get('balance')
    print(data)
    print(amount)
    money["balance"] += float(amount)
    return jsonify(money)

@app.route("/sub_money", methods=["POST"])
def sub_money() -> None:
    print(money)
    data = request.get_json()
    amount = data.get('balance')
    money["balance"] -= float(amount)
    return jsonify(money)

if __name__ == "__main__":
    app.run(debug=True)