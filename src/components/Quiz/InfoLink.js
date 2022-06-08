const InfoLink = ({ question, parseEntities }) => {
  return (
    <p className="info">
      More info:{' '}
      <a
        href={parseEntities(question.infoUrl)}
        target="_blank"
        rel="noopener noreferrer"
        className="infoLink"
      >
        {parseEntities(question.infoUrl)}
      </a>
    </p>
  );
};

export default InfoLink;
