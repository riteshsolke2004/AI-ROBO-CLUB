from pydantic import BaseModel, HttpUrl

class GalleryImage(BaseModel):
    title: str
    imageUrl: HttpUrl