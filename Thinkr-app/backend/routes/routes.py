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
        

