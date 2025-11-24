interface FooterLinkProps {
  text: string;
  url: string;
}

const ExternalLink = ({ text, url }: FooterLinkProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={url}
      aria-label={text}
      className="cursor-pointer hover:opacity-75 duration-200 transition-opacity text-neutral-400 text-sm"
    >
      {text}
    </a>
  );
};

export default ExternalLink;
