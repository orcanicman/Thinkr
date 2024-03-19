from typing import Annotated
from fastapi import APIRouter, Header
from pydantic import BaseModel
from sqlmodel import Session, select
from app.models.models import Post
from ..utils.database import engine

router = APIRouter(prefix="/posts")

class CreatePostBody(BaseModel):
    content: str


@router.post("/")
async def create_post(body: CreatePostBody, Authorization: Annotated[str, Header()]):
    # with Session(engine) as session:
    print(Authorization)
    return 
