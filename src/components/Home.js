import logo from "../assets/Rehydrate_Final_white_small2.png";

const Home = () => {
  return (
    <div className="home">
      <h1 className="title">Rehydrate</h1>
      <img className="logo" alt="rehydrate logo" src={logo}></img>
      <button
        type="button"
        className="quizLink"
      >
        Learn More!
      </button>
    </div>
  );
};

export default Home;
