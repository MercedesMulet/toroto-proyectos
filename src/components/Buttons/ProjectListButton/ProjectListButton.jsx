import React from 'react';
import { ButtonSecondary } from '../ButtonSecondary/ButtonSecondary';

export const ProjectListButton = () => {
  /* function onClick() {
    scrollTop: $('body').offset().top;
  } */

  return (
    <div className="project-list-btn">
      <ButtonSecondary />
      <a href="/#" /* onClick={onClick} */>
        <img
          src="/assets/icons/chevron-down.svg"
          alt="Ir abajo"
          className="to-projects-icon"
        />
      </a>
    </div>
  );
};
