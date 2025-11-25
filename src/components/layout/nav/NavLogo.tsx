"use client";

import Link from "next/link";
import Image from "next/image";
import logoIcon from "../../../../public/logo.png";
import { useAuth } from "@/hooks/context/useAuth";

const NavLogo = () => {
  const { session } = useAuth();

  return (
    <Link
      href={session ? "/bookmarks" : "/"}
      className="flex gap-1.75 items-center justify-center hover:opacity-75 duration-200 transition-opacity"
    >
      <Image
        src={logoIcon}
        draggable={false}
        alt="Bookmark Manager logo"
        className="w-5.5 h-5.5 text-neutral-100"
      />
      <p className="font-medium text-neutral-100">Bookmark Manager</p>
    </Link>
  );
};

export default NavLogo;
