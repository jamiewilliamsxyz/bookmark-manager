"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import NavLink from "./NavLink";

const NavItems = () => {
  const { session } = useAuth();

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
            className="bg-neutral-100 px-5 py-1 rounded-xl text-neutral-800 cursor-pointer hover:opacity-75 duration-200 transition-opacity text-lg"
          >
            Sign up
          </Link>
        </li>
      </>
    );
  }
};

export default NavItems;
