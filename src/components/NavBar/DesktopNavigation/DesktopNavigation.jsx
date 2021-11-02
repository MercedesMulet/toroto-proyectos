import { NavLinks } from '../NavLinks/NavLinks';
import { Link } from 'react-router-dom';

export const DesktopNavigation = () => {
  return (
    <nav className="desktop-navigation">
      <Link to={`/`}>
        <img src="./assets/images/logo.svg" alt="Logo Toroto" />
      </Link>
      <NavLinks />
    </nav>
  );
};
