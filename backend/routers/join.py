from fastapi import APIRouter, HTTPException
from schemas.join_schema import JoinForm
from pymongo import MongoClient
import os

router = APIRouter()

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["AI-CLUB_DB"]
collection = db["Join-Form"]

@router.post("/join-form")
async def submit_form(data: JoinForm):
    try:
        collection.insert_one(data.dict())
        return {"message": "Form submitted successfully!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
