# Generate app/routes/main.py (Main page routes)

from flask import Blueprint, render_template

main_routes = Blueprint('main_routes', __name__)

@main_routes.route('/')
def home_page():
    return render_template('home.html')
