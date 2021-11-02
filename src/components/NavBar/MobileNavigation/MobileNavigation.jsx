import { useState } from 'react';
import { NavLinks } from '../NavLinks/NavLinks';
import { Hamburguer } from '../Icons/Hamburguer';
import { Link } from 'react-router-dom';

export const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const barsIcon = (
    <Hamburguer className="bars-icon" onClick={() => setOpen(!open)} />
  );

  const closeIcon = (
    <Hamburguer className="close-icon" onClick={() => setOpen(!open)} />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className="mobile-navigation">
      <div className="container-logo">
        <Link to={`/`}>
          <img src="./assets/images/logo.svg" alt="Logo Toroto" />
        </Link>
      </div>
      <div className="bars-div">
        {open ? closeIcon : barsIcon}
        {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
      </div>
    </nav>
  );
};
