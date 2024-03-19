from fastapi import APIRouter
from pydantic import BaseModel
from sqlmodel import Session, select
from app.dependencies import create_access_token, create_refresh_token
from app.models.models import User
from argon2 import PasswordHasher
from ..utils.database import engine

router = APIRouter(prefix="/auth")

hasher = PasswordHasher()

class LoginBody(BaseModel):
    email: str
    password: str


@router.post("/login")
async def login(body: LoginBody):
    with Session(engine) as session:

        statement = select(User).where(User.email == body.email)
        user = session.exec(statement).first()

        # Verify password
        try: 
            hasher.verify(user.password, body.password)
            return {"access_token": create_access_token(user), 
                    "refresh_token": create_refresh_token(user)}
        except:
            return {"Unauthenticated"}


class RegisterBody(BaseModel):
    email: str
    password: str
    username: str

@router.post("/register")
async def register(body: RegisterBody):
    with Session(engine) as session:
        user = User(email=body.email, password=hasher.hash(body.password), username=body.username)
        session.add(user)

        session.commit()
        session.refresh(user)

        return {"access_token": create_access_token(user), 
                "refresh_token": create_refresh_token(user)}
