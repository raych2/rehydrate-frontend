const FinalMessage = ({ score, retakeQuiz }) => {
  return (
    <>
      <h2>
        Congratulations, you finished the quiz!
        <br />
        Your final score is {score}/5.
      </h2>
      <button className="next" onClick={retakeQuiz}>
        Retake quiz
      </button>
    </>
  );
};

export default FinalMessage;
