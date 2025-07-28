from pymongo import MongoClient

# Connect to local MongoDB (or replace with your Atlas URI)
MONGO_URI = "mongodb+srv://riteshsolke12:Ritesh%40123@cluster0.qx2lkhs.mongodb.net/AI-CLUB_DB?retryWrites=true&w=majority&appName=Cluster0"

client = MongoClient(MONGO_URI)

# Your database and collection
db = client["AI-CLUB_DB"]
join_form_collection = db["Join-Form"]
