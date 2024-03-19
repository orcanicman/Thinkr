from fastapi import APIRouter
from sqlmodel import Session, select
from app.models.models import User
from ..utils.database import engine

router = APIRouter(prefix="/users")

# User routes
@router.get("/")
async def read_users():
    with Session(engine) as session:
        users = session.exec(select(User)).all()
        return users

@router.get("/{user_id}")
async def read_user(user_id: str):
    with Session(engine) as session:
        user = session.exec(select(User).where(User.userId == user_id)).first()
        return user

@router.post("/")
async def create_user(user: User):
    # TODO: Validate body
    with Session(engine) as session:
        session.add(user)
        session.commit()
        session.refresh(user)
        return user

@router.put("/{user_id}")
async def update_user(user_id: str, user: User):
    with Session(engine) as session:
        user_ = session.exec(select(User).where(User.userId == user_id)).first()
        user_.username = user.username
        user_.email = user.email
        user_.hashedPassword = user.hashedPassword
        session.commit()
        session.refresh(user_)
        return user_

@router.delete("/{user_id}")
async def delete_user(user_id: str):
    with Session(engine) as session:
        user = session.exec(select(User).where(User.userId == user_id)).first()
        session.delete(user)
        session.commit()
        return {"message": "User deleted successfully"}

