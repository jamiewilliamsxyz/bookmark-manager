"use client";
import { usePathname } from "next/navigation";
import type { Route } from "next";
import Link from "next/link";

interface NavLinkProps<T extends string> {
  href: Route<T>;
  children: React.ReactNode;
}

const NavLink = <T extends string>({ href, children }: NavLinkProps<T>) => {
  const pathname = usePathname();

  return (
    <li className="flex items-center">
      <Link
        href={href}
        className={`${
          pathname === href ? "text-neutral-200" : "text-neutral-400"
        } cursor-pointer hover:opacity-75 duration-200 transition-opacity text-sm font-medium`}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
