import { redirect } from "next/navigation";
import { getUserIdFromCookies } from "./session";
import { getProfile, getUser } from "./user";

export const routeGuard = async (
  ignore: "login" | "finish-setting-up" | "home",
) => {
  const userId = await getUserIdFromCookies();
  if (!userId) {
    !(ignore == "login") && redirect("/login");
    return;
  }

  const user = await getUser(userId);
  if (!user) {
    !(ignore == "login") && redirect("/login");
    return;
  }

  const profile = await getProfile(user.userId);
  if (!profile) {
    !(ignore == "finish-setting-up") && redirect("/finish-setting-up");
    return;
  }

  !(ignore == "home") && redirect("/home");

  return { user, profile };
};
