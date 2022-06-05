import { useState, useEffect } from 'react';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [selected, setSelected] = useState('');
  const [disableButton, setDisableButton] = useState(false);
  const [moreInfo, setMoreInfo] = useState('');
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const parseEntities = (text) =>
    new DOMParser().parseFromString(text, 'text/html').body.innerText;

  useEffect(() => {
    async function getQuizQuestions() {
      try {
        setLoadingMessage(true);
        const response = await fetch(
          'https://rehydrate-quiz.herokuapp.com/questions'
        );
        const data = await response.json();
        const { questions } = data;
        setQuestions(questions);
      } catch (err) {
        console.log(err);
        setErrorMessage(true);
      }
      setLoadingMessage(false);
    }
    getQuizQuestions();
  }, []);

  const handleClick = (answer) => {
    setSelected(answer._id);
    if (answer.isCorrect) {
      setScore(score + 1);
      setCorrectAnswer('#60D394');
    } else {
      setCorrectAnswer('#EE6055');
    }
    setDisableButton(true);
    setMoreInfo(true);
  };

  const handleNextQuestion = () => {
    setDisableButton(false);
    setMoreInfo(false);
    const nextQuestion = currentQuestionNumber + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionNumber(nextQuestion);
    } else {
      setQuizEnd(true);
    }
  };

  const retakeQuiz = () => {
    setCurrentQuestionNumber(0);
    setSelected('');
    setScore(0);
    setQuizEnd(false);
  };

  return (
    <>
      {errorMessage && <p>An error has occured</p>}
      <div className="quizSection">
        <div className="mainHeader">
          <h1 className="rectangle" id="quiz">
            Quiz
          </h1>
        </div>
        {loadingMessage ? (
          <h2>Loading ...</h2>
        ) : (
          <>
            {quizEnd ? (
              <>
                <h2>
                  Congratulations, you finished the quiz!
                  <br />
                  Your final score is {score}/5
                </h2>
                <button className="next" onClick={retakeQuiz}>
                  Retake quiz
                </button>
              </>
            ) : (
              <div className="questionContainer">
                <h2>Score: {score}/5</h2>
                <h2 className="instructions">Please select the best answer.</h2>
                {questions
                  .filter(
                    (question) =>
                      questions.indexOf(question) === currentQuestionNumber
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
                                    answer._id === selected
                                      ? correctAnswer
                                      : '',
                                  borderColor:
                                    answer._id === selected
                                      ? correctAnswer
                                      : '',
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
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Quiz;
