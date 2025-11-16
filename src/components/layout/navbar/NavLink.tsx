import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <li className="flex items-center">
      <Link
        href={href}
        className="cursor-pointer hover:opacity-75 duration-200 transition-opacity text-neutral-100"
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
