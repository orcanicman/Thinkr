"use server";

import { AuthResponse } from "@/types/models";
import { cookies } from "next/headers";
import { FastApi } from "./FastApi";
import { getUserIdFromCookies } from "./session";

export const setAuthCookies = (refreshToken: string, accessToken: string) => {
  cookies().set("jid", refreshToken, { httpOnly: true });
  cookies().set("auth", accessToken);
};

export const login = async (formData: FormData) => {
  try {
    const body: { email: string; password: string } = {
      email: "",
      password: "",
    };

    // this is gross. map over array or use: for (const of)
    formData.forEach((_data, _key) => {
      const data = _data as string;
      const key = _key as keyof typeof body;

      if (key === "email") body.email = data;
      if (key === "password") body.password = data;
    });

    const res = await FastApi.post<AuthResponse>("/auth/login", body);

    if (!res.headers["set-cookie"]?.[0]) throw Error("Cookie error");

    const refreshToken = res.headers["set-cookie"][0]
      .split("jid=")[1]
      .split(";")[0];

    setAuthCookies(refreshToken, res.data.access_token);
  } catch (error) {
    console.log(error);
  }
};

export const register = async (formData: FormData) => {
  try {
    const body: { email: string; password: string; username: string } = {
      email: "",
      password: "",
      username: "",
    };

    // this is gross. map over array or use: for (const of)
    formData.forEach((_data, _key) => {
      const data = _data as string;
      const key = _key as keyof typeof body;

      if (key === "email") body.email = data;
      if (key === "password") body.password = data;
      if (key === "username") body.username = data;
    });

    const res = await FastApi.post<AuthResponse>("/auth/register", body);

    if (!res.headers["set-cookie"]?.[0]) throw Error("Cookie error");

    const refreshToken = res.headers["set-cookie"][0]
      .split("jid=")[1]
      .split(";")[0];

    setAuthCookies(refreshToken, res.data.access_token);
  } catch (error) {
    console.log(error);
  }
};

export const createProfile = async (formData: FormData) => {
  try {
    const userId = await getUserIdFromCookies();
    const body = {
      userId,
      displayName: formData.get("displayName"),
      bio: formData.get("bio"),
      banner: "",
      photo: "",
    };

    // todo:
    const res = await FastApi.post("/profiles", body);
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (formData: FormData) => {
  try {
    const body = {
      content: formData.get("content"),
    };

    const res = await FastApi.post("/posts", body);
    // console.log("RESPONSE:");
    // console.log(res);
  } catch (error) {
    console.log(error);
  }
};
