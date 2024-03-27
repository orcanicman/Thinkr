export type User = {
  userId: string;
  verified: boolean;
  email: string;
  password: string;
  username: string;
  deleted: boolean;
  createdAt: string;
  updatedAt: null | string;
};

export type Profile = {
  bio: string;
  displayName: string;
  photo: string;
  updatedAt: null | string;
  userId: string;
  profileId: string;
  banner: string;
  createdAt: string;
};

export type AuthResponse = {
  access_token: string;
};

export type Post = {
  postId: string;
  userId: string;
  content: string;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ReturnPost = Post & { User: User & { Profile: Profile } };

export type ReturnUser = User & { Profile: Profile | undefined };
