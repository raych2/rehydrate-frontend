import { Link } from 'react-router-dom';
import logo from '../../assets/Rehydrate_Final_white_small2.png';
import NavMenu from './NavMenu';

const Nav = () => {
  return (
    <nav>
      <Link to="/" className="logoContainer navlink">
        <img className="navLogo" alt="rehydrate logo" src={logo} />
        <div>Rehydrate</div>
      </Link>
      <NavMenu />
    </nav>
  );
};

export default Nav;
