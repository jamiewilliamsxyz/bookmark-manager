import NavLogo from "./NavLogo";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="border-b border-b-neutral-800 py-6 px-10 flex items-center justify-between">
      <NavLogo />
      <ul className="flex gap-11">
        <NavLink
          href="/login"
          className="cursor-pointer text-medium text-lg hover:opacity-75 duration-200 transition-opacity"
        >
          Log In
        </NavLink>
        <NavLink
          href="/signup"
          className="cursor-pointer inline-flex items-center justify-center h-8 px-4 font-medium text-lg rounded-lg shadow-lg bg-neutral-100 text-neutral-800 hover:opacity-75 duration-200 transition-opacity"
        >
          Sign Up
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
