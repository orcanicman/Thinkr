from fastapi import FastAPI
from models.models import Users, Posts, Comments, Likes, Rethinks, Followers, Tags, Post_Tags, Notifications
from sqlmodel import Session, create_engine, select 

sqlite_file_name = "database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"
engine = create_engine(sqlite_url, echo=True)

app = FastAPI()


# Root route
@app.get("/")
async def root():
    return {"message": "Thinkr Api 1.0"}

# User routes
@app.get("/users/")
def read_users():
    with Session(engine) as session:
        users = session.exec(select(Users)).all()
        return users

@app.get("/users/{user_id}")
def read_user(user_id: int):
    with Session(engine) as session:
        user = session.exec(select(Users).where(Users.userId == user_id)).first()
        return user

@app.post("/users/")
def create_user(user: Users):
    with Session(engine) as session:
        session.add(user)
        session.commit()
        session.refresh(user)
        return user

@app.put("/users/{user_id}")
def update_user(user_id: int, user: Users):
    with Session(engine) as session:
        user_ = session.exec(select(Users).where(Users.userId == user_id)).first()
        user_.username = user.username
        user_.email = user.email
        user_.hashedPassword = user.hashedPassword
        session.commit()
        session.refresh(user_)
        return user_

@app.delete("/users/{user_id}")
def delete_user(user_id: int):
    with Session(engine) as session:
        user = session.exec(select(Users).where(Users.userId == user_id)).first()
        session.delete(user)
        session.commit()
        return {"message": "User deleted successfully"}

