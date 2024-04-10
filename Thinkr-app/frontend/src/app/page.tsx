import { redirect } from "next/navigation";

export default function LandingPage() {
  redirect("/home");
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* <span>This is for development...</span>
      <span>Here are some links </span>
      <ul className="my-6 flex flex-col">
        <Link href={"login"} className="text-ownGreen underline">
          Login page
        </Link>
        <Link href={"register"} className="text-ownGreen underline">
          Register
        </Link>
        <Link href={"home"} className="text-ownGreen underline">
          Home
        </Link>
      </ul> */}
    </main>
  );
}
