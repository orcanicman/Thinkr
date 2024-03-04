import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-10 py-6">
      <header className="mb-10">
        <section className="flex items-center">
          <section className="flex w-96 items-center justify-between space-x-8">
            <Image alt="Logo" src={"Thinkr-logo.svg"} width={58} height={58} />

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
            <Image alt="Menu" src={"9-dot-menu.svg"} width={30} height={30} />
          </section>
        </section>
      </header>

      <section className="flex">
        <section className="w-96 rounded-xl bg-ownLightBlue">1</section>
        <section className="mx-8 grow rounded-xl bg-ownLightBlue">2</section>
        <section className="w-96 rounded-xl bg-ownLightBlue">3</section>
      </section>
    </main>
  );
}
