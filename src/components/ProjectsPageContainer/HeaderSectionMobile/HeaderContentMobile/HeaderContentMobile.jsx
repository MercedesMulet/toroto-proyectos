import React from 'react';
import { ButtonPrimary } from '../../../Buttons/ButtonPrimary/ButtonPrimary';
import { ProjectListButton } from '../../../Buttons/ProjectListButton/ProjectListButton';

export const HeaderContentMobile = () => {
  return (
    <div className="header-content-mobile">
      <h1 className="h1-header-mobile">Somos desarrolladores de proyectos</h1>
      <p className="p-header-mobile">
        Lorem ipsum dolor sit amet, adipisicing elit. Et saepe alias molestias
        suscipit voluptatem eaque nobis dicta minima nemo. Qui quasi repellendus
        alias animi.
      </p>
      <ButtonPrimary buttonStyle={'btn-primary-solid'}>
        PROPONER UN PROYECTO
      </ButtonPrimary>
      <ProjectListButton />
    </div>
  );
};
