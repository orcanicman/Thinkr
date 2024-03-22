from typing import Annotated, TypedDict
from fastapi import APIRouter, Cookie, Response
from pydantic import BaseModel
from sqlmodel import Session, select
from app.dependencies import create_access_token, create_refresh_token, send_refresh_token
from app.models.models import User
from argon2 import PasswordHasher

from app.utils.is_auth import decode_user_jwt
from ..utils.database import engine

router = APIRouter(prefix="/auth")

hasher = PasswordHasher()

class LoginBody(BaseModel):
    email: str
    password: str


@router.post("/login")
async def login(body: LoginBody, response: Response):
    with Session(engine) as session:

        statement = select(User).where(User.email == body.email)
        user = session.exec(statement).first()

        # Verify password
        try: 
            hasher.verify(user.password, body.password)

            send_refresh_token(response, create_refresh_token(user))
            return {"access_token": create_access_token(user)}
        except:
            return {"Unauthenticated"}


class RegisterBody(BaseModel):
    email: str
    password: str
    username: str

@router.post("/register")
async def register(body: RegisterBody, response: Response):
    with Session(engine) as session:
        user = User(email=body.email, password=hasher.hash(body.password), username=body.username)
        session.add(user)

        session.commit()
        session.refresh(user)

        send_refresh_token(response, create_refresh_token(user))
        return {"access_token": create_access_token(user)}


@router.post("/refresh")
async def get_new_token(jid: Annotated[str, Cookie()], response: Response):
    with Session(engine) as session:
        try:
            userId = decode_user_jwt(jid)
            statement = select(User).where(User.userId == userId)
            user = session.exec(statement).first()
                
            send_refresh_token(response, create_refresh_token(user))
            return {"access_token": create_access_token(user)}
        except: 
            return {"Unauthenticated"}