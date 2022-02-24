import Image from "next/image";
import { Transition } from "@headlessui/react";
import { timeSince } from "../../utils/timeSince";

export function PostHeader({ post, user }) {
  return (
    <Transition
      appear={true}
      show={true}
      enter="transition ease duration-700 transform"
      enterFrom="opacity-0 translate-x-full"
      enterTo="opacity-100 translate-x-0"
      leave="transition ease duration-1000 transform"
      leaveFrom="opacity-100 translate-x-0"
      leaveTo="opacity-0 translate-x-full"
      className="flex items-center pb-2 px-4 mt-4 space-x-2"
    >
      <div className="relative h-10 w-10">
        <Image
          src={user.avatar}
          alt={user.name}
          layout="fill"
          priority
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col ">
        <p className="font-medium text-sm tracking-wide">{user.name}</p>
        <p className="text-xs font-light tracking-wide">
          Publicado{" "}
          {timeSince(post.createdAt) === "ontem"
            ? timeSince(post.createdAt)
            : "há " + timeSince(post.createdAt)}
        </p>
      </div>
    </Transition>
  );
}
