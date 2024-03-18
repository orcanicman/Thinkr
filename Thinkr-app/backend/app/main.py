from fastapi import FastAPI
from .routers import users, posts

app = FastAPI()

app.include_router(users.router)

@app.get("/")
async def root():
    return {"message": "Thinkr Api 0.1"}