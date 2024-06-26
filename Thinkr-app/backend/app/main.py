from fastapi import FastAPI
from .routers import auth, users, posts, profile, follows

app = FastAPI()

app.include_router(users.router)
app.include_router(posts.router)
app.include_router(profile.router)
app.include_router(auth.router)
app.include_router(follows.router)

@app.get("/")
async def root():
    return {"message": "Thinkr Api 0.1"}