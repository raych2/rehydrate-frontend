import { Link } from 'react-router-dom';
import logo from '../assets/Rehydrate_Final_white_small2.png';

const Nav = () => {
  return (
    <nav>
      <Link to="/" className="logoContainer navlink">
        <img className="navLogo" alt="rehydrate logo" src={logo} />
        <div>Rehydrate</div>
      </Link>
      <ul className="navlinkContainer">
        <Link to="about" className="navlink">
          About
        </Link>
        <Link to="tips" className="navlink">
          Tips
        </Link>
        <Link to="stats" className="navlink">
          Stats
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
