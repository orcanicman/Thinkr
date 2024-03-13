"use client";

import Image from "next/image";
import Link from "next/link";

export const RecommendedPost = ({
  likes,
  link,
  title,
}: {
  title: string;
  likes: number;
  link: string;
}) => {
  return (
    <Link href={link} className="mb-4 flex w-full justify-between space-x-2">
      <div className="">
        <h2 className="mb-1 overflow-hidden overflow-ellipsis whitespace-nowrap hover:underline lg:max-w-32 xl:max-w-60">
          {title}
        </h2>
        <h3 className="text-ownGrey">
          {Intl.NumberFormat("en-US", {
            notation: "compact",
            maximumFractionDigits: 1,
          }).format(likes)}{" "}
          Likes
        </h3>
      </div>
      <button className="min-w-7">
        <Image
          alt="Settings"
          src={"menu-meatball.svg"}
          width={26}
          height={26}
        />
      </button>
    </Link>
  );
};
