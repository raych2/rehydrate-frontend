import { Link } from 'react-router-dom';

const NavLinkList = ({ open, setOpen }) => {
  return (
    <ul
      className={open ? 'navlinkContainer' : 'navlinkContainer active'}
      onClick={() => setOpen(!open)}
    >
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
  );
};
export default NavLinkList;
