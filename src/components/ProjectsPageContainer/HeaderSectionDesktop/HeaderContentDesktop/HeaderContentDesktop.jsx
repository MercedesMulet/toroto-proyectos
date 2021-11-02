import React from 'react';
import { ButtonPrimary } from '../../../Buttons/ButtonPrimary/ButtonPrimary';

export const HeaderContentDesktop = () => {
  return (
    <div className="header-content-desktop">
      <h1 className="h1-header-desktop">Somos desarrolladores de proyectos</h1>
      <p className="p-header-desktop">
        Lorem ipsum dolor sit amet, adipisicing elit. Et saepe alias molestias
        suscipit voluptatem eaque nobis dicta minima nemo. Qui quasi repellendus
        alias animi.
      </p>
      <ButtonPrimary buttonStyle="btn--primary--solid">
        PROPONER UN PROYECTO
      </ButtonPrimary>
    </div>
  );
};
