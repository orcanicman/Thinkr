"use server";

import { AuthResponse, User } from "@/types/models";
import axios from "axios";

export const login = async (formData: FormData) => {
  try {
    console.log("LOGIN CALLED!");
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

    const res = await axios.post<typeof body, { data: AuthResponse }>(
      "http://localhost:8000/auth/login",
      body,
      {
        withCredentials: true,
      },
    );
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

    const res = await axios.post<typeof body, { data: AuthResponse }>(
      "http://localhost:8000/auth/register",
      body,
      {
        withCredentials: true,
      },
    );

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
