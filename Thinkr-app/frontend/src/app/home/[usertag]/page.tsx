import { Posts } from "../Posts";

// TODO: Fetch profile posts

export default function Page({ params }: { params: { usertag: string } }) {
  return (
    <main>
      <section className="mb-6 rounded-3xl bg-ownLightBlue">
        <header className="relative mb-16">
          {/* BANNER PLACEHOLDER */}
          <div className="mb-4 h-80 w-full rounded-t-3xl bg-ownBlack" />

          {/* Picture PLACEHOLDER */}
          <div className="absolute -bottom-16 left-8 h-36 w-36 rounded-full bg-ownWhite" />
        </header>
        <main className="p-6">
          <section className="mb-4 flex items-baseline space-x-2">
            <h1 className="text-2xl font-bold">USERNAME</h1>
            <span className="text-sm text-ownGrey">@{params.usertag}</span>
          </section>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iusto
            eaque vitae libero, nulla facere. Dolorum excepturi accusamus
            perspiciatis iure nulla, est quisquam. Maxime porro distinctio
            laboriosam unde sapiente non!
          </p>

          <section className="flex justify-between">
            <button className="active grow font-bold underline decoration-ownGreen decoration-2 underline-offset-8 hover:underline">
              Posts
            </button>
            <button className="grow font-bold decoration-ownGreen decoration-2 underline-offset-8 hover:underline">
              Liked posts
            </button>
            <button className="grow font-bold decoration-ownGreen decoration-2 underline-offset-8 hover:underline">
              Comments
            </button>
          </section>
        </main>
      </section>
      <Posts posts={[1, 2, 3, 4, 5]} />
    </main>
  );
}
