import { DesktopNavigation } from './DesktopNavigation/DesktopNavigation';
import { MobileNavigation } from './MobileNavigation/MobileNavigation';

export const NavBar = () => {
  return (
    <nav className="nav">
      <DesktopNavigation />
      <MobileNavigation />
    </nav>
  );
};
