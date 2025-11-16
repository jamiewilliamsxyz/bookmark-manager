import NavLogo from "./NavLogo";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <nav className="border-t border-t-neutral-800">
      <div className="w-[800px] mx-auto flex justify-between py-6">
        <NavLogo />
        <ul className="flex gap-11">
          <NavItems />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
