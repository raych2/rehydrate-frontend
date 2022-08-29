import InfoLink from './InfoLink';

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
  return (
    <div className="questionContainer">
      <h2>Score: {score}/5</h2>
      <h2 className="instructions">Please select the best answer.</h2>
      {questions
        .filter((question, index) => index === currentQuestionNumber)
        .map((currentQuestion) => {
          return (
            <div key={currentQuestion._id}>
              <h3>
                {currentQuestionNumber + 1}. {currentQuestion.questionText}
              </h3>
              <div className="answerContainer">
                {currentQuestion.answerOptions.map((answer, index) => {
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
                      {answer.answerText}
                    </button>
                  );
                })}
              </div>
              {moreInfo && <InfoLink question={currentQuestion} />}
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
