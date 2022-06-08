const Question = ({
  score,
  questions,
  currentQuestionNumber,
  selected,
  correctAnswer,
  disableButton,
  moreInfo,
  handleClick,
  handleNextQuestion,
}) => {
  const parseEntities = (text) =>
    new DOMParser().parseFromString(text, 'text/html').body.innerText;

  return (
    <div className="questionContainer">
      <h2>Score: {score}/5</h2>
      <h2 className="instructions">Please select the best answer.</h2>
      {questions
        .filter(
          (question) => questions.indexOf(question) === currentQuestionNumber
        )
        .map((question) => {
          return (
            <div key={question._id}>
              <h3>
                {currentQuestionNumber + 1}.{' '}
                {parseEntities(question.questionText)}
              </h3>
              <div className="answerContainer">
                {question.answerOptions.map((answer) => {
                  return (
                    <button
                      key={answer._id}
                      className="answer"
                      disabled={disableButton}
                      style={{
                        backgroundColor:
                          answer._id === selected ? correctAnswer : '',
                        borderColor:
                          answer._id === selected ? correctAnswer : '',
                        color: answer._id === selected ? '#fff' : '',
                      }}
                      onClick={() => handleClick(answer)}
                    >
                      {parseEntities(answer.answerText)}
                    </button>
                  );
                })}
              </div>
              {moreInfo && (
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
              )}
            </div>
          );
        })}
      <button className="next" onClick={handleNextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default Question;
