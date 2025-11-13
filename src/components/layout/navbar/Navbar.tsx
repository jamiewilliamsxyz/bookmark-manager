"use client";

import Link from "next/link";
import { Bookmark, User } from "lucide-react";
import NavLogo from "./NavLogo";
import NavLink from "./NavLink";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const { session } = useAuth();

  return (
    <nav className="border-b border-b-neutral-800 py-6 px-10 flex items-center justify-between">
      {session ? (
        <NavLogo />
      ) : (
        <Link href="/">
          <NavLogo />
        </Link>
      )}

      <ul className="flex gap-11">
        {session ? (
          <>
            <NavLink
              href="/bookmarks"
              className="cursor-pointer hover:opacity-75 duration-200 transition-opacity flex items-center gap-2 font-medium text-lg"
            >
              <Bookmark size={28} color="#f5f5f5" strokeWidth={1.5} />
              Bookmarks
            </NavLink>
            <NavLink
              href="/account"
              className="cursor-pointer hover:opacity-75 duration-200 transition-opacity flex items-center gap-2 font-medium text-lg"
            >
              <User size={28} color="#f5f5f5" strokeWidth={1.5} />
              Account
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              href="/login"
              className="cursor-pointer text-medium text-lg hover:opacity-75 duration-200 transition-opacity"
            >
              Log In
            </NavLink>
            <NavLink
              href="/signup"
              className="cursor-pointer inline-flex items-center justify-center h-8 px-3.5 font-medium text-lg rounded-lg shadow-lg bg-neutral-100 text-neutral-800 hover:opacity-75 duration-200 transition-opacity"
            >
              Sign Up
            </NavLink>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
