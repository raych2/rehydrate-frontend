import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home';
import About from './components/About';
import Tips from './components/Tips';
import Stats from './components/Stats';
import Quiz from './components/Quiz/Quiz';
import Footer from './components/Footer';
import './styles/main.scss';
import RestoreScroll from './components/RestoreScroll';

const App = () => {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <RestoreScroll>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="tips" element={<Tips />} />
            <Route path="stats" element={<Stats />} />
            <Route path="quiz" element={<Quiz />} />
          </Routes>
        </RestoreScroll>
      </main>
      <Footer />
    </div>
  );
};

export default App;
