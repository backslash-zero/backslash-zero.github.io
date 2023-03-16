interface InfoProps {
  field: string;
  url: string;
  content: string;
}

const Info = ({ url, content, field }: InfoProps) => {
  return (
    <div className="font-mono text-xs">
      {url == null ? (
        <p className={`${field === "tagline" ? "font-sans text-base" : ""}`}>
          {content}
        </p>
      ) : (
        <a
          className="font-mono text-xs underline underline-offset-4"
          href={url}
        >
          {content}
        </a>
      )}
    </div>
  );
};

export default Info;
