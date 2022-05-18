import { useState, useEffect } from 'react';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function getQuizQuestions() {
      try {
        const response = await fetch(
          'https://rehydrate-quiz.herokuapp.com/questions'
        );
        const data = await response.json();
        const { questions } = data;
        setQuestions(questions);
      } catch (err) {
        console.log(err);
      }
    }
    getQuizQuestions();
  }, []);

  return (
    <>
      <div className="topicSection smallerTopicSection">
        <div className="mainHeader">
          <div className="rectangle" id="quiz">
            Quiz
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
