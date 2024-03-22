"use client";

import Image from "next/image";
import { getUserData } from "./layout";
import { createPost } from "../lib/actions";
import { ReturnPost } from "@/types/models";
import { useRef, useState } from "react";

export const InputBox = ({
  user,
  onNewPost,
}: {
  user: Awaited<ReturnType<typeof getUserData>>;
  onNewPost: (post: ReturnPost) => void;
}) => {
  const textArea = useRef<HTMLTextAreaElement>(null);
  return (
    <div className="mb-8 flex rounded-3xl bg-ownLight p-8 dark:bg-ownLightBlue">
      {user.photo ? (
        <Image src={user.photo} alt={"photo"} />
      ) : (
        <div className="mr-8 h-12 w-12 rounded-full bg-ownWhite" />
      )}
      <form
        className="flex grow flex-col"
        action={async (formData) => {
          const post = await createPost(formData);
          post && onNewPost(post);
          if (textArea.current) {
            textArea.current.value = "";
          }
        }}
      >
        <textarea
          placeholder="What are you thinking about?"
          name="content"
          className="mb-8 grow resize-none rounded-xl bg-ownWhite p-4 dark:bg-ownLighterBlue"
          rows={1}
          onInput={(e) => {
            e.currentTarget.style.height = "";
            e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
          }}
          ref={textArea}
        />
        <div className="flex w-full">
          <button className="ml-auto rounded-xl border px-4 py-2">Send</button>
        </div>
      </form>
    </div>
  );
};
