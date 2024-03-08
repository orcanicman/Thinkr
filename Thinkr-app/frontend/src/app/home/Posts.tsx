"use client";

import { relativeDateFormatter } from "@/helpers/relativeDateFormatter";
import Image from "next/image";

export const Posts = ({ posts }: { posts: any[] }) => {
  return (
    <>
      {posts.map((post, index) => (
        <Post key={index} />
      ))}
    </>
  );
};

export const Post = () => {
  return (
    <div className="mb-8 flex items-start rounded-3xl bg-ownLight p-8 dark:bg-ownLightBlue">
      {/* PICTURE PLACEHOLDER */}
      <div className="mr-8 h-12 w-12 min-w-12 rounded-full bg-ownWhite" />
      {/* NAME PLACEHOLDER */}
      <div className="flex grow flex-col">
        <div className="flex justify-between">
          <span className="flex space-x-2">
            <h1 className="flex flex-col font-semibold">NAME</h1>
            <h3 className="mb-1 text-sm text-ownGrey">@tag</h3>
          </span>
          <button className="min-w-7">
            <Image
              alt="Settings"
              src={"menu-meatball.svg"}
              width={26}
              height={26}
            />
          </button>
        </div>
        <h3 className="mb-4 text-sm text-ownGrey">
          {relativeDateFormatter(new Date().getTime() - 5000)}
        </h3>
        <p className="mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          asperiores molestiae nostrum ex atque a eum similique pariatur
          veritatis, saepe consequuntur eveniet ducimus nihil est.
        </p>

        <div className="flex justify-between">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        </div>
      </div>
    </div>
  );
};
