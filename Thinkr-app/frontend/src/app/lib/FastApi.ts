import axios from "axios";
import { decode } from "jsonwebtoken";
import { cookies } from "next/headers";
import { setAuthCookies } from "./actions";
import { AuthResponse } from "@/types/models";

export const FastApi = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

FastApi.interceptors.request.use(async (request) => {
  const refreshCookie = cookies().get("jid");
  const authCookie = cookies().get("auth");
  if (!authCookie) return request;
  if (!refreshCookie) return request;

  request.headers.Authorization = `Bearer ${authCookie.value}`;

  const decoded = decode(authCookie.value) as { exp: number; userId: string };

  // check if decoded.exp is expired. if so, request a new access token.
  if (Date.now() >= decoded.exp * 1000) {
    try {
      const response = await axios.post<AuthResponse>(
        "http://localhost:8000/auth/refresh",
        {},
        {
          withCredentials: true,
          headers: { Cookie: `jid=${refreshCookie.value}` },
        },
      );

      request.headers.Authorization = `Bearer ${response.data.access_token}`;

      // const refreshToken =
      //   response.headers["set-cookie"]![0].split("jid=")[1].split(";")[0];

      // setAuthCookies(refreshToken, response.data.access_token);
    } catch (error) {
      console.log(error);
    }
  }

  return request;
});
