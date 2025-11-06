import Link from "next/link";

interface Props {
  href: string;
  className: string;
  children: React.ReactNode;
}

const NavLink = ({ href, className, children }: Props) => {
  return (
    <li className="flex items-center">
      <Link href={href} className={className}>
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
