import { useState, useEffect } from 'react';
import FinalMessage from './FinalMessage';
import QuizHeader from './QuizHeader';
import Question from './Question';

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
        <QuizHeader />
        {loadingMessage ? (
          <h2>Loading ...</h2>
        ) : (
          <>
            {quizEnd ? (
              <FinalMessage score={score} retakeQuiz={retakeQuiz} />
            ) : (
              <Question
                score={score}
                questions={questions}
                currentQuestionNumber={currentQuestionNumber}
                selected={selected}
                correctAnswer={correctAnswer}
                disableButton={disableButton}
                moreInfo={moreInfo}
                handleClick={handleClick}
                handleNextQuestion={handleNextQuestion}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Quiz;
