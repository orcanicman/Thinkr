export type User = {
  userId: string;
  verified: boolean;
  profileId: null | string;
  email: string;
  password: string;
  username: string;
  deleted: boolean;
  createdAt: string;
  updatedAt: null | string;
};

export type AuthResponse = {
  access_token: string;
  refresh_token: string;
};
