from typing import Annotated
from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlmodel import Session, select

from app.models.models import Follow
from app.utils.is_auth import is_auth
from ..utils.database import engine


router = APIRouter(prefix="/follows")


@router.get("/{user_id}")
async def get_followers(user_id: str):
    with Session(engine) as session:
        followers = session.exec(select(Follow).where(Follow.following == user_id)).all()
        
        return followers
    

class FollowBody(BaseModel):
    user_id: str


@router.post("/follow")
async def follow(body: FollowBody, user_id: Annotated[str, Depends(is_auth)]):
    with Session(engine) as session:
        # check if already exists.
        isFollowig = session.exec(select(Follow).where(Follow.following == body.user_id)).first()
        
        if isFollowig == None:
            new_follow = Follow(follower=user_id, following=body.user_id)
            session.add(new_follow)
            session.commit()
            return new_follow

        return isFollowig
    


class UnfollowBody(BaseModel):
    user_id: str


@router.post("/unfollow")
async def follow(body: UnfollowBody, user_id: Annotated[str, Depends(is_auth)]):
    with Session(engine) as session:
        # check if already exists.
        isFollowig = session.exec(select(Follow).where(Follow.following == body.user_id, Follow.follower == user_id)).first()
        
        if isFollowig != None:
            session.delete(isFollowig)
            session.commit()
            return isFollowig

        return isFollowig
    

