from typing import Optional

from datetime import datetime

from sqlmodel import Field, SQLModel, create_engine, Column, DateTime, func

class Users(SQLModel, table=True):
    userId: Optional[int] = Field(default=None, primary_key=True)
    username: str
    email: str
    hashedPassword: str
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
    deleted: Optional[bool] = False

class Profile(SQLModel, table=True):
    profileId: Optional[int] = Field(default=None, primary_key=True)
    userId: Optional[int] = Field(default=None, foreign_key="users.userId")
    biograpy: Optional[str] = None
    profilePicture: Optional[str] = None
    coverPicture: Optional[str] = None
    firstName: Optional[str] = None
    lastName: Optional[str] = None
    displayName: Optional[str] = None
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
    deleted: Optional[bool] = False

class Posts(SQLModel, table=True):
    postId: Optional[int] = Field(default=None, primary_key=True)
    userId: Optional[int] = Field(default=None, foreign_key="users.userId")
    content: str
    likeCount: int = 0
    rethinkCount: int = 0
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
    deleted: Optional[bool] = False

class Comments(SQLModel, table=True):
    commentId: Optional[int] = Field(default=None, primary_key=True)
    userId: Optional[int] = Field(default=None, foreign_key="users.userId")
    postId: Optional[int] = Field(default=None, foreign_key="posts.postId")
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
    deleted: Optional[bool] = False

class Likes(SQLModel, table=True):
    likeId: Optional[int] = Field(default=None, primary_key=True)
    userId: Optional[int] = Field(default=None, foreign_key="users.userId")
    postId: Optional[int] = Field(default=None, foreign_key="posts.postId")
    createdAt: datetime = Field(
        sa_column=Column(
            DateTime(timezone=True), server_default=func.now(), nullable=True
        )
    )
    deleted: Optional[bool] = False

class Rethinks(SQLModel, table=True):
    rethinkId: Optional[int] = Field(default=None, primary_key=True)
    userId: Optional[int] = Field(default=None, foreign_key="users.userId")
    postId: Optional[int] = Field(default=None, foreign_key="posts.postId")
    createdAt: datetime = Field(
        sa_column=Column(
            DateTime(timezone=True), server_default=func.now(), nullable=True
        )
    )
    deleted: Optional[bool] = False

class Followers(SQLModel, table=True):
    followerId: Optional[int] = Field(default=None, primary_key=True)
    userId: Optional[int] = Field(default=None, foreign_key="users.userId")
    follower_userId: Optional[int] = Field(default=None, foreign_key="users.userId")

class Tags(SQLModel, table=True):
    tag_id: Optional[int] = Field(default=None, primary_key=True)
    tag_name: str
    createdAt: datetime = Field(
        sa_column=Column(
            DateTime(timezone=True), server_default=func.now(), nullable=True
        )
    )
    deleted: Optional[bool] = False

class Post_Tags(SQLModel, table=True):
    post_tagId: Optional[int] = Field(default=None, primary_key=True)
    postId: Optional[int] = Field(default=None, foreign_key="posts.postId")
    tag_id: Optional[int] = Field(default=None, foreign_key="tags.tag_id")

class Notifications(SQLModel, table=True):
    notificationId: Optional[int] = Field(default=None, primary_key=True)
    userId: Optional[int] = Field(default=None, foreign_key="users.userId")
    postId: Optional[int] = Field(default=None, foreign_key="posts.postId")
    commentId: Optional[int] = Field(default=None, foreign_key="comments.commentId")
    likeId: Optional[int] = Field(default=None, foreign_key="likes.likeId")
    rethinkId: Optional[int] = Field(default=None, foreign_key="rethinks.rethinkId")
    createdAt: datetime = Field(
        sa_column=Column(
            DateTime(timezone=True), server_default=func.now(), nullable=True
        )
    )
    deleted: Optional[bool] = False


def create_db_and_tables():
    sqlite_file_name = "database.db"
    sqlite_url = f"sqlite:///{sqlite_file_name}"
    engine = create_engine(sqlite_url, echo=True)
    SQLModel.metadata.create_all(engine)

