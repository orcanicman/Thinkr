"use client";

import { follow, unfollow } from "@/app/lib/actions";
import { ReturnUser } from "@/types/models";
import { useState } from "react";

export const FollowButton = ({
  user,
  initialIsFollowing,
}: {
  user: ReturnUser;
  initialIsFollowing?: boolean;
}) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  return (
    <form
      action={async (formData) => {
        if (!isFollowing) {
          await follow(formData);
          setIsFollowing(true);
        } else {
          await unfollow(formData);
          setIsFollowing(false);
        }
      }}
    >
      <button
        className={`rounded-xl border px-4 py-2 ${
          isFollowing
            ? "hover:bg-ownBlack hover:text-ownWhite dark:hover:bg-ownRed"
            : "hover:bg-ownBlue hover:text-ownWhite dark:hover:bg-ownLight dark:hover:text-ownBlack"
        }`}
        value={user.userId}
        name="user_id"
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
    </form>
  );
};
