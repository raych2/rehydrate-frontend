const InfoLink = ({ question }) => {
  const parseEntities = (text) =>
    new DOMParser().parseFromString(text, 'text/html').body.innerText;
  const parsedUrl = parseEntities(question.infoUrl);

  return (
    <p className="info">
      More info:{' '}
      <a
        href={parsedUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="infoLink"
      >
        {parsedUrl}
      </a>
    </p>
  );
};

export default InfoLink;
