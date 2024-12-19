# Generate app.py file (Entry point of Flask application)
# This will initialize the Flask app, load configurations, and register routes.

from flask import Flask
from config import Config
from app.routes import admin_routes, main_routes, statistics_routes

# Initialize Flask App
app = Flask(__name__)
app.config.from_object(Config)

# Register Blueprints
app.register_blueprint(admin_routes, url_prefix='/admin')
app.register_blueprint(main_routes, url_prefix='/')
app.register_blueprint(statistics_routes, url_prefix='/statistics')

if __name__ == "__main__":
    app.run(debug=True)
