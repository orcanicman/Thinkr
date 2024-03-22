"use client";

import { relativeDateFormatter } from "@/helpers/relativeDateFormatter";
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "../lib/post";
import { convertUTCDateToLocal } from "@/helpers/convertUtcDateToLocal";

type IPost = Awaited<ReturnType<typeof getPosts>>[number];

export const Posts = ({ posts }: { posts: IPost[] }) => {
  return (
    <>
      {posts
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        )
        .map((post, index) => (
          <Post post={post} key={index} />
        ))}
    </>
  );
};

export const Post = ({ post }: { post: IPost }) => {
  return (
    <div className="mb-8 flex items-start rounded-3xl bg-ownLight p-8 dark:bg-ownLightBlue">
      <div className="flex grow flex-col">
        <div className="flex">
          {/* PICTURE PLACEHOLDER */}
          <div className="mr-4 h-12 w-12 min-w-12 rounded-full bg-ownWhite" />
          <section className="grow">
            <div className="flex justify-between">
              <Link
                href={"/home/TESTUSER"}
                className="flex items-baseline space-x-2 hover:underline"
              >
                <h1 className="flex flex-col font-semibold">
                  {post.User.Profile.displayName}
                </h1>
                <h3 className="mb-1 text-sm text-ownGrey">
                  @{post.User.username}
                </h3>
              </Link>
              <button className="min-w-7">
                <Image
                  alt="Settings"
                  src={"/menu-meatball.svg"}
                  width={26}
                  height={26}
                />
              </button>
            </div>
            <h3 className="mb-4 text-sm text-ownGrey">
              {relativeDateFormatter(
                convertUTCDateToLocal(new Date(post.createdAt)).getTime(),
              )}
            </h3>
          </section>
        </div>

        <p className="mb-8">{post.content}</p>

        <div className="flex justify-between">
          <PostButton amount={50}>
            <Image alt="Like" src={"/Like.svg"} width={12} height={10} />
            <span className="hidden">Likes</span>
          </PostButton>
          <PostButton amount={50}>
            <Image alt="Repost" src={"/Repost.svg"} width={15} height={10} />
            <span className="hidden">Reposts</span>
          </PostButton>
          <PostButton amount={50}>
            <Image alt="Comment" src={"/Comment.svg"} width={15} height={10} />
            <span className="hidden">Comment</span>
          </PostButton>
          <PostButton amount={50}>
            <Image alt="Share" src={"/Share.svg"} width={10} height={10} />
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
