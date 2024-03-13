"use client";

export const InputBox = () => {
  return (
    <div className="mb-8 flex rounded-3xl bg-ownLight p-8 dark:bg-ownLightBlue">
      {/* PICTURE PLACEHOLDER */}
      <div className="mr-8 h-12 w-12 rounded-full bg-ownWhite" />
      <div className="flex grow flex-col">
        <textarea
          placeholder="What are you thinking about?"
          className="mb-8 grow resize-none rounded-xl bg-ownWhite p-4 dark:bg-ownLighterBlue"
          rows={1}
          onInput={(e) => {
            e.currentTarget.style.height = "";
            e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
          }}
        />
        <div className="flex w-full">
          <button className="ml-auto rounded-xl border px-4 py-2">Send</button>
        </div>
      </div>
    </div>
  );
};
