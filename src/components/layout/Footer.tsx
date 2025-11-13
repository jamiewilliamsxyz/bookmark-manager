import ExternalLink from "../ui/ExternalLink";

const Footer = () => {
  return (
    <footer className="border-t border-t-neutral-800 px-6 py-8 flex items-center justify-center gap-14">
      <ExternalLink
        text="Project Source Code"
        url="https://github.com/jamiewilliamsxyz/bookmark-manager"
      />

      <ExternalLink
        text="My GitHub Profile"
        url="https://github.com/jamiewilliamsxyz"
      />
    </footer>
  );
};

export default Footer;
