import Image from "next/image";
import { createProfile } from "../lib/actions";
import { redirect } from "next/navigation";
import { routeGuard } from "../lib/routeGuard";

export default async function FinishSettingUpPage() {
  const { user, profile } = await routeGuard();

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
          await createProfile(formData);
          redirect("/finish-setting-up");
        }}
      >
        <h1 className="my-6 text-4xl font-bold sm:my-10 sm:mb-4 sm:text-5xl">
          Almost there...
        </h1>
        <h6 className="mb-8 hidden text-center font-light sm:block">
          Finish making your profile
        </h6>

        <input
          type="text"
          className="mb-4 w-full rounded-lg bg-ownLightBlue px-5 py-4 placeholder:text-ownWhite"
          placeholder="Display name"
          name="displayName"
          required
        />

        <input
          type="text"
          className="mb-4 w-full rounded-lg bg-ownLightBlue px-5 py-4 placeholder:text-ownWhite"
          placeholder="Biography"
          name="bio"
          required
        />

        <button
          type="submit"
          className="mb-4 w-full rounded-lg bg-ownGreen py-3 shadow-lg shadow-ownBlack hover:opacity-80"
        >
          Begin
        </button>
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
