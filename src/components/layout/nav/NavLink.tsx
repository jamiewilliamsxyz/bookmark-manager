import Link from "next/link";
import type { Route } from "next";

interface NavLinkProps<T extends string> {
  href: Route<T>;
  children: React.ReactNode;
}

const NavLink = <T extends string>({ href, children }: NavLinkProps<T>) => {
  return (
    <li className="flex items-center">
      <Link
        href={href}
        className="cursor-pointer hover:opacity-75 duration-200 transition-opacity text-neutral-400 text-sm font-medium"
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
