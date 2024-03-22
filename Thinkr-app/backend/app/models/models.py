from datetime import datetime

from sqlmodel import Field, SQLModel, create_engine, Column, DateTime, func

from cuid2 import Cuid

CUID_GENERATOR = Cuid()

class User(SQLModel, table=True):
    userId: str = Field(default_factory=CUID_GENERATOR.generate, primary_key=True)
    username: str
    email: str = Field(unique=True)
    password:str
    verified:bool = False
    deleted:bool = False
    createdAt: datetime = Field(
        sa_column=Column(
            DateTime(timezone=True), server_default=func.now(), nullable=True
        )
    )
    updatedAt: datetime = Field(
        sa_column=Column(
            DateTime(timezone=True), onupdate=func.now(), nullable=True
        )
    )


class Profile(SQLModel, table=True):
    profileId: str = Field(default_factory=CUID_GENERATOR.generate, primary_key=True)
    userId: str = Field(foreign_key="user.userId", unique=True)
    displayName: str
    bio: str
    banner: str
    photo: str
    createdAt: datetime = Field(
        sa_column=Column(
            DateTime(timezone=True), server_default=func.now(), nullable=True
        )
    )
    updatedAt: datetime = Field(
        sa_column=Column(
            DateTime(timezone=True), onupdate=func.now(), nullable=True
        )
    )


class Post(SQLModel, table=True):
    postId: str = Field(default_factory=CUID_GENERATOR.generate, primary_key=True)
    userId: str = Field(foreign_key="user.userId")
    content: str
    deleted:bool = False
    createdAt: datetime = Field(
        sa_column=Column(
            DateTime(timezone=True), server_default=func.now(), nullable=True
        )
    )
    updatedAt: datetime = Field(
        sa_column=Column(
            DateTime(timezone=True), onupdate=func.now(), nullable=True
        )
    )


class Like(SQLModel, table=True):
    postId: str = Field(foreign_key="post.postId", primary_key=True)
    userId: str = Field(foreign_key="user.userId", primary_key=True)
    createdAt: datetime = Field(
        sa_column=Column(
            DateTime(timezone=True), server_default=func.now(), nullable=True
        )
    )


class Repost(SQLModel, table=True):
    postId: str = Field(foreign_key="post.postId", primary_key=True)
    userId: str = Field(foreign_key="user.userId", primary_key=True)
    createdAt: datetime = Field(
        sa_column=Column(
            DateTime(timezone=True), server_default=func.now(), nullable=True
        )
    )


class Comment(SQLModel, table=True):
    commentId: str = Field(default_factory=CUID_GENERATOR.generate, primary_key=True)
    postId: str = Field(foreign_key="post.postId")
    userId: str = Field(foreign_key="user.userId")
    content: str
    createdAt: datetime = Field(
        sa_column=Column(
            DateTime(timezone=True), server_default=func.now(), nullable=True
        )
    )
    updatedAt: datetime = Field(
        sa_column=Column(
            DateTime(timezone=True), onupdate=func.now(), nullable=True
        )
    )


class Follow(SQLModel, table=True):
    follwer: str = Field(foreign_key="user.userId", primary_key=True)
    follwing: str = Field(foreign_key="user.userId", primary_key=True)


def create_db_and_tables():
    sqlite_file_name = "database.db"
    sqlite_url = f"sqlite:///{sqlite_file_name}"
    engine = create_engine(sqlite_url, echo=True)
    SQLModel.metadata.create_all(engine)
