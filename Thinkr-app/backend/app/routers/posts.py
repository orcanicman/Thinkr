from typing import Annotated
from fastapi import APIRouter, Depends, Header
from pydantic import BaseModel
from sqlmodel import Session, select
from jwt import decode
from app.models.models import Post, User, Profile
from ..utils.is_auth import is_auth
from ..utils.database import engine
from ..dependencies import secret


router = APIRouter(prefix="/posts")

class CreatePostBody(BaseModel):
    content: str


@router.post("/")
async def create_post(body: CreatePostBody, userId: Annotated[str, Depends(is_auth)]):
    with Session(engine) as session:
        post = Post(content=body.content, userId=userId)
        session.add(post)

        session.commit()
        session.refresh(post)

        user = session.exec(select(User).where(User.userId == post.userId)).first()
        profile = session.exec(select(Profile).where(Profile.userId == post.userId)).first()

    return {**post.model_dump(), "User": {**user.model_dump(), "Profile": profile}}


@router.get("/")
async def get_posts():
    with Session(engine) as session:
        posts = session.exec(select(Post, User, Profile).where(Post.userId == User.userId, Post.userId == Profile.userId)).all()
        
        returnPosts = []
        for post, user, profile in posts:
            returnPosts.append({**post.model_dump(), "User": {**user.model_dump(), "Profile": profile}})
        
        return returnPosts