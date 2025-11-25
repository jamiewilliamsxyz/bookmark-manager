"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/context-hooks/useAuth";

const NotFoundPage = () => {
  const { session } = useAuth();

  return (
    <div className="flex flex-1 flex-col justify-center items-center px-8 w-full gap-4">
      <h1 className="text-6xl">404</h1>
      <h2 className="text-lg">Page not found</h2>
      <Link
        href={session ? "/bookmarks" : "/"}
        className="underline text-lg hover:opacity-75 duration-200 transition-opacity cursor-pointer"
      >
        Return
      </Link>
    </div>
  );
};

export default NotFoundPage;
