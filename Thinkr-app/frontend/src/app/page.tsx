import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-6">
      <span>This is for development...</span>
      <span>Here are some links </span>
      <ul className="flex flex-col my-6">
        <Link href={"login"} className="underline text-ownGreen">
          Login page
        </Link>
        <Link href={"register"} className="underline text-ownGreen">
          Register
        </Link>
      </ul>
    </main>
  );
}
