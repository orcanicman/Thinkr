import { Post, Profile, User } from "@/types/models";
import { FastApi } from "./FastApi";

export const getPosts = async () => {
  try {
    const response =
      await FastApi.get<(Post & { User: User & { Profile: Profile } })[]>(
        "/posts",
      );
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
