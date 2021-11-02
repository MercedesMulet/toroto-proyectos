import { ContactButton } from '../../Buttons/ContactButton/ContactButton';

export const NavLinks = (props) => {
  return (
    <ul className="nav-ul">
      <li
        className="nav-li"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="/#" className="a">
          PROYECTOS
        </a>
      </li>
      <li
        className="nav-li"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="/#" className="a">
          SOBRE TOROTO
        </a>
      </li>
      <li
        className="nav-li"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="/#" className="a">
          BLOG
        </a>
      </li>
      <li
        className="nav-li"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="/#" className="a">
          <img
            src="./assets/icons/external-link.svg"
            alt="Ir a link externo"
            className="external-link-icon"
          />
          META REGISTRO
        </a>
      </li>
      <li
        className="nav-li contact-li"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <ContactButton />
      </li>
    </ul>
  );
};
