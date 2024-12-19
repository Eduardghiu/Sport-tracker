# Generate app/routes/statistics.py (Statistics page routes)

from flask import Blueprint, render_template

statistics_routes = Blueprint('statistics_routes', __name__)

@statistics_routes.route('/')
def statistics_home():
    return render_template('statistics_home.html')
