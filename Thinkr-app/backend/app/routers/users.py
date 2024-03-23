from fastapi import APIRouter
from sqlmodel import Session, select
from app.models.models import Post, Profile, User
from ..utils.database import engine

router = APIRouter(prefix="/users")


@router.get("/")
async def get_users():
    with Session(engine) as session:
        data = session.exec(select(User, Profile).where(User.userId == Profile.userId)).all()
        
        returnData = []
        for user, profile in data:
            returnData.append({**user.model_dump(), "Profile": profile})
        
        return returnData


@router.get("/{user_id}")
async def get_user(user_id: str):
    with Session(engine) as session:
        user, profile = session.exec(select(User, Profile).join(Profile).where(User.userId == user_id)).first()
        
        returnUser = {**user.model_dump(), "Profile": profile}
        return returnUser
    

@router.get("/{user_id}/posts")
async def get_user_posts(user_id:str):
    with Session(engine) as session:
        data = session.exec(select(Post, User, Profile).where(User.userId == user_id, Profile.userId == user_id, Post.userId == user_id))

        returnData = []
        for post, user, profile in data:
            returnData.append({**post.model_dump(), "User": {**user.model_dump(), "Profile": {**profile.model_dump()}}})
        
        return returnData