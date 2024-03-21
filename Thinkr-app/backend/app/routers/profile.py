from fastapi import APIRouter
from pydantic import BaseModel
from sqlmodel import Session, select
from app.models.models import Profile
from ..utils.database import engine

router = APIRouter()

# Profile routes
@router.get("/profiles/")
async def read_profiles():
    with Session(engine) as session:
        profiles = session.exec(select(Profile)).all()
        return profiles

@router.get("/profiles/{user_id}")
async def read_profile(user_id: str):
    with Session(engine) as session:
        profile = session.exec(select(Profile).where(Profile.userId == user_id)).first()
        return profile

class CreateProfileBody(BaseModel):
    userId: str
    displayName: str
    bio: str
    banner: str
    photo: str

@router.post("/profiles/")
async def create_profile(body: CreateProfileBody):
    with Session(engine) as session:
        profile = Profile(displayName=body.displayName, bio=body.bio, banner=body.banner, photo=body.photo, userId=body.userId)
        session.add(profile)
        session.commit()
        session.refresh(profile)
        return profile

@router.put("/profiles/{profile_id}")
async def update_profile(profile_id: str, profile: Profile):
    with Session(engine) as session:
        profile_ = session.exec(select(Profile).where(Profile.profileId == profile_id)).first()
        profile_.displayName = profile.displayName
        profile_.bio = profile.bio
        profile_.photo = profile.photo
        profile_.banner = profile.banner
        session.commit()
        session.refresh(profile_)
        return profile_

@router.delete("/profiles/{profile_id}")
async def delete_profile(profile_id: str):
    with Session(engine) as session:
        profile = session.exec(select(Profile).where(Profile.profileId == profile_id)).first()
        session.delete(profile)
        session.commit()
        return {"message": "Profile deleted successfully"}

