import { cookies } from "next/headers";
import { decode } from "jsonwebtoken";

export const getUserIdFromCookies = async () => {
  const session = cookies().get("jid")?.value;
  if (!session) return null;

  try {
    const decoded = decode(session) as { exp: number; userId: string };
    return decoded.userId;
  } catch (error) {
    console.log(error);
    return null;
  }
};
