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
