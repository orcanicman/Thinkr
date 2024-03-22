import { getPosts } from "../lib/post";
import { InputBox } from "./InputBox";
import { Posts } from "./Posts";
import { getUserData } from "./layout";

export default async function Home() {
  const user = await getUserData();
  const posts = await getPosts();
  return (
    <>
      <InputBox user={user} />
      <Posts posts={posts} />
    </>
  );
}
