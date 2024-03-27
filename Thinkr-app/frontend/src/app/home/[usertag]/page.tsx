import { getPostsFromUser, getUser } from "@/app/lib/user";
import { Posts } from "../Posts";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: { usertag: string };
}) {
  // get user by tag
  const user = await getUser({ param: params.usertag, type: "tag" });

  const posts = await getPostsFromUser({ param: user.userId });
  return (
    <main>
      <section className="mb-6 rounded-3xl bg-ownLightBlue">
        <header className="relative mb-16">
          {user.Profile?.banner ? (
            <Image src={user.Profile.banner} alt="" />
          ) : (
            <div className="mb-4 h-80 w-full rounded-t-3xl bg-ownBlack" />
          )}

          {user.Profile?.photo ? (
            <Image src={user.Profile.photo} alt="" />
          ) : (
            <div className="absolute -bottom-16 left-8 h-36 w-36 rounded-full bg-ownWhite" />
          )}
        </header>
        <main className="p-6">
          <section className="mb-4 flex items-baseline space-x-2">
            <h1 className="text-2xl font-bold">{user.username}</h1>
            <span className="text-sm text-ownGrey">@{params.usertag}</span>
          </section>
          <p className="mb-4">{user.Profile?.bio}</p>

          <section className="flex justify-between">
            <button className="active grow font-bold underline decoration-ownGreen decoration-2 underline-offset-8 hover:underline">
              Posts
            </button>
            <button className="grow font-bold decoration-ownGreen decoration-2 underline-offset-8 hover:underline">
              Liked posts
            </button>
            <button className="grow font-bold decoration-ownGreen decoration-2 underline-offset-8 hover:underline">
              Comments
            </button>
          </section>
        </main>
      </section>
      <Posts posts={posts} />
    </main>
  );
}
