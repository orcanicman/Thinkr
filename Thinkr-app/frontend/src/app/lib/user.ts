import { Profile, ReturnPost, ReturnUser, User } from "@/types/models";
import { FastApi } from "./FastApi";

// No try catch, we ball.

export const getUser = async ({
  param,
  type = "id",
}: {
  param: string;
  type?: "id" | "tag";
}): Promise<ReturnUser> => {
  const res = await FastApi.get<ReturnUser>(
    `/users/${param}${type === "tag" ? `/?type=${type}` : ""}`,
  );
  return res.data;
};

export const getProfile = async ({
  param,
}: {
  param: string;
}): Promise<Profile> => {
  const res = await FastApi.get<Profile>(`/profiles/${param}`);
  return res.data;
};

export const getPostsFromUser = async ({
  param,
}: {
  param: string;
}): Promise<ReturnPost[]> => {
  const res = await FastApi.get<ReturnPost[]>(`/users/${param}/posts`);
  return res.data;
};
