interface Props {
  text: string;
  url: string;
}

const ExternalLink = ({ text, url }: Props) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={url}
      aria-label={text}
      className="cursor-pointer hover:opacity-75 duration-200 transition-opacity text-neutral-400"
    >
      {text}
    </a>
  );
};

export default ExternalLink;
