import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Tips from './components/Tips';
import Stats from './components/Stats';
import Quiz from './components/Quiz';
import './styles/main.scss';

const App = () => {
  return (
    <div className="App">
      <h1>Rehydrate</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="tips" element={<Tips />} />
        <Route path="stats" element={<Stats />} />
        <Route path="quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
};

export default App;
