import { Link } from 'react-router-dom';

const NavLinkList = ({ open, setOpen }) => {
  return (
    <ul
      className={open ? 'navlinkContainer' : 'navlinkContainer active'}
      onClick={() => setOpen(!open)}
    >
      <li>
        <Link to="about" className="navlink">
          About
        </Link>
      </li>
      <li>
        <Link to="tips" className="navlink">
          Tips
        </Link>
      </li>
      <li>
        <Link to="stats" className="navlink">
          Stats
        </Link>
      </li>
      <li>
        <Link to="quiz" className="navlink">
          Quiz
        </Link>
      </li>
    </ul>
  );
};
export default NavLinkList;
