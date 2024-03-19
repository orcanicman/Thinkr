"use server";

import { AuthResponse } from "@/types/models";
import axios from "axios";
import { cookies } from "next/headers";

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

    const res = await axios.post<AuthResponse>(
      "http://localhost:8000/auth/login",
      body,
      {
        withCredentials: true,
      },
    );

    if (!res.headers["set-cookie"]?.[0]) throw Error("Cookie error");

    const cookieValue = res.headers["set-cookie"][0]
      .split("jid=")[1]
      .split(";")[0];

    cookies().set("jid", cookieValue, { httpOnly: true });
  } catch (error) {
    console.log(error);
  }
};

export const register = async (formData: FormData) => {
  try {
    console.log("REGISTER CALLED!");
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

    const res = await axios.post<AuthResponse>(
      "http://localhost:8000/auth/register",
      body,
      {
        withCredentials: true,
      },
    );
    console.log(res);
    if (!res.headers["set-cookie"]?.[0]) throw Error("Cookie error");

    const cookieValue = res.headers["set-cookie"][0]
      .split("jid=")[1]
      .split(";")[0];

    cookies().set("jid", cookieValue, { httpOnly: true });
  } catch (error) {
    console.log(error);
  }
};
