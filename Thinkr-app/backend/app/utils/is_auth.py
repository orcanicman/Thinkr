from typing import Annotated
from fastapi import Header
from jwt import decode
from ..dependencies import secret

# can throw exception
def decode_user_jwt(jwt:str) -> (str | None):
    decoded = decode(jwt, secret, algorithms=["HS256"])
    return decoded["userId"]

async def is_auth(Authorization: Annotated[str, Header()]):
    try:
        return decode_user_jwt(Authorization.split("Bearer ")[1])
    except:
        return
