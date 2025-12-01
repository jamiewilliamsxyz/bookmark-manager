import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <footer className="border-t border-t-neutral-800 flex justify-center">
      <div className="max-w-[800px] flex justify-center gap-8 sm:gap-22 py-4.5 items-center px-6 lg:px-0 w-full">
        <FooterLink
          text="Project source code"
          href="https://github.com/jamiewilliamsxyz/bookmark-manager"
        />

        <FooterLink
          text="My GitHub profile"
          href="https://github.com/jamiewilliamsxyz"
        />
      </div>
    </footer>
  );
};

export default Footer;
