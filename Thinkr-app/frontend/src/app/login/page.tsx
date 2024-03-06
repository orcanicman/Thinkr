import Image from "next/image";

export default function Login() {
  return (
    <main className="flex max-h-screen min-h-screen flex-col overflow-hidden p-6 sm:items-center sm:p-0">
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

      <form className="flex flex-col sm:w-96 sm:items-center">
        <h1 className="my-6 text-6xl font-bold sm:my-10 sm:text-7xl">
          Sign in
        </h1>
        <h6 className="mb-8 hidden text-center font-light sm:block">
          Sign in to see what your friends are thinking!
        </h6>

        <input
          type="email"
          className="mb-4 w-full rounded-lg bg-ownLightBlue px-5 py-4 placeholder:text-ownWhite"
          placeholder="Email"
        />
        <input
          type="password"
          className="mb-4 w-full rounded-lg bg-ownLightBlue px-5 py-4 placeholder:text-ownWhite"
          placeholder="Password"
        />

        <label className="mb-4 flex w-full items-center space-x-2">
          <input
            type="checkbox"
            className="cursor-pointer appearance-none rounded bg-ownLightBlue p-2 checked:bg-ownGreen"
          />
          <span>Remember me</span>
        </label>

        <button
          type="submit"
          className="w-full rounded-lg bg-ownGreen py-3 shadow-lg shadow-ownBlack hover:opacity-80"
        >
          Login
        </button>
      </form>

      <footer className="absolute bottom-0 -z-10 w-screen overflow-hidden sm:h-24 lg:h-60">
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
