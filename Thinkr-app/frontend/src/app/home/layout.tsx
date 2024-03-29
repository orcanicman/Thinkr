import Link from "next/link";
import Image from "next/image";
import { RecommendedPost } from "./RecommendedPost";
import { routeGuard } from "../lib/routeGuard";
import { Metadata } from "next";
import { Profile, User } from "@/types/models";

export const metadata: Metadata = {
  title: "Home",
};

export const getUserData = async () => {
  // change type to what is kind of accurate
  const data = (await routeGuard("home")) as NonNullable<
    Awaited<ReturnType<typeof routeGuard>>
  >;

  // flatten
  const flattenedData = { ...data.profile, ...data.user };
  const { password, ...others } = flattenedData;
  return others;
};

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUserData();

  return (
    <main className="flex flex-col px-10">
      <Header
        user={user}
        className="sticky top-0 z-10 flex items-center bg-ownCream py-6 dark:bg-ownBlue"
      />

      <section className="flex">
        <Profile
          user={user}
          className="sticky top-[106px] hidden w-96 min-w-96 flex-col items-center self-start overflow-hidden rounded-3xl bg-ownLight xl:flex dark:bg-ownLightBlue"
        />
        <Content user={user} className="mx-8 grow">
          {children}
        </Content>
        <Recommended className="sticky top-[106px] hidden flex-col self-start rounded-3xl bg-ownLight lg:flex lg:w-64 lg:min-w-64 xl:w-96 xl:min-w-96 dark:bg-ownLightBlue" />
      </section>
    </main>
  );
}

const Header = ({
  className,
  user,
}: {
  className?: string;
  user: Omit<User & Profile, "password">;
}) => {
  return (
    <header className={`${className}`}>
      <section className="hidden w-96 min-w-96 items-center justify-between space-x-8 xl:flex">
        <Link href={"/home"}>
          <Image
            alt="Logo"
            src={"/Thinkr-logo.svg"}
            width={58}
            height={58}
            className="hidden dark:block"
          />
          <Image
            alt="Logo"
            src={"/Thinkr-logo-dark.svg"}
            width={58}
            height={58}
            className="block dark:hidden"
          />
        </Link>

        <input
          type="text"
          placeholder="# Explore"
          className="h-12 grow rounded-xl bg-ownLight px-4 py-1 font-bold dark:bg-ownLightBlue"
        />
      </section>

      <section className="mx-8 grow justify-between text-2xl font-bold">
        Home
      </section>

      <section className="hidden items-center justify-between space-x-8 lg:flex lg:w-64 lg:min-w-64 xl:w-96 xl:min-w-96">
        <button className="flex h-12 grow items-center rounded-3xl bg-ownLight dark:bg-ownLightBlue">
          {user.photo ? (
            <Image src={user.photo} alt="profile picture" />
          ) : (
            <div className="m-1 h-10 w-10 rounded-full bg-ownWhite" />
          )}

          <div className="mx-2 grow text-start">{user.displayName}</div>

          <div
            className="mx-4 h-0 w-0 rounded-full border-b-ownBlack border-l-ownTransparent border-r-ownTransparent border-t-ownTransparent dark:border-b-ownCream"
            style={{
              width: "0px",
              height: "0px",
              borderStyle: "solid",
              borderWidth: "0 7.5px 10px 7.5px",
              transform: "rotate(180deg)",
            }}
          />
        </button>
        <button>
          <Image
            alt="Menu"
            src={"/9-dot-menu.svg"}
            width={30}
            height={30}
            className="contrast-0 dark:contrast-100"
          />
        </button>
      </section>
    </header>
  );
};

const Profile = ({
  className,
  user,
}: {
  className?: string;
  user: Omit<User & Profile, "password">;
}) => {
  return (
    <section className={className}>
      {/* topPart */}
      <div className="relative mb-6 flex w-full flex-col items-center">
        {/* BANNER PLACEHOLDER */}
        {user.banner ? (
          <Image src={user.banner} alt="banner" className="mb-4 h-24 w-full" />
        ) : (
          <div className="mb-4 h-24 w-full bg-ownBlack" />
        )}

        {/* Picture PLACEHOLDER */}
        {user.photo ? (
          <Image
            src={user.photo}
            alt="profile picture"
            className="absolute mt-12 h-24 w-24 rounded-full bg-ownWhite"
          />
        ) : (
          <div className="absolute mt-12 h-24 w-24 rounded-full bg-ownWhite" />
        )}
      </div>

      <div className="flex flex-col items-center p-6">
        {/* NAME PLACEHOLDER */}
        <h2 className="text-lg font-bold">{user.displayName}</h2>
        {/* TAG PLACEHOLDER */}
        <h3 className="mb-1 text-ownGrey">@{user.username}</h3>
        <p className="text-center font-medium">{user.bio}</p>
      </div>

      <div className="flex w-full border-b border-t border-ownCream dark:border-ownLighterBlue">
        <button className="flex flex-1 flex-col items-center p-5">
          <div className="font-bold">1,024</div>
          <div className="text-ownGrey">Following</div>
        </button>
        <div className="border-r border-ownCream dark:border-ownLighterBlue" />
        <button className="flex flex-1 flex-col items-center p-5">
          <div className="font-bold">128</div>
          <div className="text-ownGrey">Followers</div>
        </button>
      </div>

      <Link
        href={`/home/${user.username}`}
        className="w-full p-4 text-center text-ownGreen hover:underline"
      >
        Show profile
      </Link>
    </section>
  );
};

const Content = ({
  className,
  children,
  user,
}: {
  className?: string;
  children: React.ReactNode;
  user: Omit<User & Profile, "password">;
}) => {
  return <section className={`${className}`}>{children}</section>;
};

const Recommended = ({ className }: { className?: string }) => {
  return (
    <section className={`${className} p-6`}>
      <div className="mb-4 flex">
        <h1 className="grow text-xl font-bold">Popular posts</h1>
        <button>
          <Image alt="Settings" src={"/gear-icon.svg"} width={26} height={26} />
        </button>
      </div>
      <h3 className="mb-4 text-ownGrey">RECENT POPULAR POSTS</h3>
      <RecommendedPost
        title="PLACEHOLDER TITLE 1  sa dafd a da da da"
        likes={255}
        link="#"
      />
      <RecommendedPost title="PLACEHOLDER TITLE 2" likes={1252} link="#" />
      <Link href={"#"} className="text-ownGreen hover:underline">
        Show more
      </Link>
    </section>
  );
};
