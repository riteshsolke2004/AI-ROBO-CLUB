from fastapi import APIRouter, HTTPException
from schemas.join_schema import JoinForm
from pymongo import MongoClient
import os

router = APIRouter()

MONGO_URI = "mongodb+srv://riteshsolke12:<db_password>@cluster0.qx2lkhs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
# Connect to MongoDB
client = MongoClient(MONGO_URI)
db = client["AI-CLUB_DB"]
collection = db["Join-Form"]

@router.post("/join-form")
async def submit_form(data: JoinForm):
    try:
        collection.insert_one(data.dict())
        return {"message": "Form submitted successfully!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
