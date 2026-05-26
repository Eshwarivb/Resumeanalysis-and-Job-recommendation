import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# MongoDB connection
MONGO_URI = os.getenv("mongodb+srv://aniananya7975_db_user:<sh6R@@uF5BUjRgN>@cluster0.p6roqvc.mongodb.net/?appName=Cluster0", "mongodb://localhost:27017/resume_recommender")

# JWT Secret key for authentication
JWT_SECRET = os.getenv("JWT_SECRET", "supersecretkey")

# JSearch API Key (from RapidAPI)
#RAPIDAPI_KEY = os.getenv("a643cbd9edmshfe8fa0d2a57dcbep107d9fjsncaa4ad9a952f")

RAPIDAPI_KEY = os.getenv("RAPIDAPI_KEY")

