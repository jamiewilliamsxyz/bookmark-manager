"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/context-hooks/useAuth";
import NavLink from "./NavLink";

const NavItems = () => {
  const { session, isLoading } = useAuth();

  if (isLoading) {
    return (
      <>
        <li className="h-4.5 w-17 bg-neutral-800 animate-pulse rounded-md self-center my-1.75"></li>
        <li className="h-4.5 w-17 bg-neutral-800 animate-pulse rounded-md self-center my-1.75"></li>
      </>
    );
  }

  if (session) {
    return (
      <>
        <NavLink href="/bookmarks">Bookmarks</NavLink>
        <NavLink href="/account">Account</NavLink>
      </>
    );
  } else {
    return (
      <>
        <NavLink href="/login">Log in</NavLink>
        <li className="flex items-center">
          <Link
            href="/signup"
            className="bg-neutral-100 px-3.5 py-1.5 font-medium text-sm rounded-md shadow text-neutral-800 cursor-pointer hover:opacity-75 duration-200 transition-opacity"
          >
            Sign up
          </Link>
        </li>
      </>
    );
  }
};

export default NavItems;
