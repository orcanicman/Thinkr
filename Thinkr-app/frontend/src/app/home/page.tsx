import { getPosts } from "../lib/post";
import { Home } from "./Home";
import { InputBox } from "./InputBox";
import { Posts } from "./Posts";
import { getUserData } from "./layout";

export default async function HomePage() {
  const user = await getUserData();
  const posts = await getPosts();
  return (
    <>
      <Home user={user} initialPosts={posts} />
    </>
  );
}
