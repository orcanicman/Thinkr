import { ReturnPost } from "@/types/models";
import { FastApi } from "./FastApi";

export const getPosts = async () => {
  try {
    const response = await FastApi.get<ReturnPost[]>("/posts");
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
