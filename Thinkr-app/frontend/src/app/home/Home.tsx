"use client";
import { useState } from "react";
import { getPosts } from "../lib/post";
import { InputBox } from "./InputBox";
import { Posts } from "./Posts";
import { getUserData } from "./layout";

export const Home = ({
  user,
  initialPosts,
}: {
  user: Awaited<ReturnType<typeof getUserData>>;
  initialPosts: Awaited<ReturnType<typeof getPosts>>;
}) => {
  const [posts, setPosts] = useState<typeof initialPosts>(initialPosts);

  return (
    <>
      <InputBox user={user} onNewPost={(post) => setPosts([...posts, post])} />
      <Posts posts={posts} />
    </>
  );
};
