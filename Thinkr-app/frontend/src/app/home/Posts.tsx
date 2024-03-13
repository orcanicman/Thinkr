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
          <PostButton amount={50}>
            <Image alt="Like" src={"Like.svg"} width={12} height={10} />
            <span className="hidden">Likes</span>
          </PostButton>
          <PostButton amount={50}>
            <Image alt="Repost" src={"Repost.svg"} width={15} height={10} />
            <span className="hidden">Reposts</span>
          </PostButton>
          <PostButton amount={50}>
            <Image alt="Comment" src={"Comment.svg"} width={15} height={10} />
            <span className="hidden">Comment</span>
          </PostButton>
          <PostButton amount={50}>
            <Image alt="Share" src={"Share.svg"} width={10} height={10} />
            <span className="hidden">Share</span>
          </PostButton>
        </div>
      </div>
    </div>
  );
};

const PostButton = ({
  children,
  amount,
}: {
  children: React.ReactNode;
  amount: number;
}) => {
  return (
    <button className="flex items-center space-x-2 rounded-xl border border-ownWhite px-4 py-2">
      {children}
    </button>
  );
};
