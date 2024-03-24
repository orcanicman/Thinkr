import { redirect } from "next/navigation";
import { getUserIdFromCookies } from "./session";
import { getProfile, getUser } from "./user";
// import { Profile, User } from "@/types/models";

export const routeGuard = async (
  ignore: "login" | "finish-setting-up" | "home",
) => {
  // If there is no userId in cookies, redirect to login
  const userId = await getUserIdFromCookies();
  if (!userId) {
    !(ignore == "login") && redirect("/login");
    return;
  }

  // If the userId is not valid, redirect to login
  const user = await getUser({ param: userId });
  if (!user) {
    !(ignore == "login") && redirect("/login");
    return;
  }

  // If the user has no profile, redirect to finish-setting-up
  const profile = await getProfile({ param: user.userId });
  if (!profile) {
    !(ignore == "finish-setting-up") && redirect("/finish-setting-up");
    return;
  }

  // If user and profile exist, redirect to home
  !(ignore == "home") && redirect("/home");

  return { user, profile };
};

// Pseudo typing, TODO: make returnType implementation correct

// export const routeGuard = async <T extends "login" | "finish-setting-up" | "home">(
//   ignore: T
// ): Promise<T extends "home" ? { user: User; profile: Profile } : { user: User; profile: Profile } | undefined> => {
//   // If there is no userId in cookies, redirect to login
//   const userId = await getUserIdFromCookies();
//   if (!userId) {
//     !(ignore == "login") && redirect("/login");
//     return;
//   }

//   // If the userId is not valid, redirect to login
//   const user = await getUser(userId);
//   if (!user) {
//     !(ignore == "login") && redirect("/login");
//     return;
//   }

//   // If the user has no profile, redirect to finish-setting-up
//   const profile = await getProfile(user.userId);
//   if (!profile) {
//     !(ignore == "finish-setting-up") && redirect("/finish-setting-up");
//     return;
//   }

//   // If user and profile exist, redirect to home
//   !(ignore == "home") && redirect("/home");

//   return { user, profile };
// };
