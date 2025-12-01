import NavLogo from "./NavLogo";
import NavItems from "./NavItems";

const NavBar = () => {
  return (
    <nav className="border-b border-b-neutral-800 flex justify-center">
      <div className="flex justify-between items-center py-4.5 px-6 lg:px-0 max-w-[800px] w-full">
        <NavLogo />
        <ul className="flex gap-8 sm:gap-11">
          <NavItems />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
