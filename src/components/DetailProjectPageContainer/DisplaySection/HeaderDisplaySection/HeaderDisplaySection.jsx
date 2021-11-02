import React from 'react';
import { Tag } from '../../../Tag/Tag';

export const HeaderDisplaySection = ({ project }) => {
  return (
    <div className="header-display">
      <img src={project.images[0]} alt="Proyecto" className="img-display" />
      <div className="content-display">
        <p className="volanta-display">{project.location}</p>
        <h2 className="h2-display">{project.name}</h2>
        <div className="tags-row">
          {project.services?.map((service) => (
            <Tag service={service} />
          ))}
        </div>
        <p className="txt-display">{project.description}</p>
      </div>
    </div>
  );
};
