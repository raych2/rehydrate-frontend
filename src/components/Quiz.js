import { useState, useEffect } from 'react';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

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

  return (
    <>
      {errorMessage && <p>An error has occured</p>}
      <div className="topicSection smallerTopicSection">
        <div className="mainHeader">
          <div className="rectangle" id="quiz">
            Quiz
          </div>
        </div>
        {loadingMessage ? (
          <h2>Loading ...</h2>
        ) : (
          <div className="questionContainer">
            <h2>Score: {score}/5</h2>
            <h2 className="instructions">Please select the best answer.</h2>
            {questions
              .filter(
                (question) =>
                  questions.indexOf(question) === currentQuestionNumber
              )
              .map((question, index) => {
                return (
                  <div key={question._id}>
                    <h3>
                      {currentQuestionNumber + 1}. {question.questionText}
                    </h3>
                    <div className="answerContainer">
                      {question.answerOptions.map((answer, index) => {
                        return (
                          <button key={answer._id} className="answer">
                            {answer.answerText}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
