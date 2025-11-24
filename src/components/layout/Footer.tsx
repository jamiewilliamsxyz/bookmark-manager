import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <footer className="border-t border-t-neutral-800">
      <div className="w-[800px] mx-auto flex justify-center gap-22 py-4">
        <FooterLink
          text="Project source code"
          url="https://github.com/jamiewilliamsxyz/bookmark-manager"
        />

        <FooterLink
          text="My GitHub profile"
          url="https://github.com/jamiewilliamsxyz"
        />
      </div>
    </footer>
  );
};

export default Footer;
