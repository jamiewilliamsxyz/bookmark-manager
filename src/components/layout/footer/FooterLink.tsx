interface FooterLinkProps {
  text: string;
  mobileText: string;
  href: string;
}

const ExternalLink = ({ text, mobileText, href }: FooterLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={href}
      aria-label={text}
      className="cursor-pointer hover:opacity-75 duration-200 transition-opacity text-neutral-400 font-medium text-center text-sm"
    >
      <span className="hidden sm:block">{text}</span>
      <span className="sm:hidden block">{mobileText}</span>
    </a>
  );
};

export default ExternalLink;
