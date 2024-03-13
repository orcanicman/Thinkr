import { InputBox } from "./InputBox";
import { Posts } from "./Posts";

export default function Home() {
  return (
    <>
      <InputBox />
      <Posts posts={[1, 2, 3, 4, 5]} />
    </>
  );
}
