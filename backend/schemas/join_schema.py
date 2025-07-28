from pydantic import BaseModel, EmailStr

class JoinForm(BaseModel):
    name: str
    email: EmailStr
    experience: str
    message: str
