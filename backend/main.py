from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles  # 1. Import StaticFiles
from routers.join import router as join_router
from routers.gallery import router as gallery_router

app = FastAPI(title="AI Robotics Club API")

# 2. Serve static files from the "uploads" directory
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "AI Robotics Club Backend is live!"}

# Include routers
app.include_router(join_router, prefix="/join", tags=["Join"])
app.include_router(gallery_router, prefix="/gallery", tags=["Gallery"])