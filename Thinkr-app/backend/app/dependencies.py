from fastapi import Response
from jwt import encode
from datetime import datetime, timezone, timedelta

from app.models.models import User

# TODO: save secret in .env
secret = "TESTSECRET"

def create_access_token(user: User) -> str:
    return encode(
        {
            "exp": datetime.now(tz=timezone.utc) + timedelta(seconds=30),
            "userId": user.userId
        }, 
        secret)

def create_refresh_token(user: User) -> str:
    return encode(
        {
            "exp": datetime.now(tz=timezone.utc) + timedelta(days=7),
            "userId": user.userId
        }, 
        secret)


def send_refresh_token(response: Response, token: str):
    return response.set_cookie("jid", token, httponly=True)