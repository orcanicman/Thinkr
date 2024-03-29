import Image from "next/image";
import Link from "next/link";
import { register } from "../lib/actions";
import { redirect } from "next/navigation";
import { routeGuard } from "../lib/routeGuard";

export default async function Register() {
  await routeGuard("login");

  return (
    <main className="no-scrollbar flex max-h-screen min-h-screen flex-col overflow-auto p-6 sm:items-center sm:p-0">
      <header className="flex flex-col items-center">
        <Image
          alt="Logo"
          src={"Thinkr-logo.svg"}
          width={58}
          height={58}
          className="m-6"
        />

        <h2 className="text-4xl font-bold">Thinkr</h2>
        <h6 className="font-light">&ldquo;Speak your mind&rdquo;</h6>
      </header>

      <form
        className="flex flex-col sm:w-96 sm:items-center"
        action={async (formData) => {
          "use server";
          await register(formData);
          redirect("/login");
        }}
      >
        <h1 className="my-6 text-4xl font-bold sm:my-10 sm:text-7xl">
          Register
        </h1>
        <h6 className="mb-8 hidden text-center font-light sm:block">
          Make an account to see what your friends are thinking!
        </h6>

        <input
          type="text"
          className="mb-4 w-full rounded-lg bg-ownLightBlue px-5 py-4 placeholder:text-ownWhite"
          placeholder="Username"
          name="username"
          required
        />
        <input
          type="email"
          className="mb-4 w-full rounded-lg bg-ownLightBlue px-5 py-4 placeholder:text-ownWhite"
          placeholder="Email"
          name="email"
          required
        />
        <input
          type="password"
          className="mb-4 w-full rounded-lg bg-ownLightBlue px-5 py-4 placeholder:text-ownWhite"
          placeholder="Password"
          name="password"
          required
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-ownGreen py-3 shadow-lg shadow-ownBlack hover:opacity-80"
        >
          Register
        </button>

        <Link
          href={"login"}
          className="my-4 self-start text-ownGreen underline"
        >
          Already have an account?
        </Link>
      </form>

      <footer className="absolute bottom-0 -z-10 hidden w-screen overflow-hidden sm:h-24 lg:block lg:h-60">
        <Image
          alt="LOL2"
          src={"Thinkr-login-blueFooter.svg"}
          width={1280}
          height={111}
          className="absolute -bottom-10 left-0 w-screen opacity-80 dark:opacity-20"
        />
        <Image
          alt="LOL"
          src={"Thinkr-login-greenFooter.svg"}
          width={1280}
          height={111}
          className="absolute -bottom-10 left-0 w-screen opacity-80 dark:opacity-20"
        />
      </footer>
    </main>
  );
}
