import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-10 py-6">
      <header className="mb-10">
        <section className="flex items-center">
          <section className="flex w-96 items-center justify-between space-x-8">
            <Link href={"home"}>
              <Image
                alt="Logo"
                src={"Thinkr-logo.svg"}
                width={58}
                height={58}
              />
            </Link>

            <input
              type="text"
              placeholder="# Explore"
              className="h-12 grow rounded-3xl bg-ownLightBlue px-4 py-1 font-bold"
            />
          </section>

          <section className="mx-8 grow justify-between text-2xl font-bold">
            Home
          </section>

          <section className="flex w-96 items-center justify-between space-x-8">
            <button className="flex h-12 grow items-center rounded-3xl bg-ownLightBlue">
              {/* IMAGE PLACEHOLDER */}
              <div className="m-1 h-10 w-10 rounded-full bg-ownBlack" />
              {/* IMAGE PLACEHOLDER */}

              {/* NAME PLACEHOLDER */}
              <div className="mx-2 grow text-start">NAME</div>
              {/* NAME PLACEHOLDER */}

              {/* CHEVVY PLACEHOLDER */}
              <div
                className="mx-4 h-0 w-0 rounded-full"
                style={{
                  width: "0px",
                  height: "0px",
                  borderStyle: "solid",
                  borderWidth: "0 7.5px 10px 7.5px",
                  borderColor: "transparent transparent #E5E5E5 transparent",
                  transform: "rotate(180deg)",
                }}
              />
              {/* CHEVVYPLACEHOLDER */}
            </button>
            <button>
              <Image alt="Menu" src={"9-dot-menu.svg"} width={30} height={30} />
            </button>
          </section>
        </section>
      </header>

      <section className="flex">
        <section className="relative flex w-96 flex-col items-center overflow-hidden rounded-3xl bg-ownLightBlue">
          {/* topPart */}
          <div className="relative mb-6 flex w-full flex-col items-center">
            {/* IMAGE PLACEHOLDER */}
            <div className="mb-4 h-24 w-full bg-ownBlack" />

            {/* Picture PLACEHOLDER */}
            <div className="absolute mt-12 h-24 w-24 rounded-full bg-ownWhite" />
          </div>

          <div className="flex flex-col items-center p-6">
            {/* NAME PLACEHOLDER */}
            <h2 className="text-lg font-bold">NAME</h2>
            {/* TAG PLACEHOLDER */}
            <h3 className="text-ownGrey mb-1">@tag</h3>
            <p className="text-center font-medium">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              exercitationem optio quisquam?
            </p>
          </div>

          <div className="border-ownLighterBlue flex w-full border-b border-t">
            <button className="flex flex-1 flex-col items-center p-5">
              <div className="font-bold">1,024</div>
              <div className="text-ownGrey">Following</div>
            </button>
            <div className="border-ownLighterBlue border-r" />
            <button className="flex flex-1 flex-col items-center p-5">
              <div className="font-bold">128</div>
              <div className="text-ownGrey">Followers</div>
            </button>
          </div>

          <Link
            href={"#"}
            className="w-full p-4 text-center text-ownGreen underline"
          >
            Show profile
          </Link>
        </section>
        <section className="mx-8 grow rounded-3xl bg-ownLightBlue">2</section>
        <section className="w-96 rounded-3xl bg-ownLightBlue">3</section>
      </section>
    </main>
  );
}
