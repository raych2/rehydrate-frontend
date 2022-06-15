import { Link } from 'react-router-dom';

const Tips = () => {
  return (
    <>
      <div className="topicSection smallerTopicSection">
        <div className="mainHeader">
          How to Save <div className="rectangle shorterTitle">Water</div>?
        </div>
        <div className="infoContainer">
          <Link to="/quiz" className="subHeader quizLink">
            Take a quiz
          </Link>
          <div className="subText">
            Test your knowledge on our website and record your score!
          </div>
        </div>
        <div className="infoContainer">
          <div className="subHeader">Read</div>
          <div className="subText">
            Rehydrate holds infographics updated with our research on saving
            water and related topics.
          </div>
        </div>
        <div className="infoContainer">
          <div className="subHeader">Share</div>
          <div className="subText">
            Our infographics and your quiz score are shareable to social media.
            Teach your peers what they can do to "Rehydrate!"
          </div>
        </div>
      </div>
    </>
  );
};

export default Tips;
