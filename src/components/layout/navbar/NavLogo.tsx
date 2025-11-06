import Image from "next/image";
import logoImage from "../../../../public/logo.png";

const NavLogo = () => {
  return (
    <Image
      src={logoImage}
      draggable={false}
      alt="Bookmark Manager logo"
      className="w-8 h-8 shadow-lg"
    />
  );
};

export default NavLogo;
