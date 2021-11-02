import React from 'react';
import { ButtonPrimary } from '../../../Buttons/ButtonPrimary/ButtonPrimary';
import { Tag } from '../../../Tag/Tag';
import { Link } from 'react-router-dom';

export const ProjectGridItem = ({ project }) => {
  return (
    <div className="project-grid-item">
      <img
        src={project.images[0]}
        alt={project.name}
        className="img-grid-item"
      />
      <div className="card-content">
        <div className="content-grid-item">
          <p className="volanta-grid-item">{project.location}</p>
          <h2 className="h2-grid-item">{project.name}</h2>
          <p className="txt-grid-item">{project.description}</p>
          <div className="tags-row">
            {project.services?.map((service) => (
              <Tag service={service} />
            ))}
          </div>
        </div>
        <div className="primary-btn-card">
          <Link to={`/${project.id}`} style={{ textDecoration: 'none' }}>
            <ButtonPrimary buttonStyle="btn--primary--outline">
              VER PROYECTO COMPLETO
            </ButtonPrimary>
          </Link>
        </div>
      </div>
    </div>
  );
};
