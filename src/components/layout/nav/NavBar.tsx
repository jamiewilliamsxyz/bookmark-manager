import NavLogo from "./NavLogo";
import NavItems from "./NavItems";

const NavBar = () => {
  return (
    <nav className="border-b border-b-neutral-800">
      <div className="w-[800px] mx-auto flex justify-between py-5 items-center">
        <NavLogo />
        <ul className="flex gap-11">
          <NavItems />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
