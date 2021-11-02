import React from 'react';
import { ButtonPrimary } from '../../Buttons/ButtonPrimary/ButtonPrimary';

export const ProjectDevelopmentSection = () => {
  return (
    <div className="project-dev-section">
      <h4 className="h4-dev-section">Somos desarrolladores de proyectos</h4>
      <p className="txt-dev-section">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <ButtonPrimary buttonStyle="btn--primary--solid">
        PROPONER UN PROYECTO
      </ButtonPrimary>
    </div>
  );
};
