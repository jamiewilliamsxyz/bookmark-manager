interface FooterLinkProps {
  text: string;
  href: string;
}

const ExternalLink = ({ text, href }: FooterLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={href}
      aria-label={text}
      className="cursor-pointer hover:opacity-75 duration-200 transition-opacity text-neutral-400 text-sm font-medium"
    >
      {text}
    </a>
  );
};

export default ExternalLink;
