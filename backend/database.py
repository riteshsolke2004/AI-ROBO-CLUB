from motor.motor_asyncio import AsyncIOMotorClient

# Connect to local MongoDB (or replace with your Atlas URI)
MONGO_URI = "mongodb://localhost:27017"

client = AsyncIOMotorClient(MONGO_URI)

# Your database and collection
db = client["AI-CLUB_DB"]
join_form_collection = db["Join-Form"]
