import { useState } from 'react';
import NavLinkList from './NavLinkList';

const NavMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={open ? 'menu' : 'menu close'}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </div>
      <NavLinkList open={open} setOpen={setOpen} />
    </>
  );
};

export default NavMenu;
