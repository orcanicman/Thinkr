import {
  Profile,
  ReturnFollower,
  ReturnPost,
  ReturnUser,
  User,
} from "@/types/models";
import { FastApi } from "./FastApi";

export const getUser = async ({
  param,
  type = "id",
}: {
  param: string;
  type?: "id" | "tag";
}): Promise<ReturnUser | undefined> => {
  try {
    const res = await FastApi.get<ReturnUser>(
      `/users/${param}${type === "tag" ? `/?type=${type}` : ""}`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const getProfile = async ({
  param,
}: {
  param: string;
}): Promise<Profile | undefined> => {
  try {
    const res = await FastApi.get<Profile>(`/profiles/${param}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const getPostsFromUser = async ({
  param,
}: {
  param: string;
}): Promise<ReturnPost[]> => {
  try {
    const res = await FastApi.get<ReturnPost[]>(`/users/${param}/posts`);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getFollowersFromUser = async ({ param }: { param: string }) => {
  try {
    const res = await FastApi.get<ReturnFollower[]>(
      `/follows/${param}/followers`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getFollowsFromUser = async ({ param }: { param: string }) => {
  try {
    const res = await FastApi.get<ReturnFollower[]>(
      `/follows/${param}/follows`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
