from flask import Flask

@app.route("/.home")
def home():
    print("HEllo Home")
    