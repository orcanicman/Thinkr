import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col sm:items-center sm:p-0 p-6">
      <header className="flex flex-col items-center mb-4">
        <Image
          alt="Logo"
          src={"Thinkr-logo.svg"}
          width={58}
          height={58}
          className="m-6"
        />

        <h2 className="font-bold text-4xl">Thinkr</h2>
        <h6 className="font-light">&ldquo;Speak your mind&rdquo;</h6>
      </header>

      <form className="flex flex-col sm:w-96 sm:items-center">
        <h1 className="font-bold sm:text-7xl text-6xl sm:my-12 my-6">
          Sign in
        </h1>
        <h6 className="hidden sm:block font-light mb-8">
          Sign in to see what your friends are thinking!
        </h6>

        <input
          type="email"
          className="rounded-lg bg-ownLightBlue placeholder:text-ownWhite px-5 py-4 mb-4 w-full"
          placeholder="Email"
        />
        <input
          type="password"
          className="rounded-lg bg-ownLightBlue placeholder:text-ownWhite px-5 py-4 mb-4 w-full"
          placeholder="Password"
        />

        <label className="w-full flex items-center space-x-2 mb-4">
          <input
            type="checkbox"
            className="appearance-none bg-ownLightBlue checked:bg-ownGreen p-2 rounded cursor-pointer"
          />
          <span>Remember me</span>
        </label>

        <button
          type="submit"
          className="w-full bg-ownGreen rounded-lg py-3 shadow-ownBlack shadow-lg hover:opacity-80"
        >
          Login
        </button>
      </form>

      <footer className="overflow-hidden absolute bottom-0 w-screen sm:h-24 lg:h-60">
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
