"use client";

import Link from "next/link";
import Image from "next/image";
import logoIcon from "../../../../public/logo.png";
import { useAuth } from "@/hooks/useAuth";

const NavIcon = () => {
  return (
    <div className="flex gap-2 items-center justify-center select-none">
      <Image
        src={logoIcon}
        draggable={false}
        alt="Bookmark Manager logo"
        className="w-7 h-7"
      />
      <p className="text-xl">Bookmark Manager</p>
    </div>
  );
};

const NavLogo = () => {
  const { session } = useAuth();

  if (session) {
    return <NavIcon />;
  } else {
    return (
      <Link href="/">
        <NavIcon />
      </Link>
    );
  }
};

export default NavLogo;
