import { User } from "@/types/models";
import { FastApi } from "./FastApi";

export const getUser = async (userId: string): Promise<User> => {
  const res = await FastApi.get<User>(`/users/${userId}`);
  return res.data;
};

export const getProfile = async (userId: string): Promise<any> => {
  const res = await FastApi.get(`/profiles/${userId}`);
  return res.data;
};
