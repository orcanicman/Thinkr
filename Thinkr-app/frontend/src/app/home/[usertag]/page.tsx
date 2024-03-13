"use client";

export default function Page({ params }: { params: { usertag: string } }) {
  return (
    <main>
      <div>{params.usertag}</div>
    </main>
  );
}
