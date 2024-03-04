import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Image
        alt="Logo"
        src={"Thinkr-logo.svg"}
        width={58}
        height={58}
        className="m-6"
      />

      <h2 className="font-bold text-4xl">Thinkr</h2>
      <h6 className="font-light">&ldquo;Speak your mind&rdquo;</h6>

      <form className="flex flex-col items-center max-w-96">
        <h1 className="font-bold text-7xl mx-16 my-12">Sign in</h1>
        <h6 className="font-light mb-8">
          Sign in to see what your friends are thinking!
        </h6>

        <input
          type="email"
          className="rounded-lg bg-ownLightBlue placeholder:text-ownWhite px-5 py-3 mb-6 w-full"
          placeholder="Email"
        />
        <input
          type="password"
          className="rounded-lg bg-ownLightBlue placeholder:text-ownWhite px-5 py-3 mb-6 w-full"
          placeholder="Password"
        />

        <label className="w-full flex items-center space-x-2 mb-6">
          <input
            type="checkbox"
            className="appearance-none bg-ownLightBlue checked:bg-ownGreen p-2 rounded cursor-pointer"
          />
          <span>Remember me</span>
        </label>

        <button
          type="submit"
          className="w-full bg-ownGreen rounded-lg py-3 hover:opacity-80"
        >
          Login
        </button>
      </form>

      <footer className="overflow-hidden absolute bottom-0 w-screen h-24">
        <Image
          alt="LOL2"
          src={"Thinkr-login-blueFooter.svg"}
          width={1280}
          height={111}
          className="absolute left-0 -bottom-10 w-screen opacity-80 dark:opacity-20"
        />
        <Image
          alt="LOL"
          src={"Thinkr-login-greenFooter.svg"}
          width={1280}
          height={111}
          className="absolute left-0 -bottom-10 w-screen opacity-80 dark:opacity-20"
        />
      </footer>
    </main>
  );
}
