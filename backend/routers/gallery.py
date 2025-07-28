from fastapi import APIRouter, HTTPException, File, UploadFile, Form
from pymongo import MongoClient
from bson import ObjectId
import os
import shutil

router = APIRouter()

MONGO_URI = "mongodb+srv://riteshsolke12:Ritesh%40123@cluster0.qx2lkhs.mongodb.net/AI-CLUB_DB?retryWrites=true&w=majority&appName=Cluster0"

client = MongoClient(MONGO_URI)
db = client["AI-CLUB_DB"]
collection = db["Gallery"]

# --- Setup ---
UPLOAD_DIRECTORY = "./uploads"
if not os.path.exists(UPLOAD_DIRECTORY):
    os.makedirs(UPLOAD_DIRECTORY)



def serialize_doc(doc):
    if doc and "_id" in doc:
        doc["_id"] = str(doc["_id"])
    return doc

@router.post("/add-image")
async def add_image(title: str = Form(...), file: UploadFile = File(...)):
    """
    Receives an image file and title, saves the file, and stores its info in the database.
    """
    try:
        file_path = os.path.join(UPLOAD_DIRECTORY, file.filename)
        
        # Save the uploaded file to the 'uploads' directory
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
            
        # The URL that the frontend will use to access the image
        image_url = f"https://ai-robo-club.onrender.com/uploads/{file.filename}"

        image_data = {
            "title": title,
            "imageUrl": image_url
        }
        result = collection.insert_one(image_data)
        
        inserted_doc = collection.find_one({"_id": result.inserted_id})
        
        return {"message": "Image added successfully!", "data": serialize_doc(inserted_doc)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/images")
async def get_images():
    """
    Retrieves all images from the database.
    """
    try:
        images = [serialize_doc(image) for image in collection.find()]
        response_images = [
            {"title": img.get("title"), "src": img.get("imageUrl"), "alt": img.get("title")} for img in images
        ]
        return response_images
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))