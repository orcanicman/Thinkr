import { cookies } from "next/headers";
import { decode } from "jsonwebtoken";

export const getSession = async () => {
  const session = cookies().get("jid")?.value;
  if (!session) return null;

  try {
    decode(session);
    return true;
  } catch (error) {
    console.log(error);
  }
};
